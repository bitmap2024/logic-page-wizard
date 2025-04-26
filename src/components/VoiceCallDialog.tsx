
import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { X, Mic } from 'lucide-react';

interface VoiceCallDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isListening: boolean;
}

export const VoiceCallDialog = ({ isOpen, onClose, isListening }: VoiceCallDialogProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[400px] bg-black text-white p-0 flex flex-col justify-between">
        {/* Main content with the pink circle */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 flex justify-center items-center animate-pulse">
          </div>
        </div>
        
        {/* Bottom controls */}
        <div className="w-full pb-10">
          {/* Dots */}
          <div className="flex justify-center my-4">
            <div className="flex space-x-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white"></div>
              ))}
            </div>
          </div>
          
          {/* Text */}
          <div className="text-center text-xl mb-8">
            我在听
          </div>
          
          {/* Controls */}
          <div className="flex justify-between px-10">
            {/* Close button */}
            <button 
              className="w-14 h-14 rounded-full bg-red-800 hover:bg-red-900 flex justify-center items-center"
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Middle control (empty space or control) */}
            <button 
              className="w-14 h-14 rounded-full bg-gray-700 hover:bg-gray-800 flex justify-center items-center"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H9M9 5V19M9 5H15M9 19H15M15 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H15M15 19V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Mic button */}
            <button 
              className="w-14 h-14 rounded-full bg-gray-700 hover:bg-gray-800 flex justify-center items-center"
            >
              <Mic className="w-6 h-6" />
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
