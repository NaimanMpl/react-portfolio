import gsap, { Power3 } from "gsap";
import { useEffect, useRef } from 'react';

interface AnimatedTitleProps {
  label: string,
  className?: string
}

const AnimatedTitle = (props: AnimatedTitleProps) => {
  
  const { label, className } = props;
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.to(ref.current, {
      duration: .8,
      y: 0,
      ease: Power3.easeInOut
    });

  }, []);

  return (
    <div style={{ overflow: 'hidden' }} className="title-container">
      <h1 style={{ transform: 'translateY(40%)' }} className={className} ref={ref}>{label}</h1>
    </div>
  );
}

export default AnimatedTitle;