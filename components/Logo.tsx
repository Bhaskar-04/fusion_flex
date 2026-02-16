
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto fill-current">
        {/* Orange F */}
        <path 
          d="M20 20 H50 V35 H35 V50 H45 V65 H35 V85 H20 Z" 
          className="text-primary"
        />
        {/* Grey Mirrored F */}
        <path 
          d="M80 20 H50 V35 H65 V50 H55 V65 H65 V85 H80 Z" 
          className="text-secondary opacity-80"
        />
      </svg>
      <span className="font-bold text-xl tracking-tight">
        <span className="text-primary">Fusion</span>
        <span className="text-secondary">Flex</span>
      </span>
    </div>
  );
};

export default Logo;
