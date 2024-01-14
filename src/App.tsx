import { AnimatePresence } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import Works from './pages/Works';
import './styles/App.scss';

const App = () => {

  const location = useLocation();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <ThemeProvider>
        <Cursor />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home/>} />
            <Route path='/works' element={<Works />}/>
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App
