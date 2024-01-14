import { Variants, motion } from 'framer-motion';
import gsap, { Power3 } from "gsap";
import { useEffect, useRef } from 'react';
import { AnimationTiming, anim } from '../../utils/anim';

interface AnimatedParagraphProps {
  label: string,
  delay?: number,
  className?: string
}

const AnimatedParagraph = (props: AnimatedParagraphProps) => {
  
  const { label, delay, className } = props;
  const ref = useRef<HTMLParagraphElement>(null);

  const paragraphAnimation: Variants = {
    initial: {
      y: 75
    },
    enter: {
      y: 0,
      transition: AnimationTiming.easeInOutQuad(.4, .75)
    }
  }

  return (
    <motion.p {...anim(paragraphAnimation)} ref={ref} className={className}>{label}</motion.p>
  );
}

export default AnimatedParagraph;