import React, { useEffect, useState } from 'react';

const Blob = () => {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX - 100, y: e.clientY - 100 });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const blobStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'linear-gradient(to right, mediumpurple, orangered)',
    position: 'absolute',
    filter: 'blur(75px)',
    left: position.x + 'px',
    top: position.y + 'px',
    zIndex: -1,
  };

  return <div className='blob' style={blobStyle}></div>;
};

export default Blob;
