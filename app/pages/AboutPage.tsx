import { CheckCircle, Award, Users, Target } from 'lucide-react';
import { galleryImages } from '../data/mockData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="About us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 container mx-auto px-4 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl text-slate-200">
              Your trusted partner for appliance repair and home services since 2011
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white text-center">Our Story</h2>
            <div className="prose prose-lg dark:prose-invert mx-auto text-slate-700 dark:text-slate-300">
              <p className="leading-relaxed mb-6">
                Brother Refrigerator Center was founded in 2011 with a simple mission: to provide reliable, 
                professional, and affordable appliance repair services to our community. What started as a small 
                family-owned business has grown into one of the most trusted names in home services.
              </p>
              <p className="leading-relaxed mb-6">
                Over the years, we've expanded our services to include AC repair, washing machine repair, plumbing, 
                and much more. Our commitment to excellence and customer satisfaction has remained unchanged, and 
                we continue to serve thousands of satisfied customers every year.
              </p>
              <p className="leading-relaxed">
                Today, we're proud to have a team of certified technicians who are passionate about their work 
                and dedicated to solving your problems quickly and efficiently. We treat every home like our own 
                and every customer like family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Expert Technicians</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 dark:text-white text-center">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                To provide exceptional appliance repair and home services that exceed customer expectations 
                through quality workmanship, honest communication, and fair pricing.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Quality First</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                We never compromise on quality. Every repair is backed by our 90-day warranty, and we use 
                only genuine parts to ensure long-lasting results.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Customer Focus</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Our customers are at the heart of everything we do. We listen, understand, and deliver 
                solutions that truly meet your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 dark:text-white text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              'Certified and experienced technicians',
              'Same-day and emergency services',
              '90-day warranty on all repairs',
              'Transparent and competitive pricing',
              'Genuine spare parts only',
              'Free diagnostic for major repairs',
              '24/7 customer support',
              'Fully insured and licensed'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white dark:bg-slate-950 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Certified & Licensed</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              Our technicians are fully certified and trained to handle all major appliance brands. 
              We stay updated with the latest repair techniques and safety standards to provide you 
              with the best service possible.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-600 dark:text-slate-400">
              <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-full">EPA Certified</div>
              <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-full">Licensed Technicians</div>
              <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-full">Insured Business</div>
              <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-full">BBB Accredited</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 dark:text-white text-center">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.slice(0, 8).map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
