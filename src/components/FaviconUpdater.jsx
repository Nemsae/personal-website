import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FaviconUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const updateFavicon = () => {
      const path = location.pathname;
      let faviconName = 'home'; // default
      
      if (path === '/about') {
        faviconName = 'about';
      } else if (path === '/resume') {
        faviconName = 'resume';
      } else if (path === '/contact') {
        faviconName = 'contact';
      }
      
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
      existingFavicons.forEach(favicon => favicon.remove());
      
      // Add new favicon
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = `/favicons/${faviconName}.svg`;
      document.head.appendChild(link);
    };

    updateFavicon();
  }, [location]);

  return null;
};

export default FaviconUpdater;