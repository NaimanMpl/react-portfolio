import { Variants, motion } from "framer-motion";
import { ReactNode } from "react";
import { AnimationTiming, anim } from "../../utils/anim";

interface AnimatedContainerProps {
  children: ReactNode
}

const AnimatedContainer = ({ children }: AnimatedContainerProps) => {

  const containerAnimation: Variants = {
    initial: {
      y: 200
    },
    enter: {
      y: 0,
      transition: AnimationTiming.easeInOutQuad(.3, .75)
    }
  }

  return (
    <motion.div {...anim(containerAnimation)} className='container'>
      {children}
    </motion.div>
  );
}

export default AnimatedContainer;