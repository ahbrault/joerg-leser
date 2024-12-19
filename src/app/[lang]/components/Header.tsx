'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Locale } from '../dictionaries'; // Importer le type Locale

interface HeaderDict {
  home: string;
  about: string;
  expertise: string;
  contact: string;
  language: string;
  english: string;
  french: string;
}

interface HeaderProps {
  dict: HeaderDict;
  currentLang: Locale;
}

interface NavLink {
  name: string;
  href: string;
}

const Header: React.FC<HeaderProps> = ({ dict, currentLang }) => {
  const navLinks: NavLink[] = useMemo(
    () => [
      { name: dict.home, href: '#home' },
      { name: dict.about, href: '#about' },
      { name: dict.expertise, href: '#expertise' },
      { name: dict.contact, href: '#contact' },
    ],
    [dict]
  );

  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = navLinks.map(link => link.href.replace('#', ''));
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: Array.from(Array(101).keys(), i => i / 100), // Seuils de 0 à 1
    };

    const observer = new IntersectionObserver(entries => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    }, options);

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navLinks]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setIsMenuOpen(false); // Fermer le menu mobile après le clic
      // Ne pas mettre à jour activeSection ici, laisser l'observer le faire
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed left-0 top-0 z-50 flex min-h-[70px] w-full border-b bg-white tracking-wide">
      <div className="container px-6 pt-4">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${currentLang}/#home`}
            scroll={false}
            onClick={e => handleLinkClick(e, '#home')}
            className="text-2xl font-medium uppercase"
          >
            Joerg Leser
          </Link>

          {/* Bouton d'ouverture du menu mobile */}
          <button
            className={`space-y-1.5 border-none hover:opacity-70 lg:hidden ${isMenuOpen ? 'hidden' : ''}`}
            onClick={toggleMenu}
            id="toggleOpen"
            type="button"
            aria-label="Ouvrir le menu"
          >
            <div className="h-0.5 w-6 bg-foreground"></div>
            <div className="h-0.5 w-6 bg-foreground"></div>
            <div className="h-0.5 w-6 bg-foreground"></div>
          </button>

          {/* Menu Mobile */}
          <div
            id="collapseMenu"
            className={`absolute left-0 right-0 top-full transform bg-white shadow-md transition-all duration-500 lg:hidden ${
              isMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none -translate-y-4 opacity-0'
            }`}
          >
            <button
              className="absolute -top-12 right-4 flex h-9 w-9 items-center justify-center bg-white"
              onClick={toggleMenu}
              aria-label="Fermer le menu"
            >
              <div className="absolute h-0.5 w-6 rotate-45 bg-foreground"></div>
              <div className="relative h-0.5 w-6 -rotate-45 bg-foreground"></div>
            </button>

            {/* Liens de navigation */}
            <ul className="flex flex-col px-6">
              {navLinks.map(navlink => (
                <li key={navlink.name}>
                  <Link
                    href={`/${currentLang}/${navlink.href}`}
                    scroll={false}
                    onClick={e => handleLinkClick(e, navlink.href)}
                    className={`block text-lg ${
                      activeSection === navlink.href.replace('#', '')
                        ? 'text-gold'
                        : 'text-gray-800'
                    } py-3 transition-colors hover:text-gold`}
                  >
                    {navlink.name}
                  </Link>
                </li>
              ))}
              {/* Sélecteur de Langue */}
              <li>
                <Link
                  href={currentLang === 'fr' ? '/en' : '/fr'}
                  className="hover:text-gold' py-3 text-gold transition-colors"
                >
                  {currentLang === 'fr' ? dict.english : dict.french}
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map(navlink => (
                <li key={navlink.name}>
                  <Link
                    href={`/${currentLang}/${navlink.href}`}
                    scroll={false}
                    onClick={e => handleLinkClick(e, navlink.href)}
                    className={`text-lg ${
                      activeSection === navlink.href.replace('#', '')
                        ? 'text-gold'
                        : 'text-gray-800'
                    } transition-colors hover:text-gold`}
                  >
                    {navlink.name}
                  </Link>
                </li>
              ))}
              {/* Sélecteur de Langue */}
              <li>
                <Link
                  href={currentLang === 'fr' ? '/en' : '/fr'}
                  className="py-3 text-gold transition-colors hover:text-gold"
                >
                  {currentLang === 'fr' ? dict.english : dict.french}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
