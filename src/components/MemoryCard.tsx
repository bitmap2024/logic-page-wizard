
import React from 'react';

interface MemoryCardProps {
  score: number;
  index: number;
  content: {
    text: string;
    timestamp: string;
    category: string;
  };
}

export const MemoryCard = ({ score, index, content }: MemoryCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">{index}</span>
          <span className="text-sm text-gray-500">Score: {score.toFixed(2)}</span>
        </div>
        <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
          {content.category}
        </span>
      </div>
      <p className="text-gray-900">{content.text}</p>
      <div className="mt-2 text-xs text-gray-500">{content.timestamp}</div>
    </div>
  );
};
