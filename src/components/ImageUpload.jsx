import React, { useRef } from 'react';
import { FaUpload } from 'react-icons/fa';

const ImageUpload = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current.click()}
        className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
      >
        <FaUpload /> upload Image
      </button>
    </div>
  );
};

export default ImageUpload;