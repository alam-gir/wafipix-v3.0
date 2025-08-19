'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Work } from '@/lib/demo-data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkNavigationProps {
  currentWork: Work;
  previousWork?: Work;
  nextWork?: Work;
}

export default function WorkNavigation({ currentWork, previousWork, nextWork }: WorkNavigationProps) {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Explore More Work
            </h2>
            <p className="text-primary/80">
              Discover our other creative projects and solutions
            </p>
          </motion.div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Previous Work */}
            {previousWork && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                whileHover={{ x: -5 }}
                className="group"
              >
                <Link href={`/works/${previousWork.slug}`} className="block">
                  <div className="relative p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300 bg-card/30 hover:bg-card/50">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <ChevronLeft className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-primary/80 mb-1">Previous Project</p>
                        <h3 className="font-semibold text-white group-hover:text-primary transition-colors duration-300 truncate">
                          {previousWork.name}
                        </h3>
                        <p className="text-sm text-primary/80 truncate">
                          {previousWork.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Next Work */}
            {nextWork && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{ x: 5 }}
                className="group"
              >
                <Link href={`/works/${nextWork.slug}`} className="block">
                  <div className="relative p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300 bg-card/30 hover:bg-card/50">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 min-w-0 text-right">
                        <p className="text-sm text-primary/80 mb-1">Next Project</p>
                        <h3 className="font-semibold text-white group-hover:text-primary transition-colors duration-300 truncate">
                          {nextWork.name}
                        </h3>
                        <p className="text-sm text-primary/80 truncate">
                          {nextWork.service}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <ChevronRight className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Single Navigation Item (when only one direction available) */}
            {!previousWork && nextWork && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="md:col-span-2"
              >
                <Link href={`/works/${nextWork.slug}`} className="block">
                  <div className="relative p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300 bg-card/30 hover:bg-card/50 text-center">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <ChevronRight className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-primary/80 mb-1">Next Project</p>
                        <h3 className="font-semibold text-white hover:text-primary transition-colors duration-300">
                          {nextWork.name}
                        </h3>
                        <p className="text-sm text-primary/80">
                          {nextWork.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {previousWork && !nextWork && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="md:col-span-2"
              >
                <Link href={`/works/${previousWork.slug}`} className="block">
                  <div className="relative p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300 bg-card/30 hover:bg-card/50 text-center">
                    <div className="flex items-center justify-center gap-4">
                      <div>
                        <p className="text-sm text-primary/80 mb-1">Previous Project</p>
                        <h3 className="font-semibold text-white hover:text-primary transition-colors duration-300">
                          {previousWork.name}
                        </h3>
                        <p className="text-sm text-primary/80">
                          {previousWork.service}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <ChevronLeft className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Back to All Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-center mt-12"
          >
            <Link 
              href="/works" 
              className="inline-flex items-center gap-2 text-primary/80 hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to All Works</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
