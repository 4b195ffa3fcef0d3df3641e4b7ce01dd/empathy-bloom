import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-primary via-secondary to-accent dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark border-b-4 border-accent dark:border-accent-dark">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-accent dark:border-accent-dark shadow-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary-dark via-accent-dark to-primary-dark bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-text dark:text-text-light">
            {t.hero.subtitle}
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-dark text-text dark:text-text-light transform hover:scale-105 transition-all border-2 border-accent-dark hover:border-accent"
          >
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}