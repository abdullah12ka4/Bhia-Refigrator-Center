import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/mockData';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">Our Services</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We provide comprehensive repair and maintenance services for all types of home appliances and systems. 
            Our certified technicians are trained to handle any issue with professionalism and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Fast Service</h3>
              <p className="text-slate-600 dark:text-slate-400">Same-day and emergency services available for urgent repairs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Quality Work</h3>
              <p className="text-slate-600 dark:text-slate-400">Certified technicians with years of experience and training</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Fair Pricing</h3>
              <p className="text-slate-600 dark:text-slate-400">Transparent pricing with no hidden fees or surprises</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
