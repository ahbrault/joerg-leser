// const values = [
//     { title: 'Excellence', description: 'Exceeding expectations at every step.' },
//     { title: 'Innovation', description: 'Continuously reinventing luxury experiences.' },
//     { title: 'Trust', description: 'Building lasting relationships with clients.' },
// ];

import {
    AcademicCapIcon,
    HandRaisedIcon,
    RocketLaunchIcon,
    SparklesIcon,
    SunIcon,
    UserGroupIcon,
} from '@heroicons/react/20/solid'

const values = [
    {
        name: 'Extensive Expertise in Luxury Hospitality',
        description: 'With over 20 years of experience in the luxury hospitality sector across multiple global brands (Park Hyatt, Peninsula, Ritz-Carlton) deep knowledge of managing top-tier hotels, driving brand positioning, and creating exceptional client experiences.',
        icon: RocketLaunchIcon,
    },
    {

        name: 'Proven Track Record in Brand and Marketing Strategy',
        description: 'Successfully led large-scale rebranding, marketing, and renovation projects, including establishing a centralized digital marketing department for Hyatt Hotels France and enhancing brand prestige through high-profile partnerships and luxury event organization.',
        icon: HandRaisedIcon,
    },
    {
        name: 'Leadership in Sales and Commercial Strategy',
        description: 'Demonstrated ability to optimize business performance through strategic sales initiatives, P&L management, and revenue growth strategies, consistently driving profitability and shareholder value.',
        icon: UserGroupIcon,
    },
    {
        name: 'Strong Network and High-Profile Partnerships',
        description: 'Developed a vast network of industry influencers and key stakeholders across luxury, art, and hospitality sectors, which will be leveraged to foster collaborations and elevate client brands in the consultancy business.',
        icon: AcademicCapIcon,
    },
    {
        name: 'International Experience and Multilingual Proficiency',
        description: 'Extensive global exposure and fluency in German, English and French, enabling effective communication and business development across diverse markets and cultures.',
        icon: SparklesIcon,
    },
    {
        name: 'Creative and Strategic Leadership',
        description: 'Expertise in brand storytelling, creative production, and digital experience design, ensuring innovative and tailored solutions for clients aiming to differentiate themselves in competitive markets.',
        icon: SunIcon,
    },
]
export default function Values() {
    return (
        <section className="w-full max-w-5xl py-20 bg-white" id="values">
            <h2>My Approach</h2>
            <hr className="mt-2 mb-4 border-gold w-32 mx-auto"/>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                {values.map((value, index) => (
                    <div key={value.name} className="relative px-6 pl-9">
                        <div className="inline-flex items-center gap-2 font-semibold text-2xl">
                            <div className="md:absolute md:-left-1 md:top-1 md:size-5 text-gold text-5xl md:text-4xl">{index + 1}.</div>
                            {value.name}
                        </div>
                        <p>{value.description}</p>
                    </div>
                ))}
            </dl>
        </section>
    );
}
