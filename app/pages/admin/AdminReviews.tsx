'use client';

import { useState } from 'react';
import { Star, Trash2, CheckCircle, Award } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { reviews } from '../../data/mockData';
import { Switch } from '../../components/ui/switch';

export default function AdminReviews() {
  const [reviewList, setReviewList] = useState(reviews);

  const deleteReview = (id: string) => {
    setReviewList(prev => prev.filter(r => r.id !== id));
  };

  const toggleFeatured = (id: string) => {
    setReviewList(prev =>
      prev.map(r => r.id === id ? { ...r, featured: !r.featured } : r)
    );
  };

  const averageRating = reviewList.reduce((acc, r) => acc + r.rating, 0) / reviewList.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Manage Reviews</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Moderate and feature customer reviews
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              {reviewList.length}
            </div>
            <div className="text-slate-600 dark:text-slate-400">Total Reviews</div>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">
                {averageRating.toFixed(1)}
              </span>
              <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="text-slate-600 dark:text-slate-400">Average Rating</div>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              {reviewList.filter(r => r.featured).length}
            </div>
            <div className="text-slate-600 dark:text-slate-400">Featured Reviews</div>
          </CardContent>
        </Card>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviewList.map((review) => (
          <Card key={review.id} className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                        {review.name}
                      </h3>
                      {review.featured && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                          <Award className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Featured</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-slate-300 dark:text-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-medium">Service:</span> {review.service}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">{review.comment}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    {new Date(review.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div className="flex lg:flex-col gap-2">
                  <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <Switch
                      checked={review.featured || false}
                      onCheckedChange={() => toggleFeatured(review.id)}
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">
                      Feature
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteReview(review.id)}
                    className="text-red-600 border-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-400"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
