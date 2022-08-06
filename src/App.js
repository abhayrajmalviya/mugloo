// import './App.css';

import { useState } from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Paths from './components/Paths'

function App() {

  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme ={darkTheme} setDarkTheme={setDarkTheme}/>
        <Paths/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
