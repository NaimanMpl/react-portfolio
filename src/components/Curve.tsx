import { AnimationProps, Variants, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/Curve.scss';

interface CurveProps {
  children: ReactNode
}

interface CurveSVGProps {
  width: number,
  height: number
}

const anim = (variants: Variants): AnimationProps => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants
  }
}

const Curve = ({ children }: CurveProps) => {

  const location = useLocation();

  const routes = new Map<string, string>([
    ['/', 'Home'],
    ['/works', 'Works'],
  ])

  const [ dimensions, setDimensions ] = useState({
    height: 0,
    width: 0
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    resize();

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  const textAnimation: Variants = {
    initial: {
      opacity: 1
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: {
        duration: .75,
        delay: .3,
        ease: [0.76, 0, 0.24, 1]
      },
      transitionEnd: {
        top: '47.5%'
      }
    },
    exit: {
      opacity: 1,
      top: '40%',
      transition: {
        duration: .75,
        delay: .3,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  return (
    <div className="page-container curve">
      <motion.p {...anim(textAnimation)} className="route">Works</motion.p>
      <div style={{opacity: dimensions.width > 0 ? 0 : 1}} className="background">

      </div>
      {dimensions.width > 0 && <CurveSVG {...dimensions} />}
      {children}
    </div>
  );
}


const CurveSVG = ({ width, height }: CurveSVGProps) => {
  
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 300
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 300
  `;

  const curve: Variants = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: {
        duration: .75,
        delay: .3,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    exit: {
      d: initialPath
    }
  }

  const slideAnimation: Variants = {
    initial: {
      top: '-300px'
    },
    enter: {
      top: '-100vh',
      transition: {
        duration: .75,
        delay: .3,
        ease: [0.76, 0, 0.24, 1]
      },
      transitionEnd: {
        top: '100vh'
      }
    },
    exit: {
      top: '-300px',
      transition: {
        duration: .75,
        delay: .3,
        ease: [0.76, 0, 0.24, 1]
      },
    }
  }
  
  return (
    <motion.svg {...anim(slideAnimation)}>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
}

export default Curve;