// src/utils/GoogleAnalytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  // Initialize GA with your tracking ID
  ReactGA.initialize('G-Q24HFMCJLZ');
};

export const trackPage = (page) => {
  // Use your GA tracking ID here
  ReactGA.send({ hitType: "pageview", page: page });
};
