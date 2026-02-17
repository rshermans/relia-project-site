'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MenuIcon, XIcon } from './Icons';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', labelPt: 'Sobre', labelEn: 'About' },
    { href: '#equipa', labelPt: 'Equipa', labelEn: 'Team' },
    { href: '#apoios', labelPt: 'Apoios', labelEn: 'Support' },
    { href: '#eventos', labelPt: 'Eventos', labelEn: 'Events' },
    { href: '#contactos', labelPt: 'Contactos', labelEn: 'Contacts' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-100' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('#sobre')}
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden bg-white">
            <img 
              src="/logo-relia.png" 
              alt="RELIA Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-black tracking-tight text-relia-dark group-hover:text-relia-light transition-colors">
            RELIA
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-semibold uppercase tracking-wider text-relia-graytext hover:text-relia-dark transition-all duration-300 relative group"
              >
                {t(link.labelPt, link.labelEn)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-relia-dark to-relia-light group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className="px-4 py-2 rounded-full border-2 border-relia-dark text-xs font-bold text-relia-dark hover:bg-relia-dark hover:text-white transition-all duration-300 uppercase tracking-wider shadow-sm hover:shadow-md"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className="px-3 py-1.5 rounded-full border-2 border-relia-dark text-xs font-bold text-relia-dark uppercase tracking-wider"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-relia-dark"
          >
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-left py-3 text-lg font-semibold text-relia-graytext hover:text-relia-dark transition-colors border-b border-slate-100 last:border-0"
            >
              {t(link.labelPt, link.labelEn)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
