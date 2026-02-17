'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CalendarIcon, LocationIcon, GraduationCapIcon, ExternalLinkIcon, CheckIcon, BookOpenIcon } from './Icons';

export function EventsSection() {
  const { t } = useLanguage();

  return (
    <section id="eventos" className="bg-relia-graybg">
      <div className="h-20 scroll-mt-24" />

      {/* Hero Header */}
      <header className="bg-gradient-to-br from-relia-dark via-relia-dark to-relia-light text-white relative overflow-hidden pb-24 pt-28">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-relia-light/20 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-relia-dark/30 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center pt-8">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            {t('Jornadas RELIA', 'RELIA Conferences')}
          </h2>

          {/* Jornadas Image */}
          <div className="mb-8 max-w-4xl mx-auto">
            <img
              src="/jornadas-banner.jpg"
              alt="Jornadas RELIA 2025"
              className="w-full rounded-2xl shadow-2xl border-2 border-white/20"
            />
          </div>

          <div className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-white/90">
            {t('25 de Outubro e 8 de Novembro de 2025', 'October 25 and November 8, 2025')}
          </div>

          <p className="text-xl md:text-2xl font-light text-white/85 mb-10 max-w-4xl mx-auto leading-relaxed">
            {t(
              <>
                Ler com Inteligência Artificial{' '}
                <span className="block md:inline font-normal text-white">Desafios e Oportunidades</span>
              </>,
              <>
                Reading with Artificial Intelligence{' '}
                <span className="block md:inline font-normal text-white">Challenges and Opportunities</span>
              </>
            )}
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm font-medium text-white/80 mb-8">
            <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full backdrop-blur-sm border border-white/10">
              <LocationIcon className="w-5 h-5 text-relia-light" />
              <span>{t('Biblioteca Lúcio Craveiro da Silva, Braga', 'Lúcio Craveiro da Silva Library, Braga')}</span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full backdrop-blur-sm border border-white/10">
              <GraduationCapIcon className="w-5 h-5 text-relia-light" />
              <span>{t('Curso de Formação (15h)', 'Training Course (15h)')}</span>
            </div>
          </div>

          {/* Program Button */}
          <a
            href="https://www.rbe.mec.pt/np4/%7B$clientServletPath%7D/?newsId=5281&fileName=Cartaz_Relia_Programa2.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-relia-dark px-8 py-4 rounded-full font-bold hover:bg-relia-graybg transition-all duration-300 shadow-xl group"
          >
            <CalendarIcon className="w-5 h-5" />
            <span>{t('Consultar Programa', 'View Program')}</span>
            <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 -mt-12 relative z-20 pb-24">
        {/* Objectives Section */}
        <section className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border border-slate-100">
          <div className="bg-relia-graybg p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-relia-dark mb-8 leading-relaxed">
              {t(
                'As Jornadas RELIA resultam de uma parceria entre a Escola de Letras, Artes e Ciências Humanas (ELACH) da Universidade do Minho e a Rede de Bibliotecas de Braga, com os seguintes objetivos:',
                'The RELIA Conferences result from a partnership between the School of Arts and Humanities (ELACH) at the University of Minho and the Braga Libraries Network, with the following objectives:'
              )}
            </h3>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
              {[
                { pt: 'Refletir sobre impactos da IAGen na leitura, escrita e práticas pedagógicas;', en: 'Reflect on the impacts of GenAI on reading, writing, and pedagogical practices;' },
                { pt: 'Apresentar práticas e ferramentas digitais para leitura crítica e criativa com apoio de IAGen;', en: 'Present digital practices and tools for critical and creative reading supported by GenAI;' },
                { pt: 'Criar pontes entre bibliotecas escolares, bibliotecas públicas e ensino universitário;', en: 'Build bridges between school libraries, public libraries, and university education;' },
                { pt: 'Promover oficinas práticas de uso ético e pedagógico de IAGen na promoção da leitura e mediação literária;', en: 'Promote practical workshops on the ethical and pedagogical use of GenAI in reading promotion and literary mediation;' },
                { pt: 'Divulgar o projeto RELIA, destacando objetivos, metodologia e resultados.', en: 'Disseminate the RELIA project, highlighting objectives, methodology, and results.' },
              ].map((item, index) => (
                <div key={index} className={`flex items-start gap-3 ${index === 4 ? 'md:col-span-2' : ''}`}>
                  <CheckIcon className="w-5 h-5 text-relia-dark mt-1 flex-shrink-0" />
                  <p className="text-relia-graytext">{t(item.pt, item.en)}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/90 p-6 rounded-2xl border border-relia-light/30">
              <p className="text-relia-dark font-medium leading-relaxed">
                {t(
                  <>
                    Este <span className="font-bold">Curso de Formação (15h)</span> constitui uma oportunidade para professores, bibliotecários e investigadores aprofundarem competências no uso de IAGen na leitura, na escrita e na mediação pedagógica.
                  </>,
                  <>
                    This <span className="font-bold">Training Course (15h)</span> constitutes an opportunity for teachers, librarians, and researchers to deepen skills in the use of GenAI in reading, writing, and pedagogical mediation.
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="mb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-relia-dark mb-6">
              {t('A IA na Educação e Leitura', 'AI in Education and Reading')}
            </h3>

            <p className="text-relia-graytext text-lg leading-relaxed">
              {t(
                'A rápida evolução da Inteligência Artificial (IA) está a transformar a educação e as práticas de leitura. A biblioteca escolar, enquanto centro de recursos e desenvolvimento de literacias, desempenha um papel estratégico na mediação da informação e no apoio ao ensino-aprendizagem. Integrar IA generativa (IAGen) neste contexto pode reforçar a personalização, promover a literacia da leitura e desenvolver competências digitais.',
                'The rapid evolution of Artificial Intelligence (AI) is transforming education and reading practices. The school library, as a center for resources and literacy development, plays a strategic role in information mediation and teaching-learning support. Integrating generative AI (GenAI) in this context can reinforce personalization, promote reading literacy, and develop digital skills.'
              )}
            </p>
          </div>
        </section>

        {/* Program Structure */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-bold text-relia-dark">
              {t('Estrutura do Programa', 'Program Structure')}
            </h3>
            <div className="h-px bg-relia-graybg flex-grow"></div>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {/* Day 1 */}
            <article className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-relia-graybg p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <span className="font-bold text-relia-graytext">
                  {t('Dia 1 (25 de outubro de 2025)', 'Day 1 (25 October 2025)')}
                </span>
                <span className="text-xs bg-relia-light/20 px-4 py-2 rounded-full text-relia-dark font-bold uppercase tracking-wider border border-relia-light/30">
                  {t('Pensar a leitura', 'Rethinking Reading')}
                </span>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold text-relia-dark mb-4">
                  {t('Pensar a leitura na Era da IA', 'Rethinking Reading in the Age of AI')}
                </h4>

                <p className="text-relia-graytext mb-6 leading-relaxed">
                  {t(
                    'Momento de reflexão estratégica e científica com participação de instituições públicas e especialistas, incluindo debate interinstitucional (mesa-redonda) e partilha de práticas inspiradoras, culminando numa síntese orientadora para ação.',
                    'A moment of strategic and scientific reflection involving public institutions and experts, including an interinstitutional debate (roundtable) and the sharing of inspiring practices, culminating in a guiding synthesis for action.'
                  )}
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    { pt: 'Debate Interinstitucional', en: 'Interinstitutional Debate' },
                    { pt: 'Práticas Inspiradoras', en: 'Inspiring Practices' },
                    { pt: 'Síntese para Ação', en: 'Synthesis for Action' },
                  ].map((tag, index) => (
                    <span key={index} className="px-4 py-2 bg-relia-graybg rounded-xl text-sm font-medium border border-slate-200 text-relia-graytext">
                      {t(tag.pt, tag.en)}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Day 2 */}
            <article className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-relia-graybg p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <span className="font-bold text-relia-graytext">
                  {t('Dia 2 (8 de novembro de 2025)', 'Day 2 (8 November 2025)')}
                </span>
                <span className="text-xs bg-relia-light/20 px-4 py-2 rounded-full text-relia-dark font-bold uppercase tracking-wider border border-relia-light/30">
                  {t('Ler com a IA', 'Reading with AI')}
                </span>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold text-relia-dark mb-4">
                  {t('Ler com a IA', 'Reading with AI')}
                </h4>

                <p className="text-relia-graytext mb-8 leading-relaxed">
                  {t(
                    'Dia dedicado à experimentação e capacitação, com quatro workshops rotativos centrados na leitura e na mediação literária:',
                    'A day dedicated to experimentation and training, with four rotating workshops focused on reading and literary mediation:'
                  )}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { num: 1, pt: 'Dialogar com o Texto', en: 'Dialoguing with the Text', descPt: 'Criação de chatbots de leitura para apoiar interpretação.', descEn: 'Creating reading chatbots to support interpretation.' },
                    { num: 2, pt: 'Entre Textos e Labirintos', en: 'Between Texts and Labyrinths', descPt: 'Experiências imersivas e jogos de fuga com pistas de leitura.', descEn: 'Immersive experiences and escape games with reading clues.' },
                    { num: 3, pt: 'Da Página ao Podcast', en: 'From Page to Podcast', descPt: 'Adaptação de textos para narrativas multimodais e podcasts.', descEn: 'Adapting texts into multimodal narratives and podcasts.' },
                    { num: 4, pt: 'Do Texto ao Jogo', en: 'From Text to Game', descPt: 'Experiências gamificadas para promover envolvimento e compreensão.', descEn: 'Gamified experiences to promote engagement and understanding.' },
                  ].map((workshop) => (
                    <div key={workshop.num} className="flex gap-4 items-start p-5 rounded-xl border border-slate-100 hover:bg-relia-graybg/70 transition-colors">
                      <div className="bg-gradient-to-br from-relia-dark to-relia-light text-white w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold shadow-lg">
                        {workshop.num}
                      </div>
                      <div>
                        <span className="font-bold block text-relia-dark mb-1">
                          {t(workshop.pt, workshop.en)}
                        </span>
                        <p className="text-sm text-relia-graytext">
                          {t(workshop.descPt, workshop.descEn)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Methodological Guide */}
        <section className="bg-gradient-to-br from-relia-dark via-relia-dark to-relia-light rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden text-center mb-10">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -right-24 -top-24 w-80 h-80 bg-relia-light/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-relia-dark/30 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              {t('Guia Metodológico Interativo', 'Interactive Methodological Guide')}
            </h3>

            <p className="text-white/85 mb-10 font-light leading-relaxed">
              {t(
                'Os workshops são apoiados por um Guia Metodológico Interativo desenvolvido pela Equipa RELIA, que orienta a transformação de suportes textuais curriculares em experiências multimodais, imersivas e lúdicas através da engenharia de prompt.',
                'The workshops are supported by an Interactive Methodological Guide developed by the RELIA Team, which guides the transformation of curricular textual materials into multimodal, immersive, and playful experiences through prompt engineering.'
              )}
            </p>

            <a
              href="https://relia-uminho.github.io/Guia-de-Narrativas-Digitais-Hibridas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-relia-dark px-8 py-4 rounded-full font-bold hover:bg-relia-graybg transition-all duration-300 shadow-xl group"
            >
              <BookOpenIcon className="w-5 h-5" />
              <span>{t('Aceder ao Guia Metodológico', 'Access the Methodological Guide')}</span>
              <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>
    </section>
  );
}
