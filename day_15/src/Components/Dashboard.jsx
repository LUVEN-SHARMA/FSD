import { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const loadProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load products (${response.status})`);
        }

        const data = await response.json();
        if (!Array.isArray(data.products)) {
          throw new Error('The product response was not in the expected format.');
        }

        setProducts(data.products);
      } catch (loadError) {
        if (!controller.signal.aborted) {
          setError(loadError instanceof Error ? loadError.message : 'Failed to load products.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    void loadProducts();

    return () => controller.abort();
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route
          path='product'
          element={
            isLoading ? <p>Loading products...</p> :
              error ? <p role='alert'>{error}</p> :
                <Product products={products} />
          }
        />
        <Route path='cart' element={<Cart />} />
        <Route path='contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default Dashboard;