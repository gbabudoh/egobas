// src/hooks/trackPageViews.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPage as trackPageGA } from '../utils/GoogleAnalytics';

const useTrackPageViews = () => {
  const location = useLocation(); // This hook gives you the current location object

  useEffect(() => {
    // Tracking for Google Analytics
    trackPageGA(location.pathname + location.search);

    // Add Matomo tracking
    if (window._paq) {
      window._paq.push(['setCustomUrl', window.location.pathname + window.location.search]);
      window._paq.push(['trackPageView']);
      // If you're using additional Matomo features, you can add them here
    }
  }, [location]);
};

export default useTrackPageViews;
