import { NavigationProgress, nprogress } from '@mantine/nprogress';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function RouterTransition() {
  const location = useLocation();

  useEffect(() => {
    nprogress.start();
    return () => {
      nprogress.complete();
    };
  }, [location]);

  return <NavigationProgress size={2} />;
}
