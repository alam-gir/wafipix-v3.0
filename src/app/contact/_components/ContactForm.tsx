"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, Check, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";
import { contactFormSchema, type ContactFormData } from "./contactSchema";
import { useMetaPixelTracking } from "@/hooks/useMetaPixelTracking";
import { useContactForm } from "@/hooks/api/useCommon";

// Dynamically import RichTextEditor to prevent SSR issues
const RichTextEditor = dynamic(() => import("./RichTextEditor"), {
  ssr: false,
  loading: () => (
    <div className="border border-border/20 rounded-lg overflow-hidden">
      <div className="flex flex-wrap items-center gap-1 p-3 bg-card/50 border-b border-border/20">
        <div className="h-8 w-8 bg-primary/20 rounded animate-pulse"></div>
        <div className="h-8 w-8 bg-primary/20 rounded animate-pulse"></div>
        <div className="h-8 w-8 bg-primary/20 rounded animate-pulse"></div>
      </div>
      <div className="p-4 min-h-[200px] bg-card/50">
        <div className="h-4 bg-primary/20 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-primary/20 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-primary/20 rounded w-3/4 animate-pulse"></div>
      </div>
    </div>
  ),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { trackContactSubmission, trackFormInteraction } = useMetaPixelTracking();
  const { submitContactForm } = useContactForm();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const messageValue = watch("message");

  // Scroll to top when showing success state
  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSubmitted]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Track form interaction start
    trackFormInteraction({
      id: 'contact_form',
      name: 'Contact Form',
      type: 'contact',
      completed: false,
      fields: ['name', 'email', 'phone', 'message']
    });
    
    try {
      // Transform data to match API format
      const apiData = {
        fullName: data.name,
        email: data.email,
        phone: data.phone || undefined,
        message: data.message,
      };
      
      const result = await submitContactForm(apiData);
      
      if (result.success) {
        // Track successful contact submission
        trackContactSubmission(data);
        
        // Track form completion
        trackFormInteraction({
          id: 'contact_form',
          name: 'Contact Form',
          type: 'contact',
          completed: true,
          fields: ['name', 'email', 'phone', 'message']
        });
        
        // Add a small delay to show the loading state
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsSubmitted(true);
        reset();
      } else {
        // Handle error - you might want to show a toast notification here
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessageChange = (value: string) => {
    setValue("message", value);
  };

    if (isSubmitted) {
    return (
      <section id="contact-form" className="min-h-screen flex items-center justify-center bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="bg-card rounded-3xl p-12 shadow-xl border border-border/20">
              {/* Professional Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-primary"
                >
                  <Check className="w-12 h-12" />
                </motion.div>
              </motion.div>
              
              {/* Success Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl font-bold text-white mb-6"
              >
                Message Sent Successfully
              </motion.h2>
              
              {/* Success Message */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-primary/80 mb-8 leading-relaxed"
              >
                Thank you for reaching out. We&apos;ve received your message and will contact you within 24 hours.
              </motion.p>
              
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/25 text-primary-foreground px-8 py-3 rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Another Message
                </Button>
                
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-xl transition-all duration-300"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-12 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Send Us a Message
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            {"Ready to start your next project? Fill out the form below and we'll get back to you as soon as possible."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border/20">
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-white">
                      <User className="w-4 h-4 text-primary" />
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-border/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-card/50 text-white placeholder:text-primary/60"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-border/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-card/50 text-white placeholder:text-primary/60"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number <span className="text-primary/60">(Optional)</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-border/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-card/50 text-white placeholder:text-primary/60"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm">{errors.phone.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-white">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Message *
                  </label>
                  <RichTextEditor
                    value={messageValue}
                    onChange={handleMessageChange}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/25 text-primary-foreground py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none hover:from-primary/90 hover:to-primary/70"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        {/* Animated loading spinner */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="relative"
                        >
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"></div>
                        </motion.div>
                        
                        {/* Loading text with dots animation */}
                        <div className="flex items-center gap-1">
                          <span>Sending Message</span>
                          <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            .
                          </motion.div>
                          <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                          >
                            .
                          </motion.div>
                          <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                          >
                            .
                          </motion.div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <motion.div
                          whileHover={{ rotate: 15 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Send Message
                      </div>
                    )}
                  </Button>
                  
                  {/* Submission status indicator */}
                  {isSubmitting && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-center"
                    >
                      <div className="inline-flex items-center gap-2 text-sm text-primary/70">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-2 h-2 bg-primary/50 rounded-full"
                        />
                        <span>Please wait while we send your message...</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 