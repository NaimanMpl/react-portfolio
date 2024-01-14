import { AnimatePresence } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import WorkPage from './pages/WorkPage';
import Works from './pages/Works';
import './styles/App.scss';

const App = () => {

  const location = useLocation();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <div id="app">
      <ThemeProvider>
        <Cursor />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home/>} />
            <Route path='/works' element={<Works />}/>
            <Route path='/works/evyl' element={
              <WorkPage 
                title='Evyl' 
                subtitle='Go for an Adventure'
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, dignissimos.'
                date='May 2023'
                languages={['Java']}
                location='CY Cergy Paris Université'
              />
            }/>
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App
