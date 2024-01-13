import gsap, { Power3 } from 'gsap';
import { MouseEvent, useRef, useState } from 'react';
import '../styles/WorkCard.scss';

interface WorkCardProps {
  index: number,
  title: string,
  description: string,
  annotation: string
  background: string
}

const WorkCard = (props: WorkCardProps) => {
  const { index, title, description, annotation, background } = props;
  const bgRef = useRef<HTMLImageElement>(null);
  const [ bgSettings, setBgSettings ] = useState({ x: 0, y: 0, moving: false, rotationAngle: 0 });
  const [text, setText] = useState('');

  const showPreview = (e: MouseEvent<HTMLDivElement>) => {
    
    setBgSettings({ x: e.clientX, y: e.clientY, moving: false, rotationAngle: 0 });
    
    setText(`Index : ${index} Y : ${e.clientY}`)

    gsap.to(bgRef.current, {
      duration: .8,
      ease: Power3.easeOut,
      scale: .8
    });
  }

  const hidePreview = (e: MouseEvent<HTMLDivElement>) => {

    gsap.to(bgRef.current, {
      duration: .8,
      ease: Power3.easeOut,
      scale: 0,
      onComplete: () => {
        setBgSettings({ x: e.clientX, y: e.clientY, moving: false, rotationAngle: 0 });
      }
    });

    setBgSettings((bgSettings) => { return {...bgSettings, moving: false} });
  }

  const movePreview = (e: MouseEvent<HTMLDivElement>) => {

    if (e.clientX - bgSettings.x > 0) {
      
      if (bgSettings.rotationAngle + 1 <= 5) {
        bgSettings.rotationAngle += 1;
      }
      

    } else {
      if (bgSettings.rotationAngle - 1 >= -5) {
        bgSettings.rotationAngle -= 1;
      }
      
    }

    gsap.to(bgRef.current, {
      left: e.clientX - 325,
      rotate: `${bgSettings.rotationAngle}deg`,
    });


    setBgSettings((bgSettings) => { return {...bgSettings, moving: true} });
  }

  return (
    <>
      <div onMouseEnter={showPreview} onMouseMove={movePreview} onMouseLeave={hidePreview}  className="work-card">
        <span>{index < 10 ? `0${index}` : index}.</span>
        <div>
          <p className="work-card--title">{title}</p>
          <p className="work-card--description">{description}</p>
          <p className="work-card--annotation">{annotation}</p>
        </div>
        <img 
          ref={bgRef}
          style={{ position: 'absolute', left: bgSettings.x - 325, top: '-50%', transform: 'scale(0)', width: '650px', pointerEvents: 'none' }} 
          src={background} 
          alt={title} 
        /> 
      </div>
    </>
  );
}

export default WorkCard;