
import { useParams } from "react-router-dom";
import { shops } from "./ShopData";
export default function ProductDetails(){
    const { shopId, productId } = useParams();
    const shop = shops.find((s) => String(s.id) === shopId);
    const product = shop?.products.find((p) => String(p.id) === productId);
    return(
        <section className="mt-5 px-2 pb-16">
            <div className="overflow-hidden bg-white rounded-lg">
               <img src={product.image} className="object-cover w-full"/>
               <div className="p-2">
                 <p className="font-bold text-base w-full">{product.name}</p>
                 <p>{product.description}</p>
                 <p className="text-2xl font-extrabold mt-2">UGX {product.price.toLocaleString()}</p>
               </div>
            </div>
             <div className="flex gap-2 mt-3">
                <button className="bg-blue-700 px-4 py-2 rounded-lg text-white w-full">
                    Contact shop
                </button>
                <button className=" bg-gray-200 w-full px-2 py-2 rounded-lg">
                    More from shop
                </button>
             </div>
        </section>
    )
}