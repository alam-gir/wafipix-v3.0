"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "@/components/ui/VideoPlayer";
import type { WorkCard as WorkCardType } from "@/types/works";

interface WorkCardProps {
  work: WorkCardType;
  index: number;
  isLarge?: boolean;
}

export default function WorkCard({
  work,
  index,
  isLarge = false,
}: WorkCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Transform values for parallax effect
  const coverY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${isLarge ? "w-full max-w-[95vw] mx-auto" : ""}`}
    >
      <Link href={`/works/${work.slug}`}>
          <motion.div
            className={`relative bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ${
              isLarge ? "h-[100vh]" : "h-[80vh]"
            }`}
            whileHover={{ scale: 1.01 }}
            style={{ y: cardY }}
          >
            {/* Background Cover Media with Parallax */}
            <div className="absolute inset-0 overflow-hidden z-0">
              {work.coverMedia ? (
                work.coverMedia.type === "video" ? (
                  <motion.div className="h-full w-full" style={{ y: coverY }}>
                    <div className="h-full w-full scale-125">
                      <VideoPlayer
                        videoSrc={work.coverMedia.url}
                        className="w-full h-full scale-125"
                        showControlsOverlay={false}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div className="h-full w-full" style={{ y: coverY }}>
                    <Image
                      src={work.coverMedia.url}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-500 scale-125"
                      sizes={isLarge ? "90vw" : "50vw"}
                      quality={95}
                      priority={index < 3}
                    />
                  </motion.div>
                )
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-primary/60">
                      No media available
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Foreground Profile Media - Perfect Center */}
            {work.profileMedia && (
              <div className="absolute h-2/3 w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center">
                 <div
                   className={`rounded-2xl overflow-hidden h-full w-full flex justify-center`}
                 >
                  {work.profileMedia.type === "video" ? (
                    <VideoPlayer
                      videoSrc={work.profileMedia.url}
                      className="w-full h-full"
                      showControlsOverlay={false}
                    />
                  ) : (
                    <Image
                      src={work.profileMedia.url}
                      alt={`${work.title} profile`}
                      width={0}
                      height={0}
                      className="object-contain h-full w-auto rounded"
                      sizes={isLarge ? "33vw" : "25vw"}
                      quality={95}
                      priority={index < 3}
                    />
                  )}
                </div>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            {/* Service Badge - Top Left */}
            <div className="absolute top-4 left-4 z-30">
              <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                {work.serviceTitle}
              </div>
            </div>


            {/* Title - Bottom Left */}
            <div
              className={`absolute bottom-4 left-4 z-30 ${
                isLarge ? "text-3xl md:text-4xl" : "text-xl"
              }`}
            >
              <h3 className="font-bold text-white group-hover:text-primary transition-colors duration-300">
                {work.title}
              </h3>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
          </motion.div>
      </Link>
    </motion.div>
  );
}
