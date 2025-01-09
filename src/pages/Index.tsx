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
    // Temporary toast until membership functionality is implemented
    toast({
      title: "Coming Soon",
      description: "Membership registration will be available soon. Stay tuned!",
      duration: 3000,
    });
  };

  const handleSupport = () => {
    // Temporary toast until donation functionality is implemented
    toast({
      title: "Coming Soon",
      description: "Donation options will be available soon. Thank you for your interest!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 dark:from-gray-900 dark:via-primary-dark/5 dark:to-secondary-dark/5 text-text dark:text-text-light transition-colors">
      <Navbar />
      <Hero />
      
      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
            {t.mission.title}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{t.mission.description}</p>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-6 bg-gradient-to-br from-secondary/20 to-primary/20 dark:from-secondary-dark/10 dark:to-primary-dark/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
            {t.vision.title}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {t.vision.description}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 px-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
            {t.story.title}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.story.content}
          </p>
        </div>
      </section>

      <Impact />

      {/* Join Us Section */}
      <section id="join" className="py-20 px-6 bg-gradient-to-br from-accent/30 to-primary/30 dark:from-accent-dark/10 dark:to-primary-dark/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
            {t.join.title}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {t.join.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={handleJoin}
              className="bg-accent hover:bg-accent-dark text-text dark:text-text-light transform hover:scale-105 transition-all"
            >
              {t.join.member}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleSupport}
              className="border-accent hover:bg-accent/20 transform hover:scale-105 transition-all"
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