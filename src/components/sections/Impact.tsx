export default function Impact() {
  return (
    <section id="impact" className="py-20 px-6 bg-gradient-to-br from-secondary via-accent to-primary dark:from-secondary-dark dark:via-accent-dark dark:to-primary-dark border-y-4 border-accent dark:border-accent-dark">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-primary-dark via-accent-dark to-secondary-dark bg-clip-text text-transparent">
          Our Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm p-8 rounded-xl border-2 border-accent dark:border-accent-dark shadow-lg transform hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-text dark:text-text-light">Community Building</h3>
            <p className="text-text dark:text-text-light">Creating safe spaces for neurodivergent tech professionals to connect and grow.</p>
          </div>
          <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm p-8 rounded-xl border-2 border-accent dark:border-accent-dark shadow-lg transform hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-text dark:text-text-light">Workplace Advocacy</h3>
            <p className="text-text dark:text-text-light">Partnering with companies to create truly inclusive work environments.</p>
          </div>
          <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm p-8 rounded-xl border-2 border-accent dark:border-accent-dark shadow-lg transform hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-text dark:text-text-light">Career Development</h3>
            <p className="text-text dark:text-text-light">Providing resources and support for professional growth and success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}