'use client';

import { ChevronLeft, ChevronRight, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { ServiceCard } from '../components/ServiceCard';
import { ReviewCard } from '../components/ReviewCard';
import { services, reviews } from '../data/mockData';
import Link from 'next/link';

const heroSlides = [
  {
    title: 'Professional Appliance Repair Services',
    subtitle: 'Fast, Reliable & Affordable Solutions',
    image: 'https://images.unsplash.com/photo-1759434775823-40d8b9577a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  },
  {
    title: 'Expert AC & Refrigerator Repair',
    subtitle: 'Same Day Service Available',
    image: 'https://images.unsplash.com/photo-1630459065645-549fe5a56db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  },
  {
    title: 'Complete Home Service Solutions',
    subtitle: 'Trusted by Thousands of Customers',
    image: 'https://images.unsplash.com/photo-1716395300732-3b36a3be038e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  },
];

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredServices = services.slice(0, 6);
  const featuredReviews = reviews.filter(r => r.featured);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
        ))}
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="bg-green-500 hover:bg-green-600 border-0 text-white text-lg px-8"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Welcome to Brother Refrigerator Center
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                With over 15 years of experience, we are your trusted partner for all appliance repair and home service needs. Our team of certified technicians is dedicated to providing fast, reliable, and affordable solutions.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Certified & Experienced Technicians',
                  'Same Day Service Available',
                  '90-Day Warranty on All Repairs',
                  'Affordable & Transparent Pricing',
                  '24/7 Emergency Support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-800">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1716395300732-3b36a3be038e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Professional technician"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Our Services</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We offer comprehensive repair and maintenance services for all your home appliances and systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">What Our Customers Say</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/reviews">
              <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-800">
                Read All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our expert technicians are ready to help you. Book an appointment or call us now!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/appointment">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8">
                Book Appointment
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8"
              onClick={() => window.location.href = 'tel:+1234567890'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
