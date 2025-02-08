import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after first animation
        }
      },
      { threshold: 0.2 } // Adjust for when animation starts
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      style={{ willChange: "opacity, transform" }} // Optimized for performance
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
