import { useParams } from "react-router-dom"
import { shops } from "./ShopData";
export default function Product(){
     const { shopId, product } = useParams();
     const shop = shops.find((s) => String(s.id) === shopId);
     
     const ProductData = shop.products.find( p => String(p.id) === product);
    return(
        <section className="px-2 mt-5">
            <div  className="overflow-hidden min-w-[200px] bg-white rounded-md">
               <img src={ProductData.image} className="object-contain w-full h-30 " />
                <div className="mt-1 p-2">
                    <p className="text-gray-700">
                        {ProductData.description}
                    </p>
                    <p>
                        UGX {ProductData.price}
                    </p>
                    <button className="w-full rounded-md cursor-pointer bg-blue-700 text-white mt-2">
                        Add to cart
                    </button>
                </div>
            </div>
        </section>
    )
}