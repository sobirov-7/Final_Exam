import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Sign from './components/Sign'
import NotFound from './components/NotFound'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Account from './components/Account'
import ProductDetails from './components/ProductDetails'



function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element='<Home/>'/>
        <Route path='/contact' element='<Contact/>'/>
        <Route path='/about' element='<About/>'/>
        <Route path='/sign' element='<Sign/>'/>
        <Route path='/*' element='<NotFound/>'/>
        <Route path='/wishlist' element='<Wishlist/>'/>
        <Route path='/cart' element='<Cart/>'/>
        <Route path='/checkout' element='<Checkout/>'/>
        <Route path='/account' element='<Account/>'/>
        <Route path='/cart/:id' element='<ProductDetails/>'/>
      </Routes>
    </>
  )
}

export default App
