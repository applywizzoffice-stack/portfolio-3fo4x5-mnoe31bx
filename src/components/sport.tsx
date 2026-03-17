'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';
import { sports } from '@/lib/portfolioData';

const Sports = () => {
  const sportPhotos: PhotoItem[] = sports.highlights;

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Sporting Career
        </h2>
        <p className="mt-4 text-muted-foreground">
          {sports.description}
        </p>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Sports;