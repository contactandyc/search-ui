import { useState, useEffect } from 'react';

// Custom hook to get the window dimensions
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
