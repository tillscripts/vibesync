import React from 'react';

const Skeleton = () => {
  return (
    <div className="flex items-center justify-between p-3 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-zinc-800 rounded"></div>
        <div className="space-y-2">
          <div className="h-3 w-32 bg-zinc-800 rounded"></div>
          <div className="h-2 w-20 bg-zinc-800 rounded"></div>
        </div>
      </div>
      <div className="h-8 w-24 bg-zinc-800 rounded-full"></div>
    </div>
  );
};

export default Skeleton;
