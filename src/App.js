import React from 'react';
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import OurProducts from "./pages/OurProducts";
import GlobalStyle from "./components/GlobalStyle";
import Nav from './components/Nav';
import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/products" exact>
            <OurProducts />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
