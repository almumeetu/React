
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full max-w-6xl text-center mb-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500">
        AI Professional Headshot Generator
      </h1>
      <p className="mt-4 text-lg text-gray-400">
        Transform your photo into a polished LinkedIn profile picture in seconds.
      </p>
    </header>
  );
};
