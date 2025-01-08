import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useToast } from '../components/ui/use-toast';
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
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text dark:text-text-light transition-colors">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-primary/30 to-secondary/30 dark:from-primary-dark/10 dark:to-secondary-dark/10">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{t.hero.subtitle}</p>
          <button className="px-8 py-3 bg-accent hover:bg-accent-dark text-text dark:text-text-light rounded-lg transition-all transform hover:scale-105">
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-secondary/30 dark:bg-secondary-dark/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.mission.title}</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{t.mission.description}</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-primary/30 dark:bg-primary-dark/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.story.title}</h2>
          <h3 className="text-xl md:text-2xl mb-6">{t.story.subtitle}</h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{t.story.content}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-accent/30 dark:bg-accent-dark/10">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.contact.title}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border border-primary dark:border-primary-dark"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border border-primary dark:border-primary-dark"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">{t.contact.message}</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border border-primary dark:border-primary-dark h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-accent hover:bg-accent-dark text-text dark:text-text-light rounded-lg transition-all transform hover:scale-105"
            >
              {t.contact.send}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}