import gsap, { Power3 } from 'gsap';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import rightArrowIcon from '../assets/right-arrow.svg';
import Button from '../components/Button';
import Curve from '../components/Curve';
import Header from '../components/Header';
import AnimatedContainer from '../components/animations/AnimatedContainer';
import AnimatedTitle from '../components/animations/AnimatedTitle';
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
    <Curve>
      <Header />
      <section id="home">
        <AnimatedTitle label='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />
        <AnimatedContainer>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus quae, sit ad aliquam voluptatum.</p>
          <div className="home-cta">
            <Link to='/works'>
              <Button onMouseEnter={animateArrow} onMouseLeave={resetArrows} label="Let's get started" />
            </Link>
            <Link to='/works'>
              <div onMouseEnter={animateArrow} onMouseLeave={resetArrows} className="home-arrow">
                <img ref={rightArrow} className='home-cta--arrow' src={rightArrowIcon} alt="Go!" />
                <img ref={hiddenArrow} className='home-cta--arrow hidden-arrow' src={rightArrowIcon} alt="Go!" />
              </div>
            </Link>
          </div>
        </AnimatedContainer>
      </section>
    </Curve>
  );
}

export default Home;