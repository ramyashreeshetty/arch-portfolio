import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About'; 
import Contact from './views/Contact'; 
import NotFound from './views/NotFound'; 
import Header from './components/Header'; 
import Footer from './components/Footer';
 
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* Define routes for different views */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* Route for handling 404 errors */}
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
 
export default App;