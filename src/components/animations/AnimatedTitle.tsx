import { Variants, motion } from "framer-motion";
import gsap, { Power3 } from "gsap";
import { useEffect, useRef } from 'react';
import { AnimationTiming, anim } from "../../utils/anim";

interface AnimatedTitleProps {
  label: string,
  className?: string
}

const AnimatedTitle = (props: AnimatedTitleProps) => {
  
  const { label, className } = props;
  const ref = useRef<HTMLHeadingElement>(null);

  const titleAnimation: Variants = {
    initial: {
      y: 150
    },
    enter: {
      y: 0,
      transition: AnimationTiming.easeInOutQuad(.3, .75)
    }
  }

  return (
    <motion.h1 {...anim(titleAnimation)} className={className} ref={ref}>{label}</motion.h1>
  );
}

export default AnimatedTitle;