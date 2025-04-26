
import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { X, MicOff, Mic } from 'lucide-react';

interface VoiceCallDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isListening: boolean;
}

export const VoiceCallDialog = ({ isOpen, onClose, isListening }: VoiceCallDialogProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[400px] bg-black text-white">
        <SheetHeader className="text-center">
          <SheetTitle className="text-white">Voice Chat</SheetTitle>
          <SheetDescription className="text-gray-400">
            {isListening ? "I'm listening..." : "Click the mic to start"}
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex justify-center items-center gap-4 h-48">
          <button 
            className="p-4 rounded-full bg-red-600 hover:bg-red-700"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative">
            <div className={`absolute inset-0 bg-pink-400 rounded-full ${isListening ? 'animate-pulse' : ''}`} 
                 style={{opacity: 0.3}} />
            <button 
              className="p-8 rounded-full bg-white relative"
            >
              {isListening ? (
                <MicOff className="w-8 h-8 text-black" />
              ) : (
                <Mic className="w-8 h-8 text-black" />
              )}
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
