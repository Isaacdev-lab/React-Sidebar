import react from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Reports from './pages/Report'
import Products from './pages/Products'
import Team from './pages/Team'
import Messages from './pages/Messages'
import Support from './pages/Support'
    

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/team' component={Team} />
          <Route path='/messages' component={Messages} />
          <Route path='/support' component={Support} />
        </switch>
      </Router> 
    </>
  );
}

export default App;
