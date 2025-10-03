
import React from 'react';
import { Spinner } from './Spinner';

interface ImageCardProps {
  title: string;
  imageUrl: string | null;
  isLoading?: boolean;
  placeholderText?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ title, imageUrl, isLoading = false, placeholderText }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-xl font-bold text-gray-300 mb-4">{title}</h2>
      <div className="aspect-square w-full max-w-md bg-gray-800 rounded-lg shadow-2xl overflow-hidden flex justify-center items-center border border-gray-700">
        {isLoading ? (
          <Spinner />
        ) : imageUrl ? (
          <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        ) : (
          <div className="text-gray-500 text-center p-8">{placeholderText}</div>
        )}
      </div>
    </div>
  );
};
