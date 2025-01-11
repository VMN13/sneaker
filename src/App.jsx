import { createContext, useState} from 'react';
import ReactSwitch from 'react-switch';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoPage from './components/NoPage';
import Main from './components/main';
import './App.css';
import './media.css';
import './index.css';
import './congratulations.css';
import About from './components/About';
import Home from './components/Home';
import Sneakers from './components/Sneakers';
import Max from './components/Max';
import Jordan from './components/Jordan';
import Reebook from './components/Reebook';
import Adidas from './components/Adidas';
import Puma from './components/Puma';
import Yezzy from './components/Yeezy';
import Convers from './components/convers';
import Vans from './components/Vans';
import Newbalance from './components/Newbalance';
import Balenciaga from './components/Balenciaga';
import Louisvuitton from './components/Louisvuitton';
import Custom from './components/Custom';
import Credit from './components/credit';
import Congratulations from './components/congratulations';
import Size from './components/size';
import SneakerMain from './components/sneakermainJordan';
import SneakerNike from './components/cardSneaker/SneakerNike';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}>
    <div 
      className="App"
      id={theme}>
      <div className="switchContainer">
      <label
      className='switch'>
        {theme === 'light' ? 'Light' : 'Dark'}
        <ReactSwitch 
          onChange={toggleTheme} 
          checked={theme === 'dark'} />
      </label>
      </div>
    <BrowserRouter>
    <Routes>
      <Route path='/size' element={<Size />} />
      <Route path='/sneakernike' element={<SneakerNike />} />
      <Route path='/sneakermain' element={<SneakerMain />} />
      <Route path='/congratulations' element={<Congratulations />} />
      <Route path='/credit' element={<Credit />} />
      <Route path='/Custom' element={<Custom />} />
      <Route path='/Louisvuitton' element={<Louisvuitton />} />
      <Route path='/Balenciaga' element={<Balenciaga />} />
      <Route path='/Newbalance' element={<Newbalance />} />
      <Route path='/Vans' element={<Vans />} />
      <Route path='/Convers' element={<Convers />} />
      <Route path='/Yeezy' element={<Yezzy />} />
      <Route path='/Puma' element={<Puma />} />
      <Route path='/airmax' element={<Max />} />
      <Route path='/Adidas' element={<Adidas />} />
      <Route path='/Reebook' element={<Reebook />} />
      <Route path='/jordan' element={<Jordan />} />
      <Route path='/sneakers' element={<Sneakers />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} /> 
      <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
    </div>
    </ThemeContext.Provider>
    </>
);
};

export default App;
