import { AnimatePresence } from "framer-motion";
import { ComponentType } from "react";

const PageTransition = (Component: ComponentType, route: string) => {
  return () => (
    <>
      <Component key={route} />
    </>
  );
}

export default PageTransition;