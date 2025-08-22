"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Globe, MessageSquare } from "lucide-react";

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "hello@wafipix.com",
        "support@wafipix.com"
      ],
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543"
      ],
      description: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: [
        "123 Innovation Drive",
        "San Francisco, CA 94105"
      ],
      description: "By appointment only"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9AM - 6PM",
        "Saturday: 10AM - 4PM"
      ],
      description: "PST Timezone"
    },
    {
      icon: Globe,
      title: "Global Reach",
      details: [
        "Remote collaboration",
        "Worldwide clients"
      ],
      description: "We work with clients globally"
    },
    {
      icon: MessageSquare,
      title: "Quick Response",
      details: [
        "Live chat available",
        "24/7 support"
      ],
      description: "Get instant answers"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            We&apos;re here to help bring your digital vision to life. Choose the way that works best for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-primary to-primary/80 rounded-xl text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">
                  {info.title}
                </h3>
              </div>
              
              <div className="space-y-2 mb-4">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-primary/80 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
              
              <p className="text-sm text-primary/60 italic">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Wafipix?
            </h3>
            <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
              We&apos;re not just another digital agency. We&apos;re your creative partners, 
              committed to delivering exceptional results that exceed expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-primary/80">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-primary/80">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <p className="text-primary/80">Response Time</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 