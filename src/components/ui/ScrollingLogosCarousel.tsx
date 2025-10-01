"use client";

import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ScrollingLogosCarouselProps {
  logos: string[];
  speed: number;
  className?: string;
}

export function ScrollingLogosCarousel({ 
  logos, 
  speed, 
  className = "" 
}: ScrollingLogosCarouselProps) {
  return (
    <div className={`relative mx-auto flex items-center justify-center lg:max-w-6xl ${className}`}>
      <Carousel
        opts={{ loop: true, skipSnaps: false }}
        plugins={[AutoScroll({ playOnInit: true, speed, stopOnInteraction: false })]}
      >
                       <CarouselContent className="ml-0">
                 {logos.map((logo, index) => (
                   <CarouselItem
                     key={index}
                     className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/8"
                   >
                                           <div className="mx-3 sm:mx-4 md:mx-6 flex shrink-0 items-center justify-center">
                        <Image
                          src={logo}
                          alt="Company logo"
                          width={480}
                          height={480}
                          className="h-10 sm:h-12 w-auto opacity-70 object-contain"
                          draggable={false}
                          priority={false}
                          unoptimized={false}
                        />
                      </div>
                   </CarouselItem>
                 ))}
               </CarouselContent>
      </Carousel>
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
    </div>
  );
} 