'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ReviewCard } from '../../components/ReviewCard';
import { services, reviews } from '../../data/mockData';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const serviceReviews = reviews.filter(r => r.service === service?.title);

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = (Icons as any)[service.icon] || Icons.Wrench;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        <div className="absolute inset-0 container mx-auto px-4 flex items-center">
          <div className="text-white max-w-3xl">
            <Link href="/services" className="inline-flex items-center gap-2 mb-4 text-blue-400 hover:text-blue-300">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-5xl font-bold">{service.title}</h1>
                <p className="text-2xl text-blue-200 mt-2">{service.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Service Overview</h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {service.fullDescription}
              </p>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Service Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            {serviceReviews.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Customer Reviews</h2>
                <div className="space-y-6">
                  {serviceReviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-800">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Book This Service</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Get professional service from our certified technicians
                </p>
                <div className="space-y-3">
                  <Link href="/appointment" className="block">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full bg-green-500 hover:bg-green-600 border-0 text-white"
                    size="lg"
                    onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-800"
                    size="lg"
                    onClick={() => window.location.href = 'tel:+1234567890'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6">
                <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Service Highlights</h4>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Same-day service available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    90-day warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Certified technicians
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Genuine spare parts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
