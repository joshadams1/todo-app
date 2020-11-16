import './App.scss';

import Home from './components/Home';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Create client side routing */}
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
