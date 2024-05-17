import React, { useState } from 'react';
import '../index.css'

interface TooltipProps {
  texto: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ texto, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <a
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}  
      {showTooltip && (
        <a className="tooltiptext" style={{left: 'calc(50%-50px)'}}>
          {texto}
        </a>
      )}
    </a>
  );
};

export default Tooltip;