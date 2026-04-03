import { Calendar, CheckCircle, Clock, Wrench, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { appointments, services, reviews } from '../../data/mockData';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Appointments',
      value: appointments.length.toString(),
      icon: Calendar,
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      title: 'Active Services',
      value: services.length.toString(),
      icon: Wrench,
      change: '+2 new',
      changeType: 'positive' as const
    },
    {
      title: 'Total Reviews',
      value: reviews.length.toString(),
      icon: Users,
      change: '4.8 avg rating',
      changeType: 'positive' as const
    },
    {
      title: 'Pending Requests',
      value: appointments.filter(a => a.status === 'pending').length.toString(),
      icon: Clock,
      change: '2 urgent',
      changeType: 'warning' as const
    }
  ];

  const recentAppointments = appointments.slice(0, 5);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Dashboard Overview</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.title}
                </CardTitle>
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                <p className={`text-xs mt-1 ${
                  stat.changeType === 'positive'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-yellow-600 dark:text-yellow-400'
                }`}>
                  {stat.changeType === 'positive' && <TrendingUp className="w-3 h-3 inline mr-1" />}
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Appointments */}
      <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-white">Recent Appointments</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Latest appointment requests from customers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white">{appointment.name}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[appointment.status]}`}>
                      {appointment.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{appointment.service}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    {appointment.date} at {appointment.time}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a href={`tel:${appointment.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    {appointment.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Popular Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {services.slice(0, 5).map((service, index) => (
                <div key={service.id} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700 dark:text-slate-300">{service.title}</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {Math.floor(Math.random() * 50) + 10} requests
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Recent Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {reviews.slice(0, 3).map((review) => (
                <div key={review.id} className="border-b border-slate-200 dark:border-slate-800 last:border-0 pb-3 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-slate-900 dark:text-white">{review.name}</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{review.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
