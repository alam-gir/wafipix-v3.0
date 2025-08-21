import { motion } from 'framer-motion';
import MagneticWrapper from '@/components/ui/MagneticWrapper';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

interface SubmenuCTASectionProps {
  onClose?: () => void;
}

export function SubmenuCTASection({ onClose }: SubmenuCTASectionProps) {
  return (
    <div className="hidden lg:block col-span-3 relative overflow-hidden h-full">
      {/* BackgroundGradientAnimation */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(20, 83, 45)"
        gradientBackgroundEnd="rgb(6, 78, 59)"
        firstColor="34, 197, 94"
        secondColor="22, 163, 74"
        thirdColor="16, 185, 129"
        fourthColor="5, 150, 105"
        fifthColor="4, 120, 87"
        pointerColor="34, 197, 94"
        size="60%"
        blendingValue="hard-light"
        interactive={true}
        height="h-full"
        width="w-full"
        containerClassName="absolute inset-0"
      >
        {/* Content Overlay */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Enhanced Icon */}
            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto bg-primary/20 shadow-md backdrop-blur-md"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>

            {/* Enhanced Text Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground tracking-tight">
                Ready to Start?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                Let&apos;s create something amazing together with cutting-edge
                design and technology
              </p>
            </div>

            {/* Enhanced CTA Button with Magnetic Wrapper */}
            <MagneticWrapper strength={0.3} attractArea={100}>
              <motion.a
                href="/start-project"
                className="px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl border border-primary/20 inline-block text-center"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Start Project
              </motion.a>
            </MagneticWrapper>
          </motion.div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
} 