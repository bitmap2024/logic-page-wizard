
import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { X, Settings, Mic } from 'lucide-react';

interface VoiceCallDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isListening: boolean;
}

export const VoiceCallDialog = ({ isOpen, onClose, isListening }: VoiceCallDialogProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="bottom" 
        className="w-full h-full p-0 m-0 bg-black"
      >
        {/* Timer */}
        <div className="absolute top-4 left-0 right-0 text-center text-white text-sm">
          00:03 / 03:00
        </div>

        {/* Pink Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 animate-pulse"></div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-6">
          {/* Close Button */}
          <button 
            className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center"
            onClick={onClose}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Settings Button */}
          <button className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
            <Settings className="w-8 h-8 text-white" />
          </button>

          {/* Mic Button */}
          <button className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
            <Mic className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Listening Text */}
        <div className="absolute bottom-24 left-0 right-0 text-center text-white text-xl">
          我在听
        </div>

        {/* Dots */}
        <div className="absolute bottom-36 left-0 right-0 flex justify-center space-x-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white/50"></div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
