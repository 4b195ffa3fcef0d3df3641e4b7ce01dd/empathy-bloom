import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
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
    <nav className="fixed w-full bg-primary/90 dark:bg-primary-dark/90 backdrop-blur-lg z-50 transition-all duration-300 border-b-2 border-accent dark:border-accent-dark shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-secondary-dark to-accent-dark bg-clip-text text-transparent whitespace-nowrap border-b-2 border-transparent hover:border-accent-dark transition-all">
            ASD.org
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-text dark:text-text-light hover:text-accent-dark dark:hover:text-accent transition-colors whitespace-nowrap px-2 py-1 border-b-2 border-transparent hover:border-accent-dark dark:hover:border-accent"
              >
                {translations[language][item.label]}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2 rounded-lg hover:bg-secondary/80 dark:hover:bg-secondary-dark/80 transition-colors border-2 border-accent dark:border-accent-dark">
                <Globe className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-primary dark:bg-primary-dark border-2 border-accent dark:border-accent-dark">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="hover:bg-secondary/80 dark:hover:bg-secondary-dark/80">
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('pt-BR')} className="hover:bg-secondary/80 dark:hover:bg-secondary-dark/80">
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')} className="hover:bg-secondary/80 dark:hover:bg-secondary-dark/80">
                  🇪🇸 Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary/80 dark:hover:bg-secondary-dark/80 transition-colors border-2 border-accent dark:border-accent-dark"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-secondary/80 dark:hover:bg-secondary-dark/80 transition-colors border-2 border-accent dark:border-accent-dark"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in bg-primary dark:bg-primary-dark rounded-lg mt-4 border-2 border-accent dark:border-accent-dark">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-2 px-4 text-sm hover:bg-secondary/80 dark:hover:bg-secondary-dark/80 transition-colors rounded-lg text-text dark:text-text-light"
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