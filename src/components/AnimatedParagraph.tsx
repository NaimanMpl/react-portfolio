import gsap, { Power3 } from "gsap";
import { useEffect, useRef } from 'react';

interface AnimatedTitleProps {
  label: string,
  delay?: number,
  className?: string
}

const AnimatedParagraph = (props: AnimatedTitleProps) => {
  
  const { label, delay, className } = props;
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    
    const timeline = gsap.timeline();

    timeline.to(ref.current, {
      delay: delay,
      duration: .8,
      y: 0,
      opacity: 1,
      ease: Power3.easeInOut
    });

  }, []);

  return (
    <p ref={ref} style={{ transform: 'translateY(40%)', opacity: 0 }} className={className}>{label}</p>
  );
}

export default AnimatedParagraph;