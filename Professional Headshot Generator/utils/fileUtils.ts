
export const fileToBase64AndMime = (file: File): Promise<{ base64: string; mimeType: string }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // The result includes the data URL prefix (e.g., "data:image/png;base64,").
      // We need to split this to get the mime type and the pure base64 data.
      const parts = result.split(',');
      if (parts.length !== 2) {
        return reject(new Error("Invalid file format for base64 conversion."));
      }

      const mimePart = parts[0].split(':')[1].split(';')[0];
      const base64Data = parts[1];
      
      resolve({
        base64: base64Data,
        mimeType: mimePart
      });
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
