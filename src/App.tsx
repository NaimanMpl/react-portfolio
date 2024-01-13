import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Home from './pages/Home';
import Works from './pages/Works';
import './styles/App.scss';

const App = () => {

  return (
    <div id="app">
      <Router>
        <Header />
        <Cursor />
        <ThemeProvider>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/works' element={<Works />}/>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App
