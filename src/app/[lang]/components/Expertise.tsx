import React from 'react';

interface ExpertiseDict {
  title: string;
  description: string;
  categories: {
    brandAudit: string;
    brandStrategy: string;
    storytelling: string;
    brandIdentity: string;
    spatialDesign: string;
  };
  descriptions: {
    brandAudit: string;
    brandStrategy: string;
    storytelling: string;
    brandIdentity: string;
    spatialDesign: string;
  };
}

interface ExpertiseProps {
  dict: ExpertiseDict;
}

// Interface pour typer les catégories d'expertise
interface Expertise {
  title: string;
  description: string;
}

// Données d'expertise avec descriptions
const expertiseData = (dict: ExpertiseDict): Expertise[] => [
  {
    title: dict.categories.brandAudit,
    description: dict.descriptions.brandAudit,
  },
  {
    title: dict.categories.brandStrategy,
    description: dict.descriptions.brandStrategy,
  },
  {
    title: dict.categories.storytelling,
    description: dict.descriptions.storytelling,
  },
  {
    title: dict.categories.brandIdentity,
    description: dict.descriptions.brandIdentity,
  },
  {
    title: dict.categories.spatialDesign,
    description: dict.descriptions.spatialDesign,
  },
];
const parseMediumText = (text: string) => {
  const regex = /\[\[(.*?)\]\]/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, group] = match;
    const index = match.index;

    if (index > lastIndex) {
      parts.push(text.substring(lastIndex, index));
    }

    parts.push(
      <span key={index} className="font-medium">
        {group}
      </span>
    );
    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};
const Expertise: React.FC<ExpertiseProps> = ({ dict }) => {
  const data = expertiseData(dict);

  return (
    <section className="w-full bg-white py-24" id="expertise">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2>Expertise</h2>
          <hr className="mx-auto mb-8 w-16 border-gold" />
          <p className="mb-16">
            We offer a full range of services to develop and strengthen your brand in the luxury
            hospitality industry.
          </p>
          <div className="grid gap-12 md:space-y-8">
            {data.map((expertise, index) => (
              <div
                key={index}
                className="grid grid-cols-1 items-start justify-between gap-6 text-left md:grid-cols-12 md:gap-12"
              >
                <div className="md:col-span-3">
                  <h3 className="mb-4 text-2xl font-medium">{expertise.title}</h3>
                  <hr className="w-16 border-gold" />
                </div>
                <p className="mt-0 md:col-span-9">{parseMediumText(expertise.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
