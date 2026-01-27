import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ShopPage from "./components/shops/ShopPage";
import ShopsPage from "./components/shops/ShopsPage";
import CategoryPage from "./components/shops/CategoryPage";
import Product  from "./components/shops/Product";
import ProductsPage from "./components/shops/ProductsPage";
import Tabs from "./ui/tabs/Tabs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App(){
   return(
         <BrowserRouter>
            <Navbar />
               <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/shop" element={<ShopsPage />} />
               <Route path="/shop/:shopId" element={<ShopPage />} />
               <Route path="/shop/:shopId/category/:category" element={<CategoryPage />} />
               <Route path="/shop/:shopId/category/:category/product/:product" element={<Product />} />
               <Route path="/products" element={<ProductsPage />} />
               </Routes>
            <Tabs />
         </BrowserRouter>
   )
}