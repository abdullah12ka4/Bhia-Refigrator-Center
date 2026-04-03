import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export function ServiceCard({ id, title, description, icon, image }: ServiceCardProps) {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[icon] || Icons.Wrench;

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-slate-900 dark:text-white">{title}</CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`/services/${id}`}>
          <Button variant="ghost" className="w-full justify-between group/btn text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
