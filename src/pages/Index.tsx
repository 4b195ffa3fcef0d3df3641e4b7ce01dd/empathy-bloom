import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Journey from '../components/sections/Journey';
import Impact from '../components/sections/Impact';
import ContactForm from '../components/sections/ContactForm';
import { Button } from '@/components/ui/button';

export default function Index() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/10 dark:from-background-dark dark:to-primary-dark/10 text-text dark:text-text-light transition-colors">
      <Navbar />
      <Hero />
      <Journey />
      
      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 bg-secondary/30 dark:bg-secondary-dark/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
            {t.mission.title}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{t.mission.description}</p>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Creating a tech industry where neurodiversity is celebrated and every individual can thrive authentically.
          </p>
        </div>
      </section>

      <Impact />

      {/* Join Us Section */}
      <section id="join" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Be part of creating a more inclusive tech industry. Whether you want to join, donate, or collaborate, your support makes a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent-dark text-text dark:text-text-light">
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="border-accent hover:bg-accent/20">
              Support Our Work
            </Button>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}