'use client'

import Link from "next/link";
import React from "react";

export default function Hero() {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            window.history.pushState(null, '', href);
        }
    };

    return (
        <div className="bg-white w-full pt-[100px]" id="home">
            <div className="px-6 pb-14 md:py-20 lg:px-8 lg:py-56">
                <div className="mx-auto max-w-5xl md:text-center">
                    <h1 className="text-5xl text-black">
                        Hospitality Brand & Concept Development
                    </h1>
                    <hr className="border-gold w-32 mt-5 mb-6 md:mx-auto"/>
                    <p className="mt-8 text-pretty text-lg text-gray-500 sm:text-xl/8">
                        We develop comprehensive brand and marketing strategies for hospitality businesses,
                        leveraging our extensive network to connect you with key partners and stakeholders,
                        creating a distinctive identity, engaging the right audience, and delivering
                        memorable guest experiences that drive loyalty, growth, and long-term profitability.
                    </p>
                    <Link href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
                        <button className="px-6 btn-gold py-3 border font-medium text-lg mt-8 md:mx-auto">
                            Contact
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
