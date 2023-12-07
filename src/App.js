import logo from './logo.svg';
import './App.css';
import ProductList from './Screens/ProductList';
import { Routes, Route } from "react-router-dom"
import ProductDesc from './Components/ProductDesc';
import ProductInfo from './Screens/ProductInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="ProductList" element={<ProductInfo />} />
    </Routes>
  );
}

export default App;
