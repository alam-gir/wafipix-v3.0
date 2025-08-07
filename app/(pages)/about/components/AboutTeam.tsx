"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail,
  Users,
  Sparkles
} from "lucide-react";

interface AboutTeamProps {
  className?: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  delay: number;
}

const TeamMember = ({ name, role, bio, image, social, delay }: TeamMemberProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="group relative"
    >
      <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Image Placeholder */}
        <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-primary font-medium mb-4">
            {role}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {bio}
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-3">
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-500/10 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {social.email && (
              <a
                href={`mailto:${social.email}`}
                className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
      </div>
    </motion.div>
  );
};

export function AboutTeam({ className }: AboutTeamProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      bio: "Visionary leader with 8+ years of experience in digital design and brand strategy. Passionate about creating meaningful user experiences.",
      image: "/team/sarah.jpg",
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        email: "sarah@wafipix.com"
      }
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in modern web technologies. Loves solving complex problems and building scalable solutions.",
      image: "/team/michael.jpg",
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        github: "https://github.com/michaelchen",
        email: "michael@wafipix.com"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "UX/UI Designer",
      bio: "User experience specialist focused on creating intuitive and beautiful interfaces. Believes in design that serves people first.",
      image: "/team/emily.jpg",
      social: {
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        twitter: "https://twitter.com/emilyrodriguez",
        email: "emily@wafipix.com"
      }
    },
    {
      name: "David Kim",
      role: "Project Manager",
      bio: "Experienced project manager who ensures every project runs smoothly from concept to completion. Master of timelines and client communication.",
      image: "/team/david.jpg",
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        email: "david@wafipix.com"
      }
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Strategist",
      bio: "Digital marketing expert who helps brands connect with their audiences. Specializes in growth strategies and brand positioning.",
      image: "/team/lisa.jpg",
      social: {
        linkedin: "https://linkedin.com/in/lisathompson",
        twitter: "https://twitter.com/lisathompson",
        email: "lisa@wafipix.com"
      }
    },
    {
      name: "Alex Martinez",
      role: "Frontend Developer",
      bio: "Frontend specialist with a passion for clean code and smooth animations. Creates engaging user interfaces that perform beautifully.",
      image: "/team/alex.jpg",
      social: {
        linkedin: "https://linkedin.com/in/alexmartinez",
        github: "https://github.com/alexmartinez",
        email: "alex@wafipix.com"
      }
    }
  ];

  return (
    <section className={`py-20 md:py-32 bg-gradient-to-b from-background to-muted/20 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6">
              <Users className="w-4 h-4" />
              Meet Our Team
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Minds Behind the Magic
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our diverse team of creative professionals brings together expertise in design, 
              development, strategy, and innovation to deliver exceptional results for our clients.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                social={member.social}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Team Culture */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-primary/20">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Our Culture
                </h3>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                We foster a culture of creativity, collaboration, and continuous learning. 
                Every team member brings unique perspectives and skills, creating a dynamic 
                environment where innovation thrives and excellence is the standard.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Remote-first culture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Continuous learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">Work-life balance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 