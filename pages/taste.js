import { useEffect } from 'react';
import { useRouter } from 'next/router';

function usePageReload() {
  const router = useRouter();

  useEffect(() => {
    const handlePageReload = (e) => {
      // Detect the page reload event
      if (e.currentTarget.performance.navigation.type === 1) {
        // Page is being reloaded, navigate to the home page
        router.push('/');
      }
    };

    // Add event listener for beforeunload
    window.addEventListener('beforeunload', handlePageReload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handlePageReload);
    };
  }, [router]);
}

export default usePageReload;
