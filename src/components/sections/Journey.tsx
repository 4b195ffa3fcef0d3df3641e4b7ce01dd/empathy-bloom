export default function Journey() {
  return (
    <section id="story" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
          My Journey with Autism
        </h2>
        <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <p className="text-lg leading-relaxed mb-6">
            With over 20 years in software engineering, I faced challenges that remained unexplained until my autism diagnosis in late 2023.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            This clarity transformed my perspective, highlighting the unique strengths and obstacles of neurodivergent individuals.
          </p>
          <p className="text-lg leading-relaxed">
            Motivated by this revelation, I founded ASD.org to support others in the neurodivergent community, aiming to bridge the gap between talented individuals and inclusive companies in the IT sector.
          </p>
        </div>
      </div>
    </section>
  );
}