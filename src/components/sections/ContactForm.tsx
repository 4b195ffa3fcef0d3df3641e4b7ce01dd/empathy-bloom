import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

export default function ContactForm() {
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
  );
}