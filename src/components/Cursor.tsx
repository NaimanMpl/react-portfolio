import gsap, { Power3 } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const Cursor = () => {

  const [ cursorPosition, setCursorPosition ] = useState({ x: 0, y: 0 });
  const cursorOutline = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      cursorOutline.current?.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      }, { duration: 200, fill: 'forwards' });
    }

    const handleClick = () => {
      const timeline = gsap.timeline();

      timeline.to(cursorOutline.current, {
        duration: 0.1,
        width: '30px',
        height: '30px'
      })

      timeline.to(cursorOutline.current, {
        duration: 0.1,
        width: '40px',
        height: '40px'
      })
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <>
      <div className="cursor-dot" style={{ left: cursorPosition.x, top: cursorPosition.y }} ></div>
      <div ref={cursorOutline} className="cursor-outline"></div>
    </>
  );
}

export default Cursor;