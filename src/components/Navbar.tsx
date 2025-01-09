import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '#home', label: 'nav.home' },
    { href: '#about', label: 'nav.about' },
    { href: '#mission', label: 'nav.mission' },
    { href: '#vision', label: 'nav.vision' },
    { href: '#story', label: 'nav.story' },
    { href: '#impact', label: 'nav.impact' },
    { href: '#join', label: 'nav.join' },
    { href: '#contact', label: 'nav.contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 transition-all duration-300 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent whitespace-nowrap">
            ASD.org
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm hover:text-primary-dark transition-colors whitespace-nowrap px-2"
              >
                {translations[language][item.label]}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary-dark/20 transition-colors">
                <Globe className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('pt-BR')}>
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')}>
                  🇪🇸 Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary-dark/20 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary-dark/20 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-2 px-4 text-sm hover:bg-primary/20 dark:hover:bg-primary-dark/20 transition-colors rounded-lg"
              >
                {translations[language][item.label]}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}