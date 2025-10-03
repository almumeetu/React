
import React, { useRef } from 'react';
import { UploadIcon } from './icons/UploadIcon';

interface ImageUploaderProps {
  onFileChange: (file: File | null) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileChange(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-64 border-2 border-dashed border-gray-600 rounded-lg flex flex-col justify-center items-center cursor-pointer hover:border-teal-400 hover:bg-gray-800 transition-all duration-300 ease-in-out"
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
      />
      <div className="text-center">
        <UploadIcon className="mx-auto h-12 w-12 text-gray-500" />
        <p className="mt-4 text-lg font-semibold text-gray-300">
          Click to upload an image
        </p>
        <p className="text-sm text-gray-500">
          PNG, JPG, or WEBP. Best with a clear view of your face.
        </p>
      </div>
    </div>
  );
};
