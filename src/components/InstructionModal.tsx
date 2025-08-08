'use client';

import { useState, useEffect } from 'react';

interface InstructionModalProps {
  show: boolean;
  onClose: () => void;
}

const InstructionModal = ({ show, onClose }: InstructionModalProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 7000); // 7 seconds

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md mx-4 p-6 animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          ×
        </button>
        
        {/* Content */}
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-800 mb-2">
            Navigation
          </div>
          <p className="text-gray-600 leading-relaxed">
            Use arrows to turn pages. Actual Google Reviews are in black text. 
            Bret's responses are in <span className="text-red-600 font-medium">red</span>.
          </p>
        </div>
        
        {/* Auto-close indicator */}
        <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-orange rounded-full animate-grow" />
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;
