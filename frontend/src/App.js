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
import Profile from './components/user/Profile'

import { loadUser } from './actions/userActions'
import store from './store'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Header/>
            <Route path="/" component={Home} exact/>
            <Route path={'/our-products'} component={Products} exact/>
            <Route path="/our-products/:id" component={ProductDetails} exact/>
            <Route path={'/about-company'} component={AboutCompany} exact/>
            <Route path={'/about-history'} component={AboutHistory} exact/>
            <Route path={'/about-mission-vision'} component={AboutMissionVision} exact/>
            <Route path={'/about-objectives'} component={AboutObjectives} exact/>
            <Route path={'/about-scope-of-activities'} component={AboutScope} exact/>
            <Route path={'/our-services'} component={Services} exact/>
            <Route path="/my-profile" component={Profile} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/register" component={Register} exact/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;