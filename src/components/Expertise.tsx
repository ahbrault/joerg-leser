import React from 'react';
import {FaSearch, FaBullseye, FaLightbulb, FaPaintBrush, FaMapMarkedAlt} from 'react-icons/fa';

// Interface pour typer les catégories d'expertise
interface Expertise {
    title: string;
    description: React.JSX.Element;
    icon: React.ReactElement;
}

// Données d'expertise avec descriptions
const expertiseData: Expertise[] = [
    {
        title: 'Brand Audit',
        description: (
            <>
                Comprehensive evaluations of your brand&apos;s market position and performance through in-depth <span
                className="font-medium">market research</span>, <span
                className="font-medium">competitive analysis</span>, and <span className="font-medium">opportunity assessments</span> to
                inform strategic decisions.
            </>
        ),
        icon: <FaSearch className="text-gold w-8 h-8"/>,
    },
    {
        title: 'Brand Strategy',
        description: (
            <>
                Development of a robust brand strategy that defines your <span
                className="font-medium">vision</span>, <span className="font-medium">values</span>, <span
                className="font-medium">positioning</span>, and <span className="font-medium">blueprint</span>, ensuring
                a strong and unique presence in the luxury hospitality market.
            </>
        ),
        icon: <FaBullseye className="text-gold w-8 h-8"/>,
    },
    {
        title: 'Storytelling',
        description: (
            <>
                Crafting compelling narratives and a consistent <span className="font-medium">brand voice</span> to
                engage your audience emotionally, supported by well-defined <span className="font-medium">editorial themes</span> for
                cohesive communication.
            </>
        ),
        icon: <FaLightbulb className="text-gold w-8 h-8"/>,
    },
    {
        title: 'Brand Identity',
        description: (
            <>
                Creation of a distinctive <span className="font-medium">visual identity</span> and <span
                className="font-medium">collateral design</span>, accompanied by comprehensive <span
                className="font-medium">brand guidelines</span> to maintain consistency across all platforms and
                materials.
            </>
        ),
        icon: <FaPaintBrush className="text-gold w-8 h-8"/>,
    },
    {
        title: 'Spatial Design',
        description: (
            <>
                Designing efficient and aesthetically pleasing <span
                className="font-medium">spatial layouts</span>, <span
                className="font-medium">hospitality concepts</span>, and <span
                className="font-medium">design directives</span> that enhance guest experiences and align with your
                brand identity.
            </>
        ),
        icon: <FaMapMarkedAlt className="text-gold w-8 h-8"/>,
    },
];

const Expertise: React.FC = () => {
    return (
        <section className="w-full py-24 bg-white" id="expertise">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2>Expertise</h2>
                    <hr className="border-gold w-16 mx-auto mb-8"/>
                    <p className="mb-16">
                        We offer a full range of services to develop and strengthen your brand in the luxury hospitality
                        industry.
                    </p>
                    <div className="grid gap-12 md:space-y-8">
                        {expertiseData.map((expertise, index) => (
                            <div
                                key={index}
                                className="text-left grid gap-6 md:gap-12 justify-between grid-cols-1 md:grid-cols-12 items-start"
                            >
                                <div className="md:col-span-3">
                                    <h3 className="text-2xl font-medium mb-4">{expertise.title}</h3>
                                    <hr className="border-gold w-16"/>
                                </div>
                                <p className="md:col-span-9 mt-0">
                                    {expertise.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
