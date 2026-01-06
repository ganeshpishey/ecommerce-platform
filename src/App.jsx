import './App.css';
import Navbar from './components/Navbar/navbar';
import Homescreen from './Screen/homescreen/homescreen';
import {Routes, Route} from 'react-router-dom';
import Product from './Screen/Product/product';
import Footer from './components/Footer/footer';
import Cart from './Screen/Cart/cart';
function App() {
  return (
    <div className = "App">
      <Navbar/>
      <Routes>
        <Route path ='/' element = {<Homescreen/>}/>
        <Route path ='/product' element = {<Product/>} />
        <Route path ='/cart' element = {<Cart/>} />
      </Routes>
      <Footer/>
      
    </div>
  )   
};

export default App