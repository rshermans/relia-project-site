'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { InfoIcon, CheckCircleIcon, UsersIcon, BuildingIcon, SchoolIcon, ShieldIcon, EyeIcon, ScaleIcon, SparklesIcon, BookOpenIcon, ExternalLinkIcon, PlayCircleIcon } from './Icons';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="pt-20">
      {/* Hero Header */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-relia-graybg via-white to-relia-graybg relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-relia-light/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-relia-dark/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg text-relia-dark text-xs font-bold uppercase tracking-wider mb-8 border border-slate-200 animate-fade-in">
            <InfoIcon className="w-4 h-4" />
            {t('Transformação Digital', 'Digital Transformation')}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-relia-dark leading-tight mb-8 animate-fade-in-up">
            <span className="block">{t('RELIA', 'RELIA')}</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-relia-graytext mt-4">
              {t(
                'Transformação Digital das Bibliotecas Públicas com Inteligência Artificial',
                'Digital Transformation of Public Libraries with Artificial Intelligence'
              )}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-relia-graytext font-light leading-relaxed max-w-4xl animate-fade-in-up stagger-2">
            {t(
              <>
                Um projeto de interesse público que integra{' '}
                <span className="text-relia-dark font-semibold">IA Generativa</span>, ciência de dados e design de serviços centrado no utilizador no ecossistema público de leitura.
              </>,
              <>
                A public interest project integrating{' '}
                <span className="text-relia-dark font-semibold">Generative AI</span>, data science, and user-centered service design in the public reading ecosystem.
              </>
            )}
          </p>
        </div>
      </header>

      {/* About Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-relia-light/20 rounded-xl">
                  <CheckCircleIcon className="w-8 h-8 text-relia-dark" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-relia-dark">
                  {t('O que é o RELIA', 'What is RELIA')}
                </h2>
              </div>

              <div className="space-y-6 text-lg text-relia-graytext leading-relaxed">
                <p>
                  {t(
                    <>
                      Desenvolvido na <strong className="text-relia-dark">Universidade do Minho</strong>, em parceria com a Rede de Bibliotecas Escolares, a Biblioteca Lúcio Craveiro da Silva e o Instituto CCG/ZGDV, o RELIA é uma plataforma digital de apoio à leitura e à mediação literária.
                    </>,
                    <>
                      Developed at the <strong className="text-relia-dark">University of Minho</strong>, in partnership with the School Libraries Network, the Lúcio Craveiro da Silva Library, and the CCG/ZGDV Institute, RELIA is a digital platform supporting reading and literary mediation.
                    </>
                  )}
                </p>
                <p>
                  {t(
                    'Concebida para bibliotecas públicas, utiliza um chatbot multilingue e uma interface interativa para orientar os utilizadores na exploração e interpretação de obras literárias.',
                    'Designed for public libraries, it uses a multilingual chatbot and an interactive interface to guide users in exploring and interpreting literary works.'
                  )}
                </p>
                <p>
                  {t(
                    'Ao combinar aprendizagem ativa, gamificação e orientação personalizada, o RELIA torna textos complexos mais acessíveis e promove o envolvimento ativo dos leitores.',
                    'By combining active learning, gamification, and personalized guidance, RELIA makes complex texts more accessible and promotes active reader engagement.'
                  )}
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-relia-dark to-relia-light p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <SparklesIcon className="w-48 h-48" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <UsersIcon className="w-6 h-6 text-white/80" />
                    <h3 className="text-xl font-bold">
                      {t('Impacto Social', 'Social Impact')}
                    </h3>
                  </div>

                  <p className="text-white/90 mb-8 leading-relaxed">
                    {t(
                      'Através de serviços digitais personalizados, inclusivos e seguros, o RELIA ajuda os jovens leitores a envolverem-se com o património literário e reforça o papel das bibliotecas como espaços de acesso equitativo ao conhecimento e promoção da cidadania.',
                      'Through personalized, inclusive, and safe digital services, RELIA helps young readers engage with literary heritage and reinforces the role of libraries as spaces for equitable access to knowledge and citizenship promotion.'
                    )}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/15 p-5 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <span className="block text-2xl font-bold mb-1">
                        {t('Inclusivo', 'Inclusive')}
                      </span>
                      <span className="text-xs text-white/70 uppercase tracking-tight font-semibold">
                        {t('Design Universal', 'Universal Design')}
                      </span>
                    </div>
                    <div className="bg-white/15 p-5 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <span className="block text-2xl font-bold mb-1">
                        {t('Seguro', 'Secure')}
                      </span>
                      <span className="text-xs text-white/70 uppercase tracking-tight font-semibold">
                        {t('Conformidade RGPD', 'GDPR Compliance')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficiaries Section */}
      <div className="py-20 bg-relia-graybg">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-relia-dark">
              {t('Soluções para o Ecossistema Público', 'Solutions for the Public Ecosystem')}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Municipalities */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-gradient-to-br from-relia-light/30 to-relia-dark/20 text-relia-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BuildingIcon className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-xl text-relia-dark mb-4">
                {t('Municípios', 'Municipalities')}
              </h4>
              <p className="text-relia-graytext leading-relaxed">
                {t(
                  'Reforço dos serviços educativos e culturais das bibliotecas municipais com infraestrutura digital escalável.',
                  'Strengthening educational and cultural services of municipal libraries with scalable digital infrastructure.'
                )}
              </p>
            </div>

            {/* Schools */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-gradient-to-br from-relia-light/30 to-relia-dark/20 text-relia-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <SchoolIcon className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-xl text-relia-dark mb-4">
                {t('Escolas', 'Schools')}
              </h4>
              <p className="text-relia-graytext leading-relaxed">
                {t(
                  'Criação de percursos de leitura interativos que apoiam utilizadores com diferentes perfis e necessidades.',
                  'Creation of interactive reading pathways that support users with different profiles and needs.'
                )}
              </p>
            </div>

            {/* Librarians */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-gradient-to-br from-relia-light/30 to-relia-dark/20 text-relia-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <UsersIcon className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-xl text-relia-dark mb-4">
                {t('Bibliotecários', 'Librarians')}
              </h4>
              <p className="text-relia-graytext leading-relaxed">
                {t(
                  'Capacitação para utilizar a IA de forma responsável na mediação da leitura através de recursos de formação.',
                  'Empowerment to use AI responsibly in reading mediation through training resources.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Plataforma RELIA + Tutorial */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-relia-light/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-relia-light/10 to-relia-dark/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-relia-light/5 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-relia-dark to-relia-light rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-relia-dark mb-6">
                {t('Plataforma RELIA', 'RELIA Platform')}
              </h3>

              <p className="text-relia-graytext mb-10 font-light leading-relaxed">
                {t(
                  'Aceda à plataforma RELIA para explorar as funcionalidades de leitura assistida por IA, percursos interativos e recursos de mediação literária. Uma experiência inovadora para bibliotecas públicas e escolares.',
                  'Access the RELIA platform to explore AI-assisted reading features, interactive pathways, and literary mediation resources. An innovative experience for public and school libraries.'
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href="https://relia.cehum.elach.uminho.pt/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-relia-dark to-relia-light text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 shadow-lg group"
                >
                  <BookOpenIcon className="w-5 h-5" />
                  <span>{t('Aceder à Plataforma RELIA', 'Access the RELIA Platform')}</span>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/tutorial"
                  className="inline-flex items-center gap-3 bg-white text-relia-dark px-8 py-4 rounded-full font-bold border-2 border-relia-dark hover:bg-relia-dark hover:text-white transition-all duration-300 shadow-lg group"
                >
                  <PlayCircleIcon className="w-5 h-5" />
                  <span>{t('Ver Tutorial', 'View Tutorial')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsible AI Section */}
      <div className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-relia-light/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-relia-dark/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('IA responsável, segurança e conformidade', 'Responsible AI, Security, and Compliance')}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              {t(
                'O RELIA foi concebido tendo em conta os rigorosos requisitos e a ética necessária para o setor público.',
                'RELIA was designed taking into account the rigorous requirements and ethics necessary for the public sector.'
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* GDPR */}
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-relia-light/20 text-relia-light rounded-2xl flex items-center justify-center mx-auto">
                <ShieldIcon className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl">
                {t('Proteção RGPD', 'GDPR Protection')}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t(
                  'Políticas claras, encriptação e anonimização de dados integradas na documentação nativa do projeto.',
                  'Clear policies, encryption, and data anonymization integrated into the project\'s native documentation.'
                )}
              </p>
            </div>

            {/* Transparency */}
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-relia-light/20 text-relia-light rounded-2xl flex items-center justify-center mx-auto">
                <EyeIcon className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl">
                {t('Transparência', 'Transparency')}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t(
                  'Mitigação de enviesamentos através de curadoria cuidadosa e interações explicáveis para o pensamento crítico.',
                  'Bias mitigation through careful curation and explainable interactions for critical thinking.'
                )}
              </p>
            </div>

            {/* Ethics */}
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-relia-light/20 text-relia-light rounded-2xl flex items-center justify-center mx-auto">
                <ScaleIcon className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl">
                {t('Orientação Ética', 'Ethical Guidance')}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t(
                  'Foco na utilização responsável para bibliotecários, professores e estudantes em contexto institucional.',
                  'Focus on responsible use for librarians, teachers, and students in an institutional context.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
