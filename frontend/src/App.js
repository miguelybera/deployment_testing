import { BrowserRouter as Router, Route } from 'react-router-dom' 

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/product/ProductDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
            <Route path="/" component={Home} exact/>
            <Route path={['/our-products', '/our-products/our-products']} component={Products} exact/>
            <Route path="/our-products/:id" component={ProductDetails} exact/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;