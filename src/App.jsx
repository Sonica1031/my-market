import {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route, BrowserRouter, NavLink} from 'react-router-dom';
import Home from './components/Home';
import Bows from './components/Bows';
import Item from './components/Item';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import useDarkMode from './hooks/useDarkMode';
import Axios from 'axios';

function App() {
  const [value, setValue] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode(false);


  useEffect(()=>{
    Axios
      .get('https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01')
      .then(res => {
        setValue(res.data);
      })
      .catch(err =>{
        console.log(err);
      })
  },[])



  let darkmode = document.getElementsByClassName("darkmode");
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    }
  const changing = () =>{
    if(darkMode === false){
      darkmode[0].classList.add("darkmargin")

      setDarkMode(true)
    }else{
      darkmode[0].classList.remove("darkmargin")
      setDarkMode(false)
    }
  }

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <nav className="App-header">
            <NavLink to="/" className="aTag">
              Home
            </NavLink>
            <NavLink to="/products" className="aTag">
              Products
            </NavLink>
            <NavLink to="/login" className ="aTag">
              Login
            </NavLink>
            <NavLink to="/register" className="aTag">
              Register
            </NavLink>
          </nav>
      </header>
      <div className="dark-mode__toggle">
        <div
          onClick={changing}
          onChange={toggleDarkMode}
          className={"darkmode"}
        />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Home darkMode={darkMode}/>} />
          <Route exact path="/products" element={<Bows darkMode={darkMode}/>} />
          <Route path="/products/:id" element={<Item bowItems={value} darkMode={darkMode} />} />
          <Route path="/carts/:id" element={<Cart darkMode={darkMode}/>} />
          <Route path="/login" element={<Login darkMode={darkMode} />} />
          <Route path="/register" element={<Register darkMode={darkMode} />} />       
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;