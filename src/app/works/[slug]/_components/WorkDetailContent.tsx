'use client';

import { motion } from 'framer-motion';
import { Work } from '@/lib/demo-data';
import { Badge } from '@/components/ui/Badge';

interface WorkDetailContentProps {
  work: Work;
}

export default function WorkDetailContent({ work }: WorkDetailContentProps) {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Service Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <Badge 
              text={work.service} 
              variant="outline" 
              size="lg"
              className="text-base px-6 py-3"
            />
          </motion.div>

          {/* Project Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-8"
          >
            {work.name}
          </motion.h2>

          {/* Short Description - Always Visible */}
          {work.shortDescription && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mb-12"
            >
              <p className="text-xl sm:text-2xl text-primary/80 text-center leading-relaxed max-w-3xl mx-auto">
                {work.shortDescription}
              </p>
            </motion.div>
          )}

          {/* Full Description - Hidden on Mobile */}
          {work.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="hidden md:block"
            >
              <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:text-white prose-p:text-primary/80 prose-strong:text-white prose-a:text-primary hover:prose-a:text-primary/80">
                <div 
                  className="text-primary/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: work.description }}
                />
              </div>
            </motion.div>
          )}

          {/* Mobile Description Toggle */}
          {work.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="md:hidden"
            >
              <details className="group">
                <summary className="cursor-pointer list-none text-center">
                  <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <span className="text-sm font-medium">Read full description</span>
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-open:rotate-180"
                    >
                      <polyline points="6,9 12,15 18,9" />
                    </motion.svg>
                  </div>
                </summary>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none prose-headings:text-white prose-p:text-primary/80 prose-strong:text-white prose-a:text-primary hover:prose-a:text-primary/80">
                    <div 
                      className="text-primary/80 leading-relaxed text-sm"
                      dangerouslySetInnerHTML={{ __html: work.description }}
                    />
                  </div>
                </motion.div>
              </details>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
