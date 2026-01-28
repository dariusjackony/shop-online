import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { shops } from "./ShopData";
export default function CategoryPage(){
    const navigate = useNavigate();
    const { shopId, category } = useParams();
    const shop = shops.find((s) => s.id === shopId);
    // get all products in this category
    const products = shop.products.filter(
        (p) => p.category === category
    );
    return(
       <div className="px-2 mt-5 pb-16">
          <FaArrowLeft onClick={() => navigate(`/shop/${shop.id}`)} className="font-light text-xl" />
          <p className="text-xl font-semibold mt-4">{category}</p>
          <div className="grid grid-cols-2 gap-2 mt-5">
              {products.map((product) => (
                      <div key={product.id} className="overflow-hidden bg-white rounded-md">
                        <img src={product.image} className="object-contain w-full h-30 " />
                        <div className="mt-1 p-2">
                            <p className="text-gray-700">
                              {product.description}
                            </p>
                            <p>
                              UGX {product.price}
                            </p>
                            
                        </div>
                        
                      </div>
                    ))}
          </div>
       </div>
    )
}