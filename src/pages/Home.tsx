import gsap, { Power3 } from 'gsap';
import { useRef } from 'react';
import rightArrowIcon from '../assets/right-arrow.svg';
import Button from '../components/Button';
import '../styles/Home.scss';

const Home = () => {

  const rightArrow = useRef<HTMLImageElement>(null);
  const hiddenArrow = useRef<HTMLImageElement>(null);

  const animateArrow = () => {
    
    gsap.to(rightArrow.current, {
      duration: 0.1,
      ease: Power3.easeInOut,
      xPercent: 110
    });
    
    gsap.to(hiddenArrow.current, {
      duration: 0.1,
      ease: Power3.easeInOut,
      rotate: 0,
      xPercent: -50
    });
  }

  const resetArrows = () => {
    gsap.to(rightArrow.current, {
      duration: 0.1,
      ease: Power3.easeInOut,
      xPercent: -50
    });
    
    gsap.to(hiddenArrow.current, { 
      duration: 0.1,
      ease: Power3.easeInOut,
      rotate: '-90deg',
      xPercent: -200
    });
  }

  return (
    <section id="home">
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus quae, sit ad aliquam voluptatum.</p>
      <div className="home-cta">
        <a href="/works">
          <Button onMouseEnter={animateArrow} onMouseLeave={resetArrows} label="Let's get started" />
        </a>
        <a href="/works">
          <div onMouseEnter={animateArrow} onMouseLeave={resetArrows} className="home-arrow">
            <img ref={rightArrow} className='home-cta--arrow' src={rightArrowIcon} alt="Go!" />
            <img ref={hiddenArrow} className='home-cta--arrow hidden-arrow' src={rightArrowIcon} alt="Go!" />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Home;