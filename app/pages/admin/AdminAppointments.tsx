'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, Phone } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { appointments } from '../../data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';

export default function AdminAppointments() {
  const [appointmentList, setAppointmentList] = useState(appointments);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const updateStatus = (id: string, status: 'pending' | 'confirmed' | 'completed' | 'cancelled') => {
    setAppointmentList(prev =>
      prev.map(a => a.id === id ? { ...a, status } : a)
    );
  };

  const filteredAppointments = filterStatus === 'all'
    ? appointmentList
    : appointmentList.filter(a => a.status === filterStatus);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Appointments</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage and track all customer appointments
          </p>
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-48 bg-white dark:bg-slate-900">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Appointments</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total', count: appointmentList.length, color: 'bg-slate-100 dark:bg-slate-800' },
          { label: 'Pending', count: appointmentList.filter(a => a.status === 'pending').length, color: 'bg-yellow-100 dark:bg-yellow-900/30' },
          { label: 'Confirmed', count: appointmentList.filter(a => a.status === 'confirmed').length, color: 'bg-blue-100 dark:bg-blue-900/30' },
          { label: 'Completed', count: appointmentList.filter(a => a.status === 'completed').length, color: 'bg-green-100 dark:bg-green-900/30' }
        ].map((stat) => (
          <Card key={stat.label} className={`${stat.color} border-0`}>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.count}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {filteredAppointments.map((appointment) => (
          <Card key={appointment.id} className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {appointment.name}
                    </h3>
                    <Badge className={statusColors[appointment.status]}>
                      {appointment.status}
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <div className="text-slate-600 dark:text-slate-400">
                      <span className="font-medium">Service:</span> {appointment.service}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      <span className="font-medium">Date:</span> {appointment.date} at {appointment.time}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      <span className="font-medium">Phone:</span>{' '}
                      <a href={`tel:${appointment.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                        {appointment.phone}
                      </a>
                    </div>
                  </div>
                  {appointment.message && (
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-medium">Message:</span> {appointment.message}
                    </div>
                  )}
                </div>
                <div className="flex lg:flex-col gap-2">
                  {appointment.status === 'pending' && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => updateStatus(appointment.id, 'confirmed')}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Confirm
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateStatus(appointment.id, 'cancelled')}
                        className="text-red-600 border-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-400"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </>
                  )}
                  {appointment.status === 'confirmed' && (
                    <Button
                      size="sm"
                      onClick={() => updateStatus(appointment.id, 'completed')}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Complete
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.location.href = `tel:${appointment.phone}`}
                    className="text-slate-600 border-slate-300 dark:text-slate-400 dark:border-slate-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <CardContent className="p-12 text-center">
            <p className="text-slate-600 dark:text-slate-400">No appointments found</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
