import React from 'react';

const ScrollWrapper = ({ children }) => {
  const effects = ['fade-up', 'zoom-in', 'fade-right'];
  const randomEffect = effects[Math.floor(Math.random() * effects.length)];

  return (
    <div data-aos={randomEffect}>
      {children}
    </div>
  );
};

export default ScrollWrapper;