'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpenIcon } from './Icons';

interface Partner {
  acronym: string;
  name: string;
  nameEn: string;
  url?: string;
}

const librariesPartners: Partner[] = [
  { acronym: 'RBE', name: 'Rede de Bibliotecas Escolares', nameEn: 'School Libraries Network', url: 'https://www.rbe.mec.pt' },
  { acronym: 'BLCS', name: 'Biblioteca Lúcio Craveiro da Silva', nameEn: 'Lúcio Craveiro da Silva Library', url: 'https://www.blcs.pt' },
  { acronym: 'RBB', name: 'Rede de Bibliotecas de Braga', nameEn: 'Braga Libraries Network', url: 'https://www.rbbraga.pt' },
  { acronym: 'BPB', name: 'Biblioteca Pública de Braga', nameEn: 'Braga Public Library', url: 'https://www.bpb.uminho.pt' },
];

const educationPartners: Partner[] = [
  { acronym: 'AECA', name: 'Agrupamento de Escolas Carlos Amarante', nameEn: 'Carlos Amarante School Cluster', url: 'https://aecarlosamarante.pt' },
  { acronym: 'ESHM', name: 'Escola Secundária Henrique Medina', nameEn: 'Henrique Medina Secondary School', url: 'https://www.escolahenriquemedina.org' },
  { acronym: 'AEAS', name: 'Agrupamento de Escolas André Soares', nameEn: 'André Soares School Cluster', url: 'https://www.aeandresoares.pt' },
  { acronym: 'CFSM', name: 'Centro de Formação Sá de Miranda', nameEn: 'Sá de Miranda Training Center', url: 'https://www.cfsm.pt' },
];

function PartnerCard({ partner }: { partner: Partner }) {
  const { t } = useLanguage();

  const content = (
    <>
      <div className="text-relia-dark font-black text-2xl tracking-tighter mb-3 group-hover:text-relia-light transition-colors">
        {partner.acronym}
      </div>
      <div className="text-[11px] text-relia-graytext font-semibold uppercase tracking-wider leading-tight max-w-[180px]">
        {t(partner.name, partner.nameEn)}
      </div>
    </>
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-6 rounded-2xl border border-relia-graybg shadow-md flex flex-col items-center justify-center text-center min-h-[160px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-relia-graybg shadow-md flex flex-col items-center justify-center text-center min-h-[160px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      {content}
    </div>
  );
}

export function SupportSection() {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="apoios" className="bg-relia-graybg">
      <div className="h-20 scroll-mt-24" />

      {/* Header */}
      <header className="pt-20 pb-16 bg-white border-b border-relia-graybg">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-relia-graybg text-relia-dark text-xs font-bold uppercase tracking-wider mb-8 border border-slate-200">
            {t('Financiamento e Parcerias', 'Funding and Partnerships')}
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-relia-dark tracking-tighter mb-8">
            {t('Projeto RELIA', 'RELIA Project')}
          </h2>

          <p className="text-xl text-relia-graytext leading-relaxed max-w-3xl mx-auto mb-10">
            {t(
              'Este projeto é desenvolvido com o suporte técnico e pedagógico de uma rede de parceiros institucionais, integrando o esforço nacional de digitalização e ciência de dados na educação.',
              'This project is developed with the technical and pedagogical support of a network of institutional partners, integrating national efforts in digitisation and data science in education.'
            )}
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-relia-dark to-relia-light text-white px-8 py-4 rounded-full text-sm font-bold flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <BookOpenIcon className="w-5 h-5" />
              <span className="group-hover:underline decoration-white underline-offset-2">Ref. FCT 2024.07537.IACDC</span>
            </button>
          </div>
        </div>
      </header>

      {/* Modal/Popup */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-relia-dark text-white rounded-full flex items-center justify-center hover:bg-relia-light transition-colors z-10 shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <img
              src="/PRR22.jpeg"
              alt="PRR - Plano de Recuperação e Resiliência"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Funding Section */}
      <div className="py-24 container mx-auto px-6 max-w-6xl">
        {/* Main Funding Card */}
        <div className="bg-gradient-to-br from-relia-dark via-relia-dark to-relia-light rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden mb-16">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-relia-light/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-relia-dark/40 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-white/20"></div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-relia-light">
                {t('Enquadramento Institucional', 'Institutional Framework')}
              </span>
              <div className="h-px flex-1 bg-white/20"></div>
            </div>

            <blockquote className="text-xl md:text-2xl leading-relaxed font-light mb-12 italic text-center text-white/90">
              {t(
                <>
                  "Suportado pela medida <span className="font-bold text-relia-light">RE-C05-i08. M04</span> — Apoiar o lançamento de um programa de projetos de I&D orientado para o desenvolvimento e implementação de sistemas avançados de cibersegurança, inteligência artificial e ciência de dados na administração pública, bem como de um programa de formação científica."
                </>,
                <>
                  "Supported by measure <span className="font-bold text-relia-light">RE-C05-i08. M04</span> — Supporting the launch of an R&D project programme focused on the development and implementation of advanced cybersecurity, artificial intelligence, and data science systems in public administration, as well as a scientific training programme."
                </>
              )}
            </blockquote>

            <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <div>
                <h4 className="text-sm font-bold uppercase text-relia-light mb-4 tracking-wider">
                  {t('Origem do Financiamento', 'Funding Source')}
                </h4>
                <p className="text-sm leading-relaxed text-white/80">
                  {t(
                    <>
                      Plano de Recuperação e Resiliência (PRR), financiado pela{' '}
                      <span className="text-white font-semibold">União Europeia — NextGenerationEU</span>, no âmbito do contrato de financiamento celebrado entre a Estrutura de Missão Recuperar Portugal (EMRP) e a Fundação para a Ciência e a Tecnologia, I.P. (FCT).
                    </>,
                    <>
                      Recovery and Resilience Plan (RRP), funded by the{' '}
                      <span className="text-white font-semibold">European Union — NextGenerationEU</span>, under the funding contract signed between the "Recover Portugal" Mission Structure (EMRP) and the Foundation for Science and Technology, I.P. (FCT).
                    </>
                  )}
                </p>
              </div>

              <div className="flex flex-col justify-end">
                <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <span className="block text-[10px] font-black uppercase tracking-widest mb-3 text-white/70">
                    {t('Beneficiário Intermédio', 'Intermediate Beneficiary')}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <span className="text-2xl font-black text-white">FCT</span>
                    <span className="text-sm font-medium text-white">
                      {t('Fundação para a Ciência e a Tecnologia, I.P.', 'Foundation for Science and Technology, I.P.')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Network Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-black text-relia-dark uppercase tracking-tighter mb-4">
            {t('Rede de Parceiros', 'Partner Network')}
          </h3>
          <p className="text-relia-graytext max-w-2xl mx-auto italic font-medium text-lg">
            {t(
              'Colaboração ativa entre bibliotecas e agrupamentos de escolas para a literacia mediática e digital.',
              'Active collaboration between libraries and school clusters for media and digital literacy.'
            )}
          </p>
        </div>

        {/* Libraries Partners */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-px bg-relia-dark/30"></span>
            <h4 className="text-xs font-bold text-relia-graytext uppercase tracking-widest">
              {t('Bibliotecas e Mediação', 'Libraries and Mediation')}
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {librariesPartners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>

        {/* Education Partners */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-px bg-relia-dark/30"></span>
            <h4 className="text-xs font-bold text-relia-graytext uppercase tracking-widest">
              {t('Ensino e Formação', 'Education and Training')}
            </h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {educationPartners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>

        {/* Partner Logos Image */}
        <div className="mb-16 flex justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-5xl md:w-[50%] w-full">
            <img
              src="/parceiros-logos.png"
              alt="Logos dos Parceiros Institucionais"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
