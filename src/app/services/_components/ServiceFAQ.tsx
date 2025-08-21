'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ServiceFaqs } from '@/types';
import { MagneticWrapper } from '@/components/ui';

interface ServiceFAQProps {
  serviceTitle: string
  faqs: ServiceFaqs[];
}

export default function ServiceFAQ({ serviceTitle, faqs }: ServiceFAQProps) {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const router = useRouter();

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/30">
            <HelpCircle className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-primary/90 max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions about our {serviceTitle.toLowerCase()} services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-r from-card/40 to-card/20 backdrop-blur-sm border border-border/30 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-lg shadow-primary/5">
                {/* FAQ Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold text-white pr-6 leading-relaxed">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </motion.div>
                </button>

                {/* FAQ Answer */}
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <p className="text-lg text-primary/90 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-card/40 to-card/20 backdrop-blur-sm border border-border/30 rounded-3xl p-10 shadow-xl shadow-primary/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Still Have Questions?
            </h3>
            <p className="text-lg text-primary/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help. Contact us and we&apos;ll get back to you as soon as possible.
            </p>
            <MagneticWrapper strength={0.2} attractArea={80}>
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:from-primary/90 hover:to-primary/70 hover:scale-105"
              >
                Contact Us
              </button>
            </MagneticWrapper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
