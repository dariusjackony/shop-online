import { useNavigate } from "react-router-dom";
import { shops } from "./ShopData";
import { FaStore } from "react-icons/fa";
export default function ProductsPage(){
    const navigate = useNavigate();
    const allProducts = shops.flatMap(shop => shop.products.map(product =>({
        ...product,
        shopName: shop.name,
        shopId: shop.id,
        shopDelivery: shop.delivery
    })))
    return(
        <section className="px-2 mt-2">
            <span className="text-2xl font-bold">Products for You</span>
         <div className="grid grid-cols-2 gap-1 mt-2">
            {allProducts.map(product => (
              <div key={`${product.shopId}-${product.id}`} 
               onClick={() => navigate(`/product/${product.shopId}/${product.id}`)}
              className="overflow-hidden min-w-[150px] bg-white rounded-lg">
                 <img src={product.image} className="object-contain w-full h-40 " />
                 <div className="p-2">
                     <p className="font-bold text-base w-full">{product.name}</p>
                     <p className="font-semibold text-sm">UGX {product.price.toLocaleString()}</p>
                     <p className="flex gap-1 truncate w-full"><FaStore className="text-gray-500 mt-0.5"/>{product.shopName}</p>
                 </div>
              </div>
            ))}
         </div>
        </section>
    )
}