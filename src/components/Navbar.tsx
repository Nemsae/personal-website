import { Link, useLocation } from 'react-router-dom';
import { ModeToggle } from './theme-toggle';
import './Navbar.css';

interface NavItem {
  path: string;
  label: string;
}

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 space-x-6 flex">
          <Link to="/" className="home-link sr-only md:not-sr-only flex items-center space-x-2">
            <span className="font-bold sm:inline-block text-lg">John Son</span>
          </Link>
          <div className="nav-links flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-foreground/80 ${
                  location.pathname === item.path 
                    ? 'text-foreground' 
                    : 'text-foreground/60'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;