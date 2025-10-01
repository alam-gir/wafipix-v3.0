"use client";

import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useReviews } from "@/hooks/api/useCommon";
import type { ReviewResponsePublic } from "@/types/common";

interface TestimonialSectionProps {
  className?: string;
}

export function TestimonialSection({ className }: TestimonialSectionProps) {
  const { data: reviewsData, error: reviewsError, isLoading: reviewsLoading } = useReviews();
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  // Auto-play carousel
  useEffect(() => {
    if (!api) return;

    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 3000); // Auto-scroll every 3 seconds
    };

    const stopAutoPlay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Start auto-play
    startAutoPlay();

    // Pause on hover
    const carouselElement = api.rootNode();
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', stopAutoPlay);
      carouselElement.addEventListener('mouseleave', startAutoPlay);
    }

    return () => {
      stopAutoPlay();
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', stopAutoPlay);
        carouselElement.removeEventListener('mouseleave', startAutoPlay);
      }
    };
  }, [api]);

  const ReviewCard = ({ review }: { review: ReviewResponsePublic }) => {
    const hasImage = review.reviewImage && review.reviewImage.trim() !== '';
    const clientName = review.clientName || 'Anonymous';
    const clientInitial = clientName.charAt(0).toUpperCase();

    return (
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="h-full max-w-fit"
      >
        {hasImage ? (
          /* Image-based Review Card - Natural Image Width */
          <div className="relative h-80 bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden inline-block">
            {/* Review Image - Natural Size */}
            <Image
              src={review.reviewImage!}
              alt={`${clientName} review`}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-auto object-cover"
              priority={true}
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Content Overlay - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="space-y-3">
                {/* Platform */}
                <div className="flex justify-start">
                  <span className="text-xs font-semibold text-white/90 uppercase tracking-wide bg-black/20 px-2 py-1 rounded">
                    {review.platform}
                  </span>
                </div>
                
                {/* Client Name & Rating */}
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">
                    {clientName}
                  </h4>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Text-based Review Card - Fixed Width */
          <div className="relative h-80 w-80 bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
            <div className="h-full w-full flex flex-col p-6">
              {/* Client Info - Top */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {clientInitial}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">
                    {clientName}
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {review.platform}
                  </span>
                </div>
              </div>

              {/* Review Text - Middle */}
              <div className="flex-1 flex flex-col justify-center">
                <blockquote className="text-white leading-relaxed text-sm">
                  "{review.reviewText}"
                </blockquote>
              </div>

              {/* Rating - Bottom */}
              <div className="flex items-center justify-center pt-4 border-t border-border/30">
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className={`py-20 md:py-28 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badgeIcon={Heart}
          badgeText="Client Success Stories"
          title="What Our Clients"
          subtitle="Say About Us"
          description="Don't just take our word for it – hear from the amazing businesses we've helped transform their digital presence."
          className="mb-20"
        />

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-primary/5 to-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Loading State */}
          {reviewsLoading && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-muted-foreground">Loading reviews...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {reviewsError && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-destructive">Failed to load reviews</p>
                  <p className="text-xs text-muted-foreground mt-1">Please try again later</p>
                </div>
              </div>
                      </div>
          )}

          {/* Reviews Carousel */}
          {!reviewsLoading && !reviewsError && reviewsData?.data && reviewsData.data.length > 0 && (
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                skipSnaps: false,
                dragFree: true,
                containScroll: "trimSnaps",
              }}
              className="w-full max-w-7xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {reviewsData.data.map((review) => (
                  <CarouselItem key={review.id} className="pl-2 md:pl-4 basis-auto flex-shrink-0">
                    <ReviewCard review={review} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}

          {/* Empty State */}
          {!reviewsLoading && !reviewsError && (!reviewsData?.data || reviewsData.data.length === 0) && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-muted-foreground" />
                          </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">No reviews available</p>
                  <p className="text-xs text-muted-foreground mt-1">Check back later</p>
                            </div>
                            </div>
                          </div>
          )}
        </div>
      </div>
    </section>
  );
} 