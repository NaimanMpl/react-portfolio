import gsap, { Elastic, Power4 } from 'gsap';
import { MouseEvent, useEffect, useRef } from 'react';
import '../styles/MagneticButton.scss';

interface MagneticButtonProps {
  label: string,
  href?: string
}

const MagneticButton = (props: MagneticButtonProps) => {
  const { label, href } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current === null) return;

    console.log('moving!')
    const boundBox = buttonRef.current.getBoundingClientRect();
    
    const strength = 40;
    const labelStrength = 80;

    const newX = ((e.clientX - boundBox.left) / buttonRef.current.offsetWidth) - 0.5;
    const newY = ((e.clientY - boundBox.top) / buttonRef.current.offsetHeight) - 0.5;

    console.log(newX, newY)
  
    gsap.to(buttonRef.current, {
      duration: 1,
      x: newX * strength,
      y: newY * strength,
      ease: Power4.easeOut
    });

    gsap.to(labelRef.current, {
      duration: 1,
      x: newX * labelStrength,
      y: newY * labelStrength,
      ease: Power4.easeOut
    });
  }

  const resetButton = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('leaving')
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      ease: Elastic.easeOut
    });

    gsap.to(labelRef.current, {
      x: 0,
      y: 0,
      ease: Elastic.easeOut
    });
  }

  return (
    <button onMouseMove={handleMouseMove} onMouseLeave={resetButton} ref={buttonRef} className="magnetic">
      <span ref={labelRef} className="magnetic-label">{label}</span>
    </button>
  );
}

export default MagneticButton;