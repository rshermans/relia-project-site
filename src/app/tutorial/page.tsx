'use client';

import React from 'react';
import Link from 'next/link';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeftIcon, UserPlusIcon, BookOpenIcon, LayersIcon, SparklesIcon, PlayCircleIcon, FileTextIcon, CheckCircleIcon, ChevronRightIcon } from '@/components/relia/Icons';

function TutorialContent() {
    const { language, setLanguage, t } = useLanguage();

    const phases = [
        {
            num: 1,
            titlePt: 'Registo e perfil do utilizador',
            titleEn: 'Registration and user profile',
            descPt: 'A interação inicia-se com um registo simples. O utilizador indica faixa etária, preferências de leitura e necessidades de aprendizagem, permitindo ajustar linguagem, orientação e nível de apoio.',
            descEn: 'The interaction starts with a simple registration. The user indicates age group, reading preferences, and learning needs, allowing the adjustment of language, guidance, and support level.',
            icon: <UserPlusIcon className="w-7 h-7" />,
            color: 'from-blue-500 to-blue-600',
        },
        {
            num: 2,
            titlePt: 'Seleção de uma obra',
            titleEn: 'Selecting a work',
            descPt: 'O utilizador escolhe uma obra disponível na plataforma, proveniente de coleções de domínio público ou de recursos selecionados pelas bibliotecas. A partir daí, o RELIA ativa a leitura guiada.',
            descEn: 'The user chooses a work available on the platform, from public domain collections or resources selected by libraries. From there, RELIA activates guided reading.',
            icon: <BookOpenIcon className="w-7 h-7" />,
            color: 'from-indigo-500 to-indigo-600',
        },
        {
            num: 3,
            titlePt: 'Interação guiada através do modelo RELIA',
            titleEn: 'Guided interaction through the RELIA model',
            descPt: 'O RELIA organiza a leitura em três fases complementares e flexíveis, que podem ser percorridas em ordens diferentes e revisitadas conforme o objetivo do utilizador. Em todas as fases, integra gamificação com microdesafios (perguntas fechadas e abertas) e feedback, permitindo acompanhar o progresso.',
            descEn: 'RELIA organizes reading into three complementary and flexible phases that can be traversed in different orders and revisited according to the user\'s objective. In all phases, it integrates gamification with micro-challenges (closed and open questions) and feedback, enabling progress tracking.',
            icon: <LayersIcon className="w-7 h-7" />,
            color: 'from-violet-500 to-violet-600',
        },
    ];

    const subPhases = [
        {
            titlePt: 'Contextualização e ativação de conhecimentos',
            titleEn: 'Contextualization and knowledge activation',
            descPt: 'A plataforma fornece enquadramento histórico, literário e cultural, apoiado por conteúdos multimodais (mapas mentais, jogos interativos, flashcards e infografias) que facilitam o primeiro contacto com a obra e apoiam diferentes níveis de literacia.',
            descEn: 'The platform provides historical, literary, and cultural context, supported by multimodal content (mind maps, interactive games, flashcards, and infographics) that facilitate the first contact with the work and support different literacy levels.',
            gradient: 'from-sky-400 to-blue-500',
        },
        {
            titlePt: 'Exploração interpretativa guiada',
            titleEn: 'Guided interpretive exploration',
            descPt: 'O utilizador trabalha o texto com perguntas orientadoras e apoio do chatbot, desenvolvendo leitura crítica e reforçando o papel das bibliotecas como espaços públicos de cidadania, aprendizagem ao longo da vida e participação comunitária.',
            descEn: 'The user works with the text through guiding questions and chatbot support, developing critical reading and reinforcing the role of libraries as public spaces for citizenship, lifelong learning, and community participation.',
            gradient: 'from-blue-500 to-indigo-500',
        },
        {
            titlePt: 'Expansão crítica e aplicação autónoma',
            titleEn: 'Critical expansion and autonomous application',
            descPt: 'O utilizador aplica a compreensão em questões de interpretação textual, com orientação que apoia a consolidação e a transferência para novos contextos (incluindo, quando relevante, preparação para avaliação formal), contribuindo para os serviços públicos de promoção da literacia e do sucesso educativo.',
            descEn: 'The user applies understanding to textual interpretation questions, with guidance that supports consolidation and transfer to new contexts (including, when relevant, preparation for formal assessment), contributing to public services for promoting literacy and educational success.',
            gradient: 'from-indigo-500 to-violet-500',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Bar */}
            <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-100">
                <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                    <Link
                        href="/"
                        className="flex items-center gap-3 text-relia-dark hover:text-relia-light transition-colors group"
                    >
                        <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <div className="w-10 h-10 rounded-xl shadow-md overflow-hidden bg-white">
                            <img src="/logo-relia.png" alt="RELIA Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xl font-black tracking-tight">RELIA</span>
                    </Link>

                    <button
                        onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                        className="px-4 py-2 rounded-full border-2 border-relia-dark text-xs font-bold text-relia-dark hover:bg-relia-dark hover:text-white transition-all duration-300 uppercase tracking-wider shadow-sm hover:shadow-md"
                    >
                        {language === 'pt' ? 'EN' : 'PT'}
                    </button>
                </div>
            </nav>

            {/* Hero Header */}
            <header className="pt-32 pb-24 bg-gradient-to-br from-relia-dark via-relia-dark to-relia-light text-white relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-relia-light/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-relia-light/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-white/20 animate-fade-in">
                        <SparklesIcon className="w-4 h-4" />
                        {t('Guia Interativo', 'Interactive Guide')}
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 animate-fade-in-up">
                        TUTORIAL
                    </h1>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white/90 mb-8 animate-fade-in-up stagger-2">
                        {t('Como funciona a plataforma RELIA', 'How the RELIA platform works')}
                    </h2>

                    <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto animate-fade-in-up stagger-3">
                        {t(
                            'O RELIA é uma plataforma de leitura com IA que apoia a exploração literária através de um chatbot multilingue. O utilizador recebe orientação passo a passo, num percurso adaptado ao seu perfil, que promove compreensão, interpretação e envolvimento com os textos.',
                            'RELIA is an AI-powered reading platform that supports literary exploration through a multilingual chatbot. The user receives step-by-step guidance, in a path adapted to their profile, that promotes comprehension, interpretation, and engagement with texts.'
                        )}
                    </p>

                    <p className="text-base md:text-lg text-white/65 font-light leading-relaxed max-w-3xl mx-auto mt-6 animate-fade-in-up stagger-4">
                        {t(
                            'Assim, o RELIA reforça a mediação literária em contexto escolar e contribui para a promoção da leitura nas bibliotecas.',
                            'Thus, RELIA reinforces literary mediation in school contexts and contributes to the promotion of reading in libraries.'
                        )}
                    </p>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 36C840 48 960 64 1080 64C1200 64 1320 48 1380 40L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white" />
                    </svg>
                </div>
            </header>

            {/* Main Steps Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-black text-relia-dark tracking-tight mb-4">
                            {t('Percurso do Utilizador', 'User Journey')}
                        </h3>
                        <p className="text-relia-graytext text-lg max-w-2xl mx-auto">
                            {t(
                                'Três passos simples para começar a explorar obras literárias com apoio de IA.',
                                'Three simple steps to start exploring literary works with AI support.'
                            )}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {phases.map((phase) => (
                            <div
                                key={phase.num}
                                className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                            >
                                {/* Step number badge */}
                                <div className={`absolute -top-5 left-8 w-10 h-10 bg-gradient-to-br ${phase.color} text-white rounded-xl flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {phase.num}
                                </div>

                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-br ${phase.color} text-white rounded-2xl flex items-center justify-center mb-6 mt-4 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                                    {phase.icon}
                                </div>

                                <h4 className="text-xl font-bold text-relia-dark mb-4 leading-tight">
                                    {t(phase.titlePt, phase.titleEn)}
                                </h4>

                                <p className="text-relia-graytext leading-relaxed text-sm">
                                    {t(phase.descPt, phase.descEn)}
                                </p>

                                {/* Decorative corner */}
                                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${phase.color} opacity-5 rounded-tl-[4rem] rounded-br-3xl`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Connector line for desktop */}
                    <div className="hidden md:flex items-center justify-center gap-4 -mt-10 mb-16">
                        <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                        <ChevronRightIcon className="w-5 h-5 text-relia-graytext" />
                        <div className="h-0.5 w-16 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"></div>
                        <ChevronRightIcon className="w-5 h-5 text-relia-graytext" />
                        <div className="h-0.5 w-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Sub-Phases (Model RELIA detail) */}
            <section className="py-20 bg-relia-graybg relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-relia-light/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-relia-dark/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-relia-dark text-xs font-bold uppercase tracking-wider mb-6 border border-slate-200">
                            <LayersIcon className="w-4 h-4" />
                            {t('Modelo RELIA', 'RELIA Model')}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-relia-dark tracking-tight mb-4">
                            {t('Três Fases de Leitura', 'Three Reading Phases')}
                        </h3>
                        <p className="text-relia-graytext text-lg max-w-2xl mx-auto">
                            {t(
                                'Fases complementares e flexíveis que podem ser percorridas em ordens diferentes.',
                                'Complementary and flexible phases that can be traversed in different orders.'
                            )}
                        </p>
                    </div>

                    <div className="space-y-8">
                        {subPhases.map((sub, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                            >
                                {/* Left accent bar */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${sub.gradient} rounded-l-3xl`}></div>

                                <div className="pl-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${sub.gradient} text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-md`}>
                                            {String.fromCharCode(65 + index)}
                                        </div>
                                        <h4 className="text-xl font-bold text-relia-dark leading-tight pt-1.5">
                                            {t(sub.titlePt, sub.titleEn)}
                                        </h4>
                                    </div>

                                    <p className="text-relia-graytext leading-relaxed ml-14">
                                        {t(sub.descPt, sub.descEn)}
                                    </p>
                                </div>

                                {/* Decorative element */}
                                <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${sub.gradient} opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-500`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Tutorial Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-relia-graybg text-relia-dark text-xs font-bold uppercase tracking-wider mb-6 border border-slate-200">
                            <PlayCircleIcon className="w-4 h-4" />
                            {t('Vídeo Tutorial', 'Video Tutorial')}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-relia-dark tracking-tight mb-4">
                            {t('Veja o Tutorial em Vídeo', 'Watch the Video Tutorial')}
                        </h3>
                        <p className="text-relia-graytext text-lg max-w-2xl mx-auto">
                            {t(
                                'Clique aqui para ver um breve tutorial e aprender a utilizar a plataforma RELIA passo a passo.',
                                'Click here to watch a brief tutorial and learn how to use the RELIA platform step by step.'
                            )}
                        </p>
                    </div>

                    {/* Video Embed */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-black aspect-video max-w-4xl mx-auto">
                        <iframe
                            className="w-full h-full absolute inset-0"
                            src="https://www.youtube.com/embed/DO_drVKVEW4?autoplay=1&cc_load_policy=1"
                            title="Tutorial RELIA"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            {/* PDF Download Section */}
            <section className="py-20 bg-relia-graybg">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-gradient-to-br from-relia-dark via-relia-dark to-relia-light rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                        {/* Background decorations */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute -right-20 -top-20 w-72 h-72 bg-relia-light/20 rounded-full blur-3xl"></div>
                            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-relia-dark/40 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20 shadow-lg">
                                    <FileTextIcon className="w-10 h-10 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    {t('Guia de Partilha de Relatório', 'Report Sharing Guide')}
                                </h3>
                                <p className="text-white/80 mb-8 font-light leading-relaxed">
                                    {t(
                                        'Faça o download do guia completo sobre como partilhar o relatório da plataforma RELIA.',
                                        'Download the complete guide on how to share the RELIA platform report.'
                                    )}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    {/* PDF Download Button */}
                                    <a
                                        href="/RELIA_Partilhar_o_Seu_Progresso.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 bg-white text-relia-dark px-8 py-4 rounded-full font-bold hover:bg-relia-graybg transition-all duration-300 shadow-xl group"
                                    >
                                        <FileTextIcon className="w-5 h-5" />
                                        <span>{t('Descarregar Guia (PDF)', 'Download Guide (PDF)')}</span>
                                        <ChevronRightIcon className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                                    </a>

                                    {/* Online Guide Button */}
                                    <a
                                        href="https://reliatutorial-csacrgrk.manus.space"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-relia-dark transition-all duration-300 shadow-xl group"
                                    >
                                        <BookOpenIcon className="w-5 h-5" />
                                        <span>{t('Navegue no guia', 'Browse the Guide')}</span>
                                        <ChevronRightIcon className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Back to Home */}
            <footer className="py-16 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-relia-dark to-relia-light text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 shadow-lg group"
                    >
                        <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>{t('Voltar ao Início', 'Back to Home')}</span>
                    </Link>

                    <p className="mt-8 text-relia-graytext text-sm">
                        © 2025 RELIA — {t('Universidade do Minho', 'University of Minho')}
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default function TutorialPage() {
    return (
        <LanguageProvider>
            <TutorialContent />
        </LanguageProvider>
    );
}
