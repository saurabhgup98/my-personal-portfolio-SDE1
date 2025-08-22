import React, { useEffect, useState, type ReactNode } from 'react';
import './HexagonLoader.css';

interface HexagonLoaderProps {
  children: ReactNode;
}

const HexagonLoader: React.FC<HexagonLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show text after 1 second
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Complete loading after 3 seconds
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className={`hexagon-loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="hexagon-container">
        <svg viewBox="0 0 200 200" className="hexagon-svg">
          <polygon
            points="100,10 173,55 173,145 100,190 27,145 27,55"
            className="hexagon-path"
          />
          {showText && (
            <text
              x="100"
              y="125"
              className="hexagon-text"
            >
              S
            </text>
          )}
        </svg>
      </div>
    </div>
  );
};

export default HexagonLoader;
