import { useCallback, useState } from 'react';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, [setIsLoading]);
  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}
