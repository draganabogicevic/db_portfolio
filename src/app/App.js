import HomePage from './pages/HomePage'
import Header from '../components/Header.jsx'
import Projects from './pages/Projects'
import About from './pages/AboutMe'
import Contact from './pages/Contact'
import Footer from '../components/Footer'
import { Routes, Route } from 'react-router-dom'
import { useColorModeValue, Box } from '@chakra-ui/react'
import Res from '../res/Res';
import './App.css';

const App = () => {

  const bgUrl = useColorModeValue(Res.images.bgLight, Res.images.bgDark)
  return (
    <Box>
      <Box className="App" bgImage={bgUrl} bgRepeat='no-repeat' bgSize='cover'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>  
  );
}

export default App;

