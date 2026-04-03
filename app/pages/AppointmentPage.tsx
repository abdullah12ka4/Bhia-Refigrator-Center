'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { services } from '../data/mockData';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Appointment booked:', formData);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <CardContent className="pt-12 pb-12">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Appointment Confirmed!</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Thank you for booking with us. We will contact you shortly to confirm your appointment details.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              You will receive a confirmation message on your phone.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">Book an Appointment</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours to confirm your appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Appointment Details</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Please provide your information and select a service
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-900 dark:text-white">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-900 dark:text-white">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+1 234 567 8900"
                        className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    {/* Service */}
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-slate-900 dark:text-white">Select Service *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.title}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-slate-900 dark:text-white">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => handleChange('date', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time" className="text-slate-900 dark:text-white">Preferred Time *</Label>
                        <Input
                          id="time"
                          type="time"
                          required
                          value={formData.time}
                          onChange={(e) => handleChange('time', e.target.value)}
                          className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-900 dark:text-white">Additional Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Describe your issue or any special requirements..."
                        rows={4}
                        className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Submit Appointment Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="border-slate-200 dark:border-slate-800 bg-blue-50 dark:bg-blue-950/30">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400 hover:underline">
                      +123 456 7890
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Email</p>
                    <a href="mailto:info@brotherrefrigerator.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      info@brotherrefrigerator.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Working Hours</p>
                    <p>Monday - Saturday<br />8:00 AM - 8:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Why Book With Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Same-day service available</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Certified & experienced technicians</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>90-day warranty on repairs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Transparent pricing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Emergency support available</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
