export default function Impact() {
  return (
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
  );
}