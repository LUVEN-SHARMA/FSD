import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product products={products} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Dashboard