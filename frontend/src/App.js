import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { useSelector } from 'react-redux'

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
import Contact from './components/Contact'
import ConfirmationPage from './components/ConfirmationPage'

import UpdateHome from './components/admin/UpdateHome'
import UpdateAbout from './components/admin/UpdateAbout'

import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'
import EmailSent from './components/EmailSent'

import Dashboard from './components/admin/Dashboard'
import Settings from './components/admin/Settings'
import ListInquiries from './components/admin/ListInquiries'
import ListQuotations from './components/admin/ListQuotations'
import ListOthers from './components/admin/ListOthers'
import ListArchives from './components/admin/ListArchives'
import ListTrash from './components/admin/ListTrash'
import ListAbout from './components/admin/ListAbout'
import ProductsList from './components/admin/ProductsList'
import NewProduct from './components/admin/NewProduct'
import UpdateProduct from './components/admin/UpdateProduct'
import UpdateInquiry from './components/admin/UpdateInquiry'

import ProtectedRoute from './components/route/ProtectedRoute'
import { loadUser } from './actions/userActions'
import store from './store'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  const { loading, isAuthenticated, user } = useSelector(state => state.auth);

  return (
    <Router>
        <div className="App">
            <Header/>
                <Route path='/' component={Home} exact/>

                <Route path='/our-products' component={Products} exact/>
                <Route path='/our-products/:id' component={ProductDetails} exact/>

                <Route path='/about-company' component={AboutCompany} exact/>
                <Route path='/about-history' component={AboutHistory} exact/>
                <Route path='/about-mission-vision' component={AboutMissionVision} exact/>
                <Route path='/about-objectives' component={AboutObjectives} exact/>
                <Route path='/about-scope-of-activities' component={AboutScope} exact/>
                <Route path='/our-services' component={Services} exact/>
                <Route path='/contact-us' component={Contact} exact/>
                <Route path='/confirmation' component={ConfirmationPage} exact/>

                <ProtectedRoute path="/me" component={Profile} exact/>
                <ProtectedRoute path="/me/edit-profile" component={UpdateProfile} exact/>
                <ProtectedRoute path="/password/update" component={UpdatePassword} exact/>

                <Route path="/password/forgot" component={ForgotPassword} exact/>
                <Route path="/password/reset/:token" component={NewPassword} exact/>
                <Route path='/email-sent' component={EmailSent} exact/>

                <Route path='/login' component={Login} exact/>
                <Route path='/register' component={Register} exact/>

                <ProtectedRoute path="/admin/dashboard" isAdmin={true} component={Dashboard} exact/>
                <ProtectedRoute path="/admin/settings" isAdmin={true} component={Settings} exact/>
                <ProtectedRoute path="/admin/inquiries" isAdmin={true} component={ListInquiries} exact/>
                <ProtectedRoute path="/admin/quotations" isAdmin={true} component={ListQuotations} exact/>
                <ProtectedRoute path="/admin/others" isAdmin={true} component={ListOthers} exact/>
                <ProtectedRoute path="/admin/archives" isAdmin={true} component={ListArchives} exact/>
                <ProtectedRoute path="/admin/trash" isAdmin={true} component={ListTrash} exact/>
                
                <ProtectedRoute path="/admin/about" isAdmin={true} component={ListAbout} exact/>
                <ProtectedRoute path="/admin/about/:id" isAdmin={true} component={UpdateAbout} exact/>
                <ProtectedRoute path="/admin/update-home" isAdmin={true} component={UpdateHome} exact/>
                
                <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} exact/>
                <ProtectedRoute path="/admin/newProduct" isAdmin={true} component={NewProduct} exact/>
                <ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact/>
                <ProtectedRoute path="/admin/inquiry/:id" isAdmin={true} component={UpdateInquiry} exact/>
                
                {!loading && (!isAuthenticated || user.role !== 'admin') && (
                  <Footer/>
                )}
        </div>
    </Router>
  );
}

export default App;