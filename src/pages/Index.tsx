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
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark">
      <Navbar />
      <Hero />
      
      <section id="mission" className="py-20 px-6 bg-gradient-to-br from-accent via-primary to-secondary dark:from-accent-dark dark:via-primary-dark dark:to-secondary-dark border-y-4 border-accent dark:border-accent-dark">
        <div className="container mx-auto text-center">
          <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm p-8 rounded-xl border-2 border-accent dark:border-accent-dark shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark bg-clip-text text-transparent">
              {t.mission.title}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-text dark:text-text-light">
              {t.mission.description}
            </p>
          </div>
        </div>
      </section>

      <section id="vision" className="py-20 px-6 bg-gradient-to-br from-secondary via-accent to-primary dark:from-secondary-dark dark:via-accent-dark dark:to-primary-dark border-y-4 border-accent dark:border-accent-dark">
        <div className="container mx-auto text-center">
          <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm p-8 rounded-xl border-2 border-accent dark:border-accent-dark shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark bg-clip-text text-transparent">
              {t.vision.title}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-text dark:text-text-light">
              {t.vision.description}
            </p>
          </div>
        </div>
      </section>

      <Journey />
      <Impact />

      <section id="join" className="py-20 px-6 bg-gradient-to-br from-primary via-secondary to-accent dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark border-y-4 border-accent dark:border-accent-dark">
        <div className="container mx-auto text-center">
          <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm p-8 rounded-xl border-2 border-accent dark:border-accent-dark shadow-lg">
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
                className="bg-gradient-to-r from-primary-dark to-secondary-dark hover:from-secondary-dark hover:to-primary-dark text-text-light transform hover:scale-105 transition-all border-2 border-accent-dark"
              >
                {t.join.member}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleSupport}
                className="border-2 border-accent-dark hover:bg-primary/20 dark:hover:bg-primary-dark/20 text-text dark:text-text-light transform hover:scale-105 transition-all"
              >
                {t.join.support}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}