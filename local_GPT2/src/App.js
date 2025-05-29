
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Feed from './Feed';
import Footer from './Footer';
import './App.css';
import Config from './Config';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/profile" component={() => <div>Profile Page</div>} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;