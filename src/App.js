import React, {useState} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Edibles from './components/Edibles';
import { Item } from './components/Item';
import { edible } from './data';
import { leaf } from './data';
import Leaves from './components/Leaves';
import LeafItem from './components/LeafItem';
import { Cart } from './components/Cart';
import {BrowserRouter as Router} from 'react-router-dom';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [value, setValue] = useState(edible);
  const [leavesValue, setLeavesValue] = useState(leaf);
  const [darkMode, setDarkMode] = useDarkMode(false)

  let darkmode = document.getElementsByClassName("darkmode");
  const toggleButton = () => {
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
    <Router>
    <div className="App">
      <header className="App-header">
        <Link className="aTag" path to="/">Home</Link>
        <Link className="aTag" path to="/edibles">Edibles</Link>
        <Link className="aTag" path to="/leaves">Leaves</Link>
        <Link className="aTag" path to="/accessories">Accessories</Link>
      </header>
      <div className="dark-mode__toggle">
        <div
          onClick={changing}
          onChange={toggleButton}
          className={"darkmode"}
        />
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/edibles" component={Edibles} />
        <Route exact path="/edibles/:id" render={props => <Item {...props} item={value} darkmode={darkMode}/>}/>
        <Route exact path="/leaves" component={Leaves} />
        <Route exact path="/leaves/:id" render={props => <LeafItem {...props} item={leavesValue} darkmode={darkMode}/> } />
        <Route exact path="/cart" component={Cart} />
        </div>
    </div>
    </Router>
  );
}

export default App;