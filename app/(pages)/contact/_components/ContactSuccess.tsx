"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSuccess() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            We're Here to Help
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Whether you have a question, need a quote, or want to discuss your next project, 
            we're ready to turn your ideas into reality. Let's create something amazing together!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">hello@wafipix.com</p>
              <p className="text-sm text-gray-500 mt-1">24/7 Support</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9AM-6PM</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">San Francisco, CA</p>
              <p className="text-sm text-gray-500 mt-1">By appointment</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a 
                href="https://calendly.com/wafipix1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Schedule a Meeting
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <a href="/about">Learn More About Us</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 