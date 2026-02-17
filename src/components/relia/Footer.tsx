'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface InstitutionLink {
  name: string;
  url: string;
}

const institutionLinks: InstitutionLink[] = [
  { name: 'Universidade do Minho', url: 'https://www.usdb.uminho.pt' },
  { name: 'RBE', url: 'https://www.rbe.mec.pt' },
  { name: 'BLCS', url: 'https://www.blcs.pt' },
  { name: 'CCG ZGDV', url: 'https://www.ccg.pt' },
  { name: 'FCT', url: 'https://www.fct.pt/financiamento/programas-de-financiamento/prr/' },
  { name: 'NextGenerationEU', url: 'https://next-generation-eu.europa.eu' },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-6">
        {/* PRR Funding Logo */}
        <div className="flex justify-center mb-10">
          <div className="max-w-2xl w-full">
            <img 
              src="/PRR22.jpeg" 
              alt="PRR - Plano de Recuperação e Resiliência" 
              className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Institutional links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-8">
          {institutionLinks.map((institution, index) => (
            <a
              key={index}
              href={institution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold tracking-tight text-sm text-relia-graytext/50 hover:text-relia-dark transition-colors hover:underline underline-offset-2"
            >
              {institution.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs font-bold text-relia-graytext/50 uppercase tracking-[0.15em]">
          {t(
            `© ${currentYear} Projeto RELIA. Todos os direitos reservados.`,
            `© ${currentYear} RELIA Project. All rights reserved.`
          )}
        </p>
      </div>
    </footer>
  );
}
