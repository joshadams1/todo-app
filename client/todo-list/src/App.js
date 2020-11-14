import './App.scss';
import Login from './components/Login';
import Home from './components/Home';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Create client side routing */}
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/" component={Login} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
