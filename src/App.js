import React, {useState} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import edibles from './components/edibles';
import { Item } from './components/Item';
import data from './data';

function App() {
  const [value, setValue] = useState(data)
  return (
    <div className="App">
      <header className="App-header">
        <Link path to="/">Home</Link>
        <Link path to="/edibles">Edibles</Link>
        <Link path to="/leaves">Leaves</Link>
        <Link path to="/bongs">Accessories</Link> 
      </header>
      <div>
        <Route exact path="/edibles" component={edibles} />
        <Route exact path="/edibles/:id" render={props => <Item {...props} item={value}/>}/>
      </div>
    </div>
  );
}

export default App;