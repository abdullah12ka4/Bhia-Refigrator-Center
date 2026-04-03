'use client';

import { useState } from 'react';
import { Upload, Trash2, X } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { galleryImages } from '../../data/mockData';
import { Dialog, DialogContent } from '../../components/ui/dialog';

export default function AdminGallery() {
  const [images, setImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const deleteImage = (image: string) => {
    setImages(prev => prev.filter(img => img !== image));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Gallery Management</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Upload and manage images for your website gallery
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Upload className="w-4 h-4 mr-2" />
          Upload Images
        </Button>
      </div>

      {/* Stats */}
      <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {images.length}
              </div>
              <div className="text-slate-600 dark:text-slate-400">Total Images</div>
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Click on an image to view full size
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Card key={index} className="group relative overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="aspect-square">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setSelectedImage(image)}
              >
                View
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => deleteImage(image)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}

        {/* Upload placeholder */}
        <Card className="border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:border-blue-500 dark:hover:border-blue-500 transition-colors cursor-pointer">
          <div className="aspect-square flex flex-col items-center justify-center text-slate-400 dark:text-slate-600">
            <Upload className="w-12 h-12 mb-2" />
            <span className="text-sm">Upload New</span>
          </div>
        </Card>
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
