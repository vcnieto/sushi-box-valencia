import { useEffect, useState } from 'react';
import logo from '@/assets/LOGO.png';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 300);
    }, 500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="animate-scale-in">
        <img src={logo} alt="Sushi Box" className="h-32 w-32 object-contain" />
      </div>
    </div>
  );
};

export default LoadingScreen;
