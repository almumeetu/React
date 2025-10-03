
import React from 'react';

interface AlertProps {
  message: string;
}

export const Alert: React.FC<AlertProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="w-full max-w-xl my-4 p-4 bg-red-900/50 border border-red-700 text-red-200 rounded-lg text-center" role="alert">
      <span className="font-medium">Error:</span> {message}
    </div>
  );
};
