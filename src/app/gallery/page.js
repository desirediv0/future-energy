'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import SectionHeader from '@/components/SectionHeader';
import { HiX, HiChevronLeft, HiChevronRight, HiZoomIn, HiZoomOut, HiPlay } from 'react-icons/hi';

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);

    const galleryItems = useMemo(() => [
        {
            id: 1,
            src: '/card1.jpg',
            title: 'Manufacturing Facility',
            category: 'facility',
        },
        {
            id: 2,
            src: '/card2.jpg',
            title: 'Battery Production Line',
            category: 'production',
        },
        {
            id: 3,
            src: '/card3.jpg',
            title: 'Quality Testing',
            category: 'facility',
        },
        {
            id: 4,
            src: '/card4.jpg',
            title: 'Battery Products',
            category: 'products',
        },
        {
            id: 5,
            src: '/card5.jpg',
            title: 'Assembly Area',
            category: 'production',
        },
        {
            id: 6,
            src: '/card6.jpg',
            title: 'Warehouse',
            category: 'facility',
        },
        {
            id: 7,
            src: '/card7.jpg',
            title: 'Production Team',
            category: 'team',
        },
        {
            id: 8,
            src: '/card8.jpg',
            title: 'Final Products',
            category: 'products',
        },
    ], []);

    const openLightbox = (item) => {
        setSelectedImage(item);
        setIsZoomed(false);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = useCallback(() => {
        setSelectedImage(null);
        setIsZoomed(false);
        document.body.style.overflow = 'auto';
    }, []);

    const toggleZoom = useCallback(() => {
        setIsZoomed(prev => !prev);
    }, []);

    const navigateImage = useCallback((direction) => {
        if (!selectedImage) return;
        const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
        let newIndex;
        if (direction === 'next') {
            newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
        } else {
            newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
        }
        setSelectedImage(galleryItems[newIndex]);
        setIsZoomed(false);
    }, [selectedImage, galleryItems]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;

            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    navigateImage('prev');
                    break;
                case 'ArrowRight':
                    navigateImage('next');
                    break;
                case ' ':
                    e.preventDefault();
                    toggleZoom();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, navigateImage, closeLightbox, toggleZoom]);

    return (
        <>
            <Hero
                title="Inside Future Energy"
                subtitle="Gallery"
                description="Take a visual tour of our manufacturing facility, production processes, and the products that power millions worldwide."
                primaryCTA="Schedule a Visit"
                primaryHref="/contact"
                secondaryCTA="About Manufacturing"
                secondaryHref="/manufacturing"
            />

            {/* Main Gallery Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Photo Gallery"
                        title="Manufacturing Excellence in Pictures"
                        description="Explore our world-class facilities and see how quality energy solutions are made. Click on any image to view in full screen."
                    />

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {galleryItems.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => openLightbox(item)}
                                className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                                    }`}
                            >
                                <div className={`relative ${index === 0 || index === 5 ? 'h-80 md:h-full min-h-[400px]' : 'h-56 md:h-64'
                                    }`}>
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                        <span className="inline-flex items-center gap-2 text-energy-orange text-sm font-medium">
                                            <span className="w-2 h-2 bg-energy-orange rounded-full"></span>
                                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                        </span>
                                    </div>

                                    {/* Hover Icon - Zoom */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <HiZoomIn className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) closeLightbox();
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
                        aria-label="Close"
                    >
                        <HiX className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Zoom Toggle Button */}
                    <button
                        onClick={toggleZoom}
                        className="absolute top-4 right-20 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
                        aria-label={isZoomed ? "Zoom Out" : "Zoom In"}
                    >
                        {isZoomed ? (
                            <HiZoomOut className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                        ) : (
                            <HiZoomIn className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                        )}
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={() => navigateImage('prev')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
                        aria-label="Previous Image"
                    >
                        <HiChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={() => navigateImage('next')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
                        aria-label="Next Image"
                    >
                        <HiChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Image Container */}
                    <div
                        className={`relative transition-all duration-300 ${isZoomed ? 'cursor-zoom-out overflow-auto max-h-screen max-w-none' : 'cursor-zoom-in max-w-5xl max-h-[80vh] w-full mx-4'}`}
                        onClick={toggleZoom}
                    >
                        <div className={`relative ${isZoomed ? 'w-[150vw] h-[150vh]' : 'w-full h-full aspect-video'}`}>
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                fill
                                className={`object-contain transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Image Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <div className="max-w-5xl mx-auto flex items-center justify-between">
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">{selectedImage.title}</h3>
                                <span className="inline-flex items-center gap-2 text-energy-orange text-sm font-medium">
                                    <span className="w-2 h-2 bg-energy-orange rounded-full"></span>
                                    {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                                </span>
                            </div>
                            <div className="text-white/60 text-sm">
                                {galleryItems.findIndex(item => item.id === selectedImage.id) + 1} / {galleryItems.length}
                            </div>
                        </div>
                    </div>

                    {/* Keyboard Navigation Hint */}
                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/40 text-sm hidden md:flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">←</kbd>
                            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">→</kbd>
                            Navigate
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd>
                            Close
                        </span>
                        <span className="flex items-center gap-1">
                            Click image to zoom
                        </span>
                    </div>
                </div>
            )}

            {/* Gallery Stats */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '50,000+', label: 'Sq. Ft. Facility' },
                            { value: '200+', label: 'Skilled Workers' },
                            { value: '10,000+', label: 'Monthly Production' },
                            { value: '30+', label: 'Countries Served' },
                        ].map((stat) => (
                            <div key={stat.label} className="p-6 rounded-lg bg-gray-50 hover:bg-energy-green/5 transition-colors">
                                <div className="text-3xl md:text-4xl font-bold text-energy-green mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="section-padding bg-energy-gradient text-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <span className="w-2 h-2 bg-energy-orange rounded-full"></span>
                            <span className="text-energy-orange font-semibold text-sm">Video Tour</span>
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Take a Virtual Factory Tour
                        </h2>
                        <p className="text-white/80 mb-8">
                            Experience our manufacturing excellence through an immersive video walkthrough
                            of our facility at IMT Manesar.
                        </p>

                        {/* Video Placeholder */}
                        <div className="relative bg-white/10 rounded-3xl aspect-video flex items-center justify-center backdrop-blur-sm overflow-hidden">
                            <Image
                                src="/card1.jpg"
                                alt="Factory Tour"
                                fill
                                className="object-cover opacity-50"
                            />
                            <div className="relative z-10 text-center">
                                <button className="w-20 h-20 bg-energy-orange rounded-full flex items-center justify-center hover:bg-energy-orange-dark transition-colors group shadow-lg">
                                    <HiPlay className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
                                </button>
                                <p className="text-white/80 mt-4 text-sm">Click to play video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA
                title="Want to See Our Facility in Person?"
                description="Schedule a tour of our manufacturing plant and witness our commitment to quality firsthand."
                buttonText="Book a Factory Visit"
                buttonHref="/contact"
            />
        </>
    );
}
