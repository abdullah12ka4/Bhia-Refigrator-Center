'use client';

import { useState } from 'react';
import { Star, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ReviewCard } from '../components/ReviewCard';
import { reviews } from '../data/mockData';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { services } from '../data/mockData';

export default function ReviewsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', formData);
    setDialogOpen(false);
    // Reset form
    setFormData({
      name: '',
      service: '',
      rating: 5,
      comment: ''
    });
  };

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(r => r.rating === rating).length
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">Customer Reviews</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Read what our satisfied customers have to say about our services
          </p>
        </div>

        {/* Overall Rating */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="text-6xl font-bold text-slate-900 dark:text-white mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex gap-1 justify-center md:justify-start mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.round(averageRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-slate-300 dark:text-slate-700'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400">Based on {reviews.length} reviews</p>
              </div>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating, index) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm font-medium w-12 text-slate-700 dark:text-slate-300">{rating} star</span>
                    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400"
                        style={{ width: `${(ratingCounts[index] / reviews.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm w-8 text-slate-600 dark:text-slate-400">{ratingCounts[index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Add Review Button */}
        <div className="text-center mb-12">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-5 h-5 mr-2" />
                Write a Review
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <DialogHeader>
                <DialogTitle className="text-slate-900 dark:text-white">Write a Review</DialogTitle>
                <DialogDescription className="text-slate-600 dark:text-slate-400">
                  Share your experience with our services
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="review-name" className="text-slate-900 dark:text-white">Your Name</Label>
                  <Input
                    id="review-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="review-service" className="text-slate-900 dark:text-white">Service</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                    <SelectTrigger className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700">
                      <SelectValue placeholder="Select a service" />
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
                <div className="space-y-2">
                  <Label className="text-slate-900 dark:text-white">Rating</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, rating }))}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            rating <= formData.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-slate-300 dark:text-slate-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="review-comment" className="text-slate-900 dark:text-white">Your Review</Label>
                  <Textarea
                    id="review-comment"
                    required
                    value={formData.comment}
                    onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                    placeholder="Tell us about your experience..."
                    rows={4}
                    className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Submit Review
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
