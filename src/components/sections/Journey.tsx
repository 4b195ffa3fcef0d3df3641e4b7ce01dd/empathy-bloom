export default function Journey() {
  return (
    <section id="story" className="py-20 px-6 bg-gradient-to-br from-accent via-primary to-secondary dark:from-accent-dark dark:via-primary-dark dark:to-secondary-dark border-y-4 border-accent dark:border-accent-dark">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark bg-clip-text text-transparent">
          My Journey with Autism
        </h2>
        <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-accent dark:border-accent-dark">
          <p className="text-lg leading-relaxed mb-6 text-text dark:text-text-light">
            With over 20 years in software engineering, I faced challenges that remained unexplained until my autism diagnosis in late 2023.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-text dark:text-text-light">
            This clarity transformed my perspective, highlighting the unique strengths and obstacles of neurodivergent individuals.
          </p>
          <p className="text-lg leading-relaxed text-text dark:text-text-light">
            Motivated by this revelation, I founded ASD.org to support others in the neurodivergent community, aiming to bridge the gap between talented individuals and inclusive companies in the IT sector.
          </p>
        </div>
      </div>
    </section>
  );
}