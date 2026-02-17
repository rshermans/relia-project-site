'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const galleryImages = [
    { src: '/Carrossel-jornada.avif', alt: 'Jornadas RELIA 1' },
    { src: '/Carrossel-jornada2.avif', alt: 'Jornadas RELIA 2' },
    { src: '/Carrossel-jornada3.avif', alt: 'Jornadas RELIA 3' },
    { src: '/Carrossel-jornada4.avif', alt: 'Jornadas RELIA 4' },
    { src: '/Carrossel-jornada5.avif', alt: 'Jornadas RELIA 5' },
    { src: '/Carrossel-jornada6.avif', alt: 'Jornadas RELIA 6' },
    { src: '/Carrossel-jornada7.avif', alt: 'Jornadas RELIA 7' },
    { src: '/Carrossel-jornada8.avif', alt: 'Jornadas RELIA 8' },
];

function ChevronLeft({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
        </svg>
    );
}

function ChevronRight({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
        </svg>
    );
}

function CameraIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
            <circle cx="12" cy="13" r="4" />
        </svg>
    );
}

export function PhotoGallerySection() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const totalImages = galleryImages.length;

    const goTo = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning]);

    const goNext = useCallback(() => {
        goTo((currentIndex + 1) % totalImages);
    }, [currentIndex, totalImages, goTo]);

    const goPrev = useCallback(() => {
        goTo((currentIndex - 1 + totalImages) % totalImages);
    }, [currentIndex, totalImages, goTo]);

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying || lightboxOpen) return;
        const interval = setInterval(goNext, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, goNext, lightboxOpen]);

    // Keyboard navigation
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (lightboxOpen) {
                if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + totalImages) % totalImages);
                if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % totalImages);
                if (e.key === 'Escape') setLightboxOpen(false);
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, totalImages]);

    // Touch handlers for swipe
    function handleTouchStart(e: React.TouchEvent) {
        touchStartX.current = e.touches[0].clientX;
    }

    function handleTouchMove(e: React.TouchEvent) {
        touchEndX.current = e.touches[0].clientX;
    }

    function handleTouchEnd() {
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) goNext();
            else goPrev();
        }
        setIsAutoPlaying(false);
    }

    function openLightbox(index: number) {
        setLightboxIndex(index);
        setLightboxOpen(true);
        setIsAutoPlaying(false);
    }

    // Get visible indices for the carousel strip  
    function getVisibleIndices() {
        const indices: number[] = [];
        for (let offset = -2; offset <= 2; offset++) {
            indices.push(((currentIndex + offset) % totalImages + totalImages) % totalImages);
        }
        return indices;
    }

    const visibleIndices = getVisibleIndices();

    return (
        <>
            <section className="py-12 bg-gradient-to-b from-white via-relia-graybg/50 to-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-md text-relia-dark text-[10px] font-bold uppercase tracking-wider mb-4 border border-slate-200">
                            <CameraIcon className="w-3.5 h-3.5" />
                            {t('Galeria', 'Gallery')}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-relia-dark tracking-tight mb-3">
                            {t('Jornadas RELIA em Imagens', 'RELIA Conferences in Images')}
                        </h2>
                        <p className="text-relia-graytext text-sm max-w-xl mx-auto">
                            {t(
                                'Momentos das Jornadas RELIA — encontros, apresentações e workshops.',
                                'Moments from the RELIA Conferences — meetings, presentations and workshops.'
                            )}
                        </p>
                    </div>

                    {/* Main Carousel */}
                    <div
                        className="relative max-w-2xl mx-auto"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Main Image */}
                        <div
                            className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                            onClick={() => openLightbox(currentIndex)}
                        >
                            {galleryImages.map((img, index) => (
                                <img
                                    key={img.src}
                                    src={img.src}
                                    alt={img.alt}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${index === currentIndex
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-105'
                                        }`}
                                    loading={index <= 1 ? 'eager' : 'lazy'}
                                />
                            ))}

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Expand hint */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-relia-dark px-3 py-1.5 rounded-full text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                </svg>
                                {t('Clique para expandir', 'Click to expand')}
                            </div>

                            {/* Image counter */}
                            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/20">
                                {currentIndex + 1} / {totalImages}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); setIsAutoPlaying(false); }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-relia-dark hover:bg-white hover:scale-110 transition-all duration-200 z-10"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); setIsAutoPlaying(false); }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-relia-dark hover:bg-white hover:scale-110 transition-all duration-200 z-10"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="flex items-center justify-center gap-2 mt-5 max-w-2xl mx-auto">
                        {galleryImages.map((img, index) => (
                            <button
                                key={img.src}
                                onClick={() => { goTo(index); setIsAutoPlaying(false); }}
                                className={`relative rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 ${index === currentIndex
                                    ? 'w-14 h-10 md:w-16 md:h-11 ring-2 ring-relia-light shadow-md scale-105'
                                    : 'w-12 h-8 md:w-14 md:h-10 opacity-50 hover:opacity-80 grayscale hover:grayscale-0'
                                    }`}
                                aria-label={`Go to image ${index + 1}`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                {index === currentIndex && (
                                    <div className="absolute inset-0 border-2 border-relia-light rounded-xl" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Progress dots (mobile alternative) */}
                    <div className="flex items-center justify-center gap-2 mt-6 md:hidden">
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => { goTo(index); setIsAutoPlaying(false); }}
                                className={`rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 h-2.5 bg-relia-light'
                                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center"
                    onClick={() => setLightboxOpen(false)}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
                        aria-label="Close"
                    >
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Counter */}
                    <div className="absolute top-6 left-6 text-white/60 text-sm font-bold z-10">
                        {lightboxIndex + 1} / {totalImages}
                    </div>

                    {/* Image */}
                    <img
                        src={galleryImages[lightboxIndex].src}
                        alt={galleryImages[lightboxIndex].alt}
                        className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl select-none"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Navigation */}
                    <button
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + totalImages) % totalImages); }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 border border-white/20"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % totalImages); }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 border border-white/20"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Thumbnail strip in lightbox */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10">
                        {galleryImages.map((img, index) => (
                            <button
                                key={img.src}
                                onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                                className={`rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 ${index === lightboxIndex
                                    ? 'w-14 h-10 ring-2 ring-relia-light opacity-100'
                                    : 'w-12 h-8 opacity-40 hover:opacity-70'
                                    }`}
                            >
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
