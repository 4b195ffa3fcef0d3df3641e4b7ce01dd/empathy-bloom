import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useToast } from '../components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { supabase } from '../integrations/supabase/client';

export default function Index() {
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: t.contact.success,
        duration: 3000,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: t.contact.error,
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/10 dark:from-background-dark dark:to-primary-dark/10 text-text dark:text-text-light transition-colors">
      <Navbar />
      
      {/* Hero Section */}
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

      {/* Journey Section */}
      <section id="story" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
            My Journey with Autism
          </h2>
          <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Background</h3>
                <p>With over 20 years of experience as a software engineer, I've dedicated my career to pushing the boundaries of technology and innovation.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Late Autism Diagnosis</h3>
                <p>In late 2023, I received an autism diagnosis that brought clarity to many of my life experiences and challenges.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Challenges Overcome</h3>
                <p>Throughout my career, I've navigated numerous obstacles in both personal and professional settings, often without understanding why certain situations were particularly challenging.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Inspiration</h3>
                <p>These experiences inspired the creation of pensodiferente.org, a platform dedicated to supporting neurodivergent individuals in the IT industry and promoting genuine inclusivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Impact Section */}
      <section id="impact" className="py-20 px-6 bg-accent/30 dark:bg-accent-dark/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Community Building</h3>
              <p>Creating safe spaces for neurodivergent tech professionals to connect and grow.</p>
            </div>
            <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Workplace Advocacy</h3>
              <p>Partnering with companies to create truly inclusive work environments.</p>
            </div>
            <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Career Development</h3>
              <p>Providing resources and support for professional growth and success.</p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-primary/30 dark:bg-primary-dark/10">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-primary/20 dark:border-primary-dark/20 focus:ring-2 focus:ring-primary-dark/20"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-primary/20 dark:border-primary-dark/20 focus:ring-2 focus:ring-primary-dark/20"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">{t.contact.message}</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-primary/20 dark:border-primary-dark/20 focus:ring-2 focus:ring-primary-dark/20 h-32"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent-dark text-text dark:text-text-light transform hover:scale-105 transition-all"
            >
              {t.contact.send}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}