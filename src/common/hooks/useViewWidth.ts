import React from 'react';

/**
 * useViewWidth is a custom hook that offer the width of the current viewport.
 */
const useViewWidth = () => {
  const [widthView, setWidthView] = React.useState(0);

  React.useEffect(() => {
    const handleWidth = () => setWidthView(window.innerWidth);
    window.addEventListener('resize', handleWidth);
    handleWidth();
    return () => window.removeEventListener('resize', handleWidth);
  }, []);
  return widthView;
};

export default useViewWidth;
