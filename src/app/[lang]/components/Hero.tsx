'use client';

import Link from 'next/link';
import React from 'react';

interface HeroDict {
  title: string;
  description: string;
  contactButton: string;
}

interface HeroProps {
  dict: HeroDict;
}

export default function Hero({ dict }: HeroProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <div className="w-full bg-white pt-[100px]" id="home">
      <div className="px-6 pb-14 md:py-20 lg:px-8 lg:py-56">
        <div className="mx-auto max-w-5xl md:text-center">
          <h1 className="text-5xl text-black">{dict.title}</h1>
          <hr className="mb-6 mt-5 w-32 border-gold md:mx-auto" />
          <p className="mt-8 text-pretty text-lg text-gray-500 sm:text-xl/8">{dict.description}</p>
          <Link href="#contact" onClick={e => handleLinkClick(e, '#contact')}>
            <button className="btn-gold mt-8 border px-6 py-3 text-lg font-medium md:mx-auto">
              {dict.contactButton}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
