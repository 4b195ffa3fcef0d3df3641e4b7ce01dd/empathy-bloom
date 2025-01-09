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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([formData]);

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke('send-email', {
        body: {
          to: [formData.email],
          subject: 'Thank you for contacting ASD.org',
          html: `
            <h1>Thank you for reaching out!</h1>
            <p>Dear ${formData.name},</p>
            <p>We have received your message and will get back to you soon.</p>
            <p>Best regards,<br>ASD.org Team</p>
          `,
        },
      });

      if (emailError) throw emailError;

      toast({
        title: t.contact.success,
        duration: 3000,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: t.contact.error,
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary via-secondary to-accent dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark border-t-4 border-accent dark:border-accent-dark">
      <div className="container mx-auto max-w-md">
        <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm p-8 rounded-xl border-2 border-accent dark:border-accent-dark shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-text dark:text-text-light">
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-black/50 backdrop-blur-sm border-2 border-accent dark:border-accent-dark focus:ring-2 focus:ring-accent-dark text-text dark:text-text-light"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-text dark:text-text-light">
                {t.contact.email}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-black/50 backdrop-blur-sm border-2 border-accent dark:border-accent-dark focus:ring-2 focus:ring-accent-dark text-text dark:text-text-light"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-text dark:text-text-light">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-black/50 backdrop-blur-sm border-2 border-accent dark:border-accent-dark focus:ring-2 focus:ring-accent-dark h-32 text-text dark:text-text-light"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark hover:from-accent-dark hover:via-secondary-dark hover:to-primary-dark text-text-light transform hover:scale-105 transition-all disabled:opacity-50 border-2 border-accent-dark"
            >
              {isSubmitting ? t.contact.sending : t.contact.send}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}