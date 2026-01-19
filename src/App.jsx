import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ShopPage from "./components/shops/ShopPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App(){
   return(
    <BrowserRouter>
         <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop/:shopId" element={<ShopPage />} />
            </Routes>
    </BrowserRouter>
     
   )
}