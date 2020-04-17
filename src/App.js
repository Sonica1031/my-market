import React, {useState} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import edibles from './components/edibles';
import { Item } from './components/Item';
import { edible } from './data';
import { leaf } from './data';
import leaves from './components/leaves';
import LeafItem from './components/LeafItem';
import { Cart } from './components/cart';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  const [value, setValue] = useState(edible);
  const [leavesValue, setLeavesValue] = useState(leaf);

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Link className="aTag" path to="/">Home</Link>
        <Link className="aTag" path to="/edibles">Edibles</Link>
        <Link className="aTag" path to="/leaves">Leaves</Link>
        <Link className="aTag" path to="/accessories">Accessories</Link>
      </header>
      <div>
        <Route exact path="/edibles" component={edibles} />
        <Route exact path="/edibles/:id" render={props => <Item {...props} item={value}/>}/>
        <Route exact path="/leaves" component={leaves} />
        <Route exact path="/leaves/:id" render={props => <LeafItem {...props} item={leavesValue}/> } />
        <Route exact path="/cart" component={Cart} />
        </div>
    </div>
    </Router>
  );
}

export default App;