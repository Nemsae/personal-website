import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FaviconUpdater: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const updateFavicon = (): void => {
      const path: string = location.pathname;
      let faviconName: string = 'home'; // default
      
      if (path === '/about') {
        faviconName = 'about';
      } else if (path === '/resume') {
        faviconName = 'resume';
      } else if (path === '/contact') {
        faviconName = 'contact';
      }
      
      // Remove existing favicons
      const existingFavicons: NodeListOf<Element> = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
      existingFavicons.forEach((favicon: Element) => favicon.remove());
      
      // Add new favicon
      const link: HTMLLinkElement = document.createElement('link');
      link.rel = 'icon';
      link.href = `/favicons/${faviconName}.svg`;
      document.head.appendChild(link);
    };

    updateFavicon();
  }, [location]);

  return null;
};

export default FaviconUpdater;