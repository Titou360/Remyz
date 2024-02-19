import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedNumber({ toNumber }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [ref, inView] = useInView({ triggerOnce: true });
  const animationRef = useRef(null);

  useEffect(() => {
    if (inView) {
      // Start the animation only when the component is in view
      animationRef.current = animate(count, toNumber, { duration: 3 });
    } else if (animationRef.current) {
      // Stop the animation if the component goes out of view
      animationRef.current.stop();
    }

    return () => {
      // Clean up animation when the component is unmounted
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [count, toNumber, inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
