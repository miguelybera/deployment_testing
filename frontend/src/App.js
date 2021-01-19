import { BrowserRouter as Router, Route } from 'react-router-dom' 

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/product/ProductDetails'
import AboutCompany from './components/AboutCompany'
import AboutHistory from './components/AboutHistory'
import AboutMissionVision from './components/AboutMissionVision'
import AboutObjectives from './components/AboutObjectives'
import AboutScope from './components/AboutScope'
import Services from './components/Services'
import Login from './components/user/Login'
import Register from './components/user/Register'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
            <Route path="/" component={Home} exact/>
            <Route path={['/our-products', '/our-products/our-products']} component={Products} exact/>
            <Route path="/our-products/:id" component={ProductDetails} exact/>
            <Route path={['/about-company', '/our-products/about-company']} component={AboutCompany} exact/>
            <Route path={['/about-history', '/our-products/about-history']} component={AboutHistory} exact/>
            <Route path={['/about-mission-vision', '/our-products/about-mission-vision']} component={AboutMissionVision} exact/>
            <Route path={['/about-objectives', '/our-products/about-objectives']} component={AboutObjectives} exact/>
            <Route path={['/about-scope-of-activities', '/our-products/about-scope-of-activities']} component={AboutScope} exact/>
            <Route path={['/our-services', '/our-products/our-services']} component={Services} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/register" component={Register} exact/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;