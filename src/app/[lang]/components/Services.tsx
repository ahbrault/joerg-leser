const services = [
  {
    title: 'Brand Strategy',
    description: 'Brand positioning, storytelling, and architecture for luxury hospitality.',
  },
  {
    title: 'Concept Development',
    description: 'Customer experience design and innovative hospitality concepts.',
  },
  {
    title: 'Strategic Partnerships',
    description: 'Building high-profile collaborations and ecosystems.',
  },
];

export default function Services() {
  return (
    <section className="w-full max-w-5xl py-20" id="values">
      <h2 className="mb-8 text-center font-baskerville text-3xl">What I Offer</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="rounded-lg border p-4 text-center">
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
