import React, { Suspense } from 'react'; 
import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import { Routes, Route } from 'react-router-dom';

const Homescreen = React.lazy(() => import('./Screen/homescreen/homescreen'));
const Product = React.lazy(() => import('./Screen/Product/product'));
const Cart = React.lazy(() => import('./Screen/Cart/cart'));

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* 4. Wrap Routes in Suspense to handle the loading state */}
      <Suspense fallback={<div style={{textAlign: 'center', marginTop: '50px'}}>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Homescreen />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
