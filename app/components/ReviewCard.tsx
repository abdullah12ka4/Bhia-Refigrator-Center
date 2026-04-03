import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface ReviewCardProps {
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

export function ReviewCard({ name, service, rating, comment, date }: ReviewCardProps) {
  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white">{name}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">{service}</p>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-slate-300 dark:text-slate-700'
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">{comment}</p>
        <p className="text-sm text-slate-500 dark:text-slate-500">
          {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </CardContent>
    </Card>
  );
}
