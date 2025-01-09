import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Journey from '../components/sections/Journey';
import Impact from '../components/sections/Impact';
import ContactForm from '../components/sections/ContactForm';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

export default function Index() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleJoin = () => {
    toast({
      title: "Coming Soon",
      description: "Membership registration will be available soon. Stay tuned!",
      duration: 3000,
    });
  };

  const handleSupport = () => {
    toast({
      title: "Coming Soon",
      description: "Donation options will be available soon. Thank you for your interest!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 dark:from-gray-900 dark:via-primary-dark/5 dark:to-secondary-dark/5">
      <Navbar />
      <Hero />
      
      <section id="mission" className="py-20 px-6 bg-gradient-to-br from-primary/30 to-secondary/30 dark:from-primary-dark/10 dark:to-secondary-dark/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark bg-clip-text text-transparent">
            {t.mission.title}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-text dark:text-text-light">
            {t.mission.description}
          </p>
        </div>
      </section>

      <section id="vision" className="py-20 px-6 bg-gradient-to-br from-accent/30 to-primary/30 dark:from-accent-dark/10 dark:to-primary-dark/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark bg-clip-text text-transparent">
            {t.vision.title}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-text dark:text-text-light">
            {t.vision.description}
          </p>
        </div>
      </section>

      <Journey />
      <Impact />

      <section id="join" className="py-20 px-6 bg-gradient-to-br from-secondary/30 to-accent/30 dark:from-secondary-dark/10 dark:to-accent-dark/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark bg-clip-text text-transparent">
            {t.join.title}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-text dark:text-text-light">
            {t.join.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={handleJoin}
              className="bg-gradient-to-r from-primary-dark to-secondary-dark hover:from-secondary-dark hover:to-primary-dark text-text-light transform hover:scale-105 transition-all"
            >
              {t.join.member}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleSupport}
              className="border-2 border-primary-dark hover:bg-primary/20 dark:hover:bg-primary-dark/20 text-text dark:text-text-light transform hover:scale-105 transition-all"
            >
              {t.join.support}
            </Button>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}