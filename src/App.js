import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import { Cart, Default, Details, ProductList, Navbar, Modal } from './components';
import Hoc from './Hoc/Hoc';
import ErrorBoundary from './ErrorBoundaries/ErrorBoundaries';
import  ProductProvider from './Context/Context'


function App() {
 
  return (
    <ErrorBoundary>
      <Hoc>
      <ProductProvider>
        <HashRouter>
            <div className="App">
              <Navbar />
              <Switch>
                <Route path="/" exact component={ProductList} />
                <Route path='/details' component={Details} />
                <Route path='/cart' component={Cart} />
                <Route component={Default} />
              </Switch>
            </div>
            <Modal />
          </HashRouter>
        </ProductProvider>
      </Hoc>
    </ErrorBoundary>
  );
}

export default App;
