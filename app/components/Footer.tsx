import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">Brother Refrigerator</span>
                <span className="text-xs text-slate-400">Center</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted partner for all appliance repair and home services. Professional, reliable, and affordable solutions for your home.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/reviews" className="hover:text-blue-400 transition-colors">Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/appointment" className="hover:text-blue-400 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/refrigerator-repair" className="hover:text-blue-400 transition-colors">Refrigerator Repair</Link></li>
              <li><Link href="/services/ac-repair" className="hover:text-blue-400 transition-colors">AC Repair</Link></li>
              <li><Link href="/services/washing-machine-repair" className="hover:text-blue-400 transition-colors">Washing Machine Repair</Link></li>
              <li><Link href="/services/oven-repair" className="hover:text-blue-400 transition-colors">Oven Repair</Link></li>
              <li><Link href="/services/plumbing" className="hover:text-blue-400 transition-colors">Plumbing Services</Link></li>
              <li><Link href="/services/ups-repair" className="hover:text-blue-400 transition-colors">UPS Repair</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">+123 456 7890</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:info@brotherrefrigerator.com" className="hover:text-blue-400 transition-colors">info@brotherrefrigerator.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Address</p>
                  <p>123 Service Street<br />New York, NY 10001</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 Brother Refrigerator Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
