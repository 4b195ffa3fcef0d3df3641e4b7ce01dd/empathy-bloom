import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-text dark:text-text-light transition-colors">
            ASD.org
          </a>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setLanguage(language === 'en' ? 'pt-BR' : language === 'pt-BR' ? 'es' : 'en')}
              className="p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary-dark/20 transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
            </button>
            
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
          </div>
        </div>
      </div>
    </nav>
  );
}