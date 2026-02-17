'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MailIcon, MapPinIcon, GlobeIcon, YoutubeIcon, SpotifyIcon, TikTokIcon, InstagramIcon } from './Icons';

const socialLinks = [
  { name: 'YouTube', url: 'https://www.youtube.com/@relia.uminho', icon: YoutubeIcon, color: 'hover:text-[#FF0000]' },
  { name: 'Spotify', url: 'https://open.spotify.com/show/6mMIjlGbGyPlZEZyqqCFn4', icon: SpotifyIcon, color: 'hover:text-[#1DB954]' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@relia.uminho', icon: TikTokIcon, color: 'hover:text-[#000000]' },
  { name: 'Instagram', url: 'https://www.instagram.com/jitu.ux/', icon: InstagramIcon, color: 'hover:text-[#E4405F]' },
];

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contactos" className="bg-relia-graybg">
      <div className="h-20 scroll-mt-24" />

      {/* Header - More compact */}
      <header className="pt-16 pb-12 bg-white border-b border-relia-graybg relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" className="text-relia-dark">
            <path d="M22 2 11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 2 15 22l-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-relia-light/15 text-relia-dark text-[10px] font-bold uppercase tracking-wider mb-4 border border-relia-light/25">
            <GlobeIcon className="w-3.5 h-3.5" />
            {t('Contacto', 'Contact')}
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-relia-dark tracking-tighter mb-4">
            {t('Contacte-nos', 'Contact Us')}
          </h2>

          <p className="text-base text-relia-graytext leading-relaxed font-light max-w-2xl mx-auto">
            {t(
              'Se pretende saber mais sobre o RELIA, explorar possibilidades de parceria, agendar uma demonstração da plataforma ou esclarecer dúvidas sobre implementação em escolas e bibliotecas, entre em contacto connosco.',
              'If you would like to learn more about RELIA, explore partnership opportunities, schedule a platform demo, or clarify questions about implementation in schools and libraries, please get in touch with us.'
            )}
          </p>
        </div>
      </header>

      {/* Contact Cards - 2x2 Grid */}
      <div className="py-16 container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Email Geral */}
          <a
            href="mailto:relia.informa@gmail.com"
            className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:border-relia-light/40 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-relia-dark to-relia-light text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <MailIcon className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-relia-dark mb-2">
              {t('Email Geral', 'General Email')}
            </h3>

            <p className="text-relia-graytext text-xs leading-relaxed mb-4 max-w-[240px]">
              {t('Para informações gerais sobre o projeto RELIA:', 'For general information about the RELIA project:')}
            </p>

            <span className="text-relia-dark font-bold text-sm tracking-tight group-hover:underline decoration-relia-light underline-offset-4 transition-all">
              relia.informa@gmail.com
            </span>
          </a>

          {/* Investigadora Responsável */}
          <a
            href="mailto:saraujo@elach.uminho.pt"
            className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:border-relia-light/40 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-relia-light/30 to-relia-dark/20 text-relia-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-relia-light/20">
              <MailIcon className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-relia-dark mb-2">
              {t('Investigadora Responsável', 'Principal Investigator')}
            </h3>

            <p className="text-relia-graytext text-xs leading-relaxed mb-4 max-w-[240px]">
              {t('Para questões científicas e académicas:', 'For scientific and academic inquiries:')}
            </p>

            <span className="text-relia-dark font-bold text-sm tracking-tight group-hover:underline decoration-relia-light underline-offset-4 transition-all">
              saraujo@elach.uminho.pt
            </span>
          </a>

          {/* Sede do Projeto */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-relia-graybg text-relia-graytext rounded-xl flex items-center justify-center mb-4 border border-slate-100">
              <MapPinIcon className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-relia-dark mb-3">
              {t('Sede do Projeto', 'Project Headquarters')}
            </h3>

            <p className="text-relia-graytext text-xs leading-relaxed">
              {t(
                <>
                  Escola de Letras, Artes e Ciências Humanas<br />
                  Universidade do Minho, Campus de Gualtar<br />
                  4710-057 Braga, Portugal
                </>,
                <>
                  School of Arts and Humanities<br />
                  University of Minho, Gualtar Campus<br />
                  4710-057 Braga, Portugal
                </>
              )}
            </p>
          </div>

          {/* Redes Sociais - Icon-only card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-bold text-relia-dark mb-4">
              {t('Redes Sociais', 'Social Media')}
            </h3>

            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 bg-relia-graybg rounded-xl flex items-center justify-center text-relia-graytext hover:bg-relia-dark hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <p className="text-relia-graytext text-[10px] mt-4 opacity-60">
              {t('Siga-nos nas redes sociais', 'Follow us on social media')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
