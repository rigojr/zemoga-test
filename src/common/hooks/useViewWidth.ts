import React from 'react';

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
