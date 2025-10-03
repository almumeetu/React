import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { ImageCard } from './components/ImageCard';
import { Button } from './components/Button';
import { Alert } from './components/Alert';
import { generateProfessionalImage } from './services/geminiService';
import { ArrowRightIcon } from './components/icons/ArrowRightIcon';

const App: React.FC = () => {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalImagePreview, setOriginalImagePreview] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (file: File | null) => {
    if (file) {
      setOriginalFile(file);
      setGeneratedImage(null);
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setOriginalImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setOriginalFile(null);
      setOriginalImagePreview(null);
    }
  };

  const handleGenerateClick = useCallback(async () => {
    if (!originalFile) {
      setError('Please upload an image first.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const newImage = await generateProfessionalImage(originalFile);
      setGeneratedImage(newImage);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [originalFile]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <Header />
      <main className="w-full max-w-6xl flex-grow flex flex-col items-center">
        {!originalImagePreview && (
          <div className="w-full max-w-lg mt-12">
            <ImageUploader onFileChange={handleFileChange} />
          </div>
        )}

        {error && <Alert message={error} />}

        {originalImagePreview && (
          <div className="w-full flex flex-col items-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
               <ImageCard title="Original Image" imageUrl={originalImagePreview} />
               <div className="hidden md:flex justify-center">
                  <ArrowRightIcon className="w-12 h-12 text-teal-400" />
               </div>
               <ImageCard 
                 title="Professional Headshot" 
                 imageUrl={generatedImage}
                 isLoading={isLoading}
                 placeholderText="Your AI-generated headshot will appear here."
               />
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button onClick={handleGenerateClick} disabled={isLoading || !originalFile}>
                {isLoading ? 'Generating...' : 'Generate Headshot'}
              </Button>
              <button 
                onClick={() => handleFileChange(null)} 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </main>
      <footer className="text-center p-4 mt-8 text-gray-500 text-sm">
        <p>Powered by Gemini API. For best results, use a clear, front-facing photo.</p>
      </footer>
    </div>
  );
};

export default App;
