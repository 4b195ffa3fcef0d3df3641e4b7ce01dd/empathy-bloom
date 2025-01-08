import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-primary/30 to-secondary/30 dark:from-primary-dark/10 dark:to-secondary-dark/10">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{t.hero.subtitle}</p>
        <Button size="lg" className="bg-accent hover:bg-accent-dark text-text dark:text-text-light transform hover:scale-105 transition-all">
          {t.hero.cta}
        </Button>
      </div>
    </section>
  );
}