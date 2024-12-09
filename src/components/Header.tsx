'use client';
import React, {useState, useEffect, useMemo} from 'react';
import Link from 'next/link';

interface NavLink {
    name: string;
    href: string;
}

const Header: React.FC = () => {
    const navLinks: NavLink[] = useMemo(()=> ([
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Values', href: '#values' },
        { name: 'Contact', href: '#contact' },
    ]), []);

    const [activeSection, setActiveSection] = useState<string>('home');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const sections = navLinks.map(link => link.href.replace('#', ''));
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: Array.from(Array(101).keys(), i => i / 100), // Seuils de 0 à 1
        };

        const observer = new IntersectionObserver((entries) => {
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
            // Ne pas mettre à jour `activeSection` ici, laisser l'observer le faire
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='flex border-b bg-white min-h-[70px] tracking-wide z-50 w-full fixed top-0 left-0'>
            <div className='flex items-center justify-between w-full container mx-auto px-4'>
                {/* Logo */}
                <Link
                    href={navLinks[0].href}
                    scroll={false}
                    onClick={(e) => handleLinkClick(e, '#home')}
                    className="font-medium text-2xl uppercase"
                >
                    Joerg Leser
                </Link>

                {/* Bouton d'ouverture du menu mobile */}
                <button
                    className={`space-y-1.5 border-none hover:opacity-70 lg:hidden ${isMenuOpen ? 'hidden' : ''}`}
                    onClick={toggleMenu}
                    id="toggleOpen"
                    type='button'
                    aria-label='Ouvrir le menu'
                >
                    <div className='h-0.5 w-6 bg-foreground'></div>
                    <div className='h-0.5 w-6 bg-foreground'></div>
                    <div className='h-0.5 w-6 bg-foreground'></div>
                </button>

                {/* Menu Mobile */}
                <div
                    id="collapseMenu"
                    className={`absolute transition-all top-full left-0 right-0 bg-white shadow-md lg:hidden transform duration-500 ${
                        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
                    }`}
                >
                    <button
                        className='absolute -top-12 right-4 bg-white w-9 h-9 flex items-center justify-center'
                        onClick={toggleMenu}
                        aria-label='Close menu'
                    >
                        <div className='absolute h-0.5 w-6 rotate-45 bg-foreground'></div>
                        <div className='relative h-0.5 w-6 -rotate-45 bg-foreground'></div>
                    </button>

                    {/* Liens de navigation */}
                    <ul className='flex flex-col px-6'>
                        {navLinks.map((navlink) => (
                            <li key={navlink.name}>
                                <Link
                                    href={navlink.href}
                                    scroll={false}
                                    onClick={(e) => handleLinkClick(e, navlink.href)}
                                    className={`text-lg block ${
                                        activeSection === navlink.href.replace('#', '') ? 'text-gold' : 'text-gray-800'
                                    } hover:text-gold transition-colors py-3`}
                                >
                                    {navlink.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Menu Desktop */}
                <div className='hidden lg:block'>
                    <ul className='flex space-x-8'>
                        {navLinks.map((navlink) => (
                            <li key={navlink.name}>
                                <Link
                                    href={navlink.href}
                                    scroll={false}
                                    onClick={(e) => handleLinkClick(e, navlink.href)}
                                    className={`text-lg ${
                                        activeSection === navlink.href.replace('#', '') ? 'text-gold' : 'text-gray-800'
                                    } hover:text-gold transition-colors`}
                                >
                                    {navlink.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );

};

export default Header;
