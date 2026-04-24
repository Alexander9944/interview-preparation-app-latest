import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollWrapper = ({ children }) => {
  const effects = ['fade-up', 'zoom-in', 'fade-right'];
  const randomEffect = effects[Math.floor(Math.random() * effects.length)];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div data-aos={randomEffect}>
      {children}
    </div>
  );
};

export default ScrollWrapper;