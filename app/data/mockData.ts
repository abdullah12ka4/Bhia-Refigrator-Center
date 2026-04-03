export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  fullDescription: string;
  benefits: string[];
  price: string;
}

export interface Review {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  featured?: boolean;
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export const services: Service[] = [
  {
    id: 'refrigerator-repair',
    title: 'Refrigerator Repair',
    description: 'Expert refrigerator repair services for all brands and models',
    icon: 'Refrigerator',
    image: 'https://images.unsplash.com/photo-1630459065645-549fe5a56db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZyaWdlcmF0b3IlMjByZXBhaXIlMjBzZXJ2aWNlfGVufDF8fHx8MTc3NTE4ODE4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription: 'Our expert technicians specialize in diagnosing and repairing all types of refrigerator issues, from cooling problems to ice maker malfunctions. We service all major brands including Samsung, LG, Whirlpool, GE, and more.',
    benefits: [
      'Same-day service available',
      'All brands supported',
      '90-day warranty on repairs',
      'Genuine spare parts',
      'Experienced technicians',
      'Affordable pricing'
    ],
    price: 'Starting from $79'
  },
  {
    id: 'ac-repair',
    title: 'AC Repair',
    description: 'Professional air conditioning repair and maintenance services',
    icon: 'Wind',
    image: 'https://images.unsplash.com/photo-1647022528152-52ed9338611d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmclMjByZXBhaXJ8ZW58MXx8fHwxNzc1MTg4MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription: 'Keep your home cool and comfortable with our professional AC repair services. We handle everything from routine maintenance to complex repairs for all types of air conditioning systems.',
    benefits: [
      'Emergency AC repair',
      'Gas refilling service',
      'Filter cleaning & replacement',
      'Annual maintenance contracts',
      'Energy efficiency consultation',
      'Licensed & insured technicians'
    ],
    price: 'Starting from $89'
  },
  {
    id: 'washing-machine-repair',
    title: 'Washing Machine Repair',
    description: 'Fast and reliable washing machine repair services',
    icon: 'Waves',
    image: 'https://images.unsplash.com/photo-1696546761269-a8f9d2b80512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXNoaW5nJTIwbWFjaGluZSUyMHJlcGFpcnxlbnwxfHx8fDE3NzUxODgxODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription: 'From front-load to top-load washing machines, our skilled technicians can repair all types of issues including drainage problems, motor failures, and electronic control board malfunctions.',
    benefits: [
      'Quick turnaround time',
      'Front & top load expertise',
      'Drum replacement service',
      'Motor & belt repairs',
      'Control panel fixing',
      'Water leakage solutions'
    ],
    price: 'Starting from $69'
  },
  {
    id: 'oven-repair',
    title: 'Oven Repair',
    description: 'Complete oven and stove repair solutions',
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1642979427252-13d5fd18bb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwxfHx8fDE3NzUxMjU5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription: 'Whether you have a gas or electric oven, we provide comprehensive repair services to get your appliance working like new. We fix heating issues, temperature control problems, and more.',
    benefits: [
      'Gas & electric oven repair',
      'Temperature calibration',
      'Heating element replacement',
      'Timer & thermostat repair',
      'Safety inspection included',
      'Microwave oven repair'
    ],
    price: 'Starting from $85'
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    description: 'Professional plumbing repair and installation',
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1578611709914-0dda0b55f9b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHJlcGFpciUyMHNlcnZpY2V8ZW58MXx8fHwxNzc1MTg4MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription: 'Our licensed plumbers handle all types of plumbing issues from leaky faucets to complete pipe replacements. We provide fast, reliable service for both residential and commercial properties.',
    benefits: [
      'Leak detection & repair',
      'Pipe installation & replacement',
      'Drain cleaning service',
      '24/7 emergency service',
      'Water heater repair',
      'Fixture installation'
    ],
    price: 'Starting from $75'
  },
  {
    id: 'ups-repair',
    title: 'UPS Repair',
    description: 'UPS and inverter repair and maintenance',
    icon: 'Battery',
    image: 'https://images.unsplash.com/photo-1758295745926-88faff7ec2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHJlcGFpciUyMHRvb2xzfGVufDF8fHx8MTc3NTA4NjM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription: 'Keep your power backup systems running efficiently with our UPS and inverter repair services. We specialize in battery replacement, circuit repairs, and complete system diagnostics.',
    benefits: [
      'Battery replacement service',
      'Circuit board repair',
      'Inverter troubleshooting',
      'Regular maintenance plans',
      'All brands serviced',
      'Fast diagnosis'
    ],
    price: 'Starting from $59'
  },
  {
    id: 'electronics-maintenance',
    title: 'Electronics Maintenance',
    description: 'General electronics repair and maintenance services',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1759434775823-40d8b9577a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWFuY2UlMjByZXBhaXIlMjB0ZWNobmljaWFufGVufDF8fHx8MTc3NTEyMzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription: 'We provide comprehensive electronics maintenance services for various home and office devices. Our technicians are skilled in diagnosing and fixing electronic equipment efficiently.',
    benefits: [
      'TV & monitor repair',
      'Home theater systems',
      'Small appliance repair',
      'Electronic controls',
      'Preventive maintenance',
      'Expert diagnostics'
    ],
    price: 'Starting from $65'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Ahmed Hassan',
    service: 'Refrigerator Repair',
    rating: 5,
    comment: 'Excellent service! My refrigerator was fixed within hours. Very professional and affordable. Highly recommend Brother Refrigerator Center.',
    date: '2026-03-28',
    featured: true
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    service: 'AC Repair',
    rating: 5,
    comment: 'The technician was knowledgeable and fixed my AC quickly. Great customer service and reasonable pricing. Will definitely use again!',
    date: '2026-03-25',
    featured: true
  },
  {
    id: '3',
    name: 'Mohammed Ali',
    service: 'Washing Machine Repair',
    rating: 4,
    comment: 'Good service and quick response. The washing machine is working perfectly now. Only minor delay in arrival but overall satisfied.',
    date: '2026-03-20'
  },
  {
    id: '4',
    name: 'Emily Chen',
    service: 'Plumbing Services',
    rating: 5,
    comment: 'Fixed my leaking pipes fast! Clean work and professional team. Very happy with the service provided.',
    date: '2026-03-15',
    featured: true
  },
  {
    id: '5',
    name: 'David Miller',
    service: 'Oven Repair',
    rating: 5,
    comment: 'My oven was not heating properly. They diagnosed and fixed it in no time. Excellent work!',
    date: '2026-03-10'
  },
  {
    id: '6',
    name: 'Fatima Rahman',
    service: 'UPS Repair',
    rating: 4,
    comment: 'Good experience overall. UPS battery replaced and working well. Fair pricing.',
    date: '2026-03-05'
  }
];

export const appointments: Appointment[] = [
  {
    id: '1',
    name: 'John Smith',
    phone: '+1234567890',
    service: 'Refrigerator Repair',
    date: '2026-04-05',
    time: '10:00 AM',
    message: 'Refrigerator not cooling properly',
    status: 'pending'
  },
  {
    id: '2',
    name: 'Lisa Brown',
    phone: '+1234567891',
    service: 'AC Repair',
    date: '2026-04-04',
    time: '2:00 PM',
    message: 'AC needs gas refilling',
    status: 'confirmed'
  },
  {
    id: '3',
    name: 'Michael Lee',
    phone: '+1234567892',
    service: 'Washing Machine Repair',
    date: '2026-04-03',
    time: '11:00 AM',
    message: 'Machine making loud noise',
    status: 'completed'
  }
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1630459065645-549fe5a56db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1647022528152-52ed9338611d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1696546761269-a8f9d2b80512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1642979427252-13d5fd18bb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1578611709914-0dda0b55f9b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1758295745926-88faff7ec2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1759434775823-40d8b9577a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1716395300732-3b36a3be038e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
];
