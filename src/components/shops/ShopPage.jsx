import { useNavigate, useParams } from "react-router-dom"
import { shops } from "./ShopData";
export default function ShopPage(){
     const { shopId } = useParams(); // get shop url
     const navigate = useNavigate(); // easy movement without using Link
     const shop = shops.find((s) => s.id === shopId); // get current shop
     const Categories = [ ...new Set(shop.products.map( p => p.category))]; // this will get unique values and remove duplicates
    return(
        <section className="px-2 mt-5">
          <h2 className="text-2xl font-bold">{shop.name}</h2>
          {Categories.map((category) => {
            const products = shop.products
             .filter( p => p.category === category)
             .slice(0, 5);
             return(
                <div key={category}>
                  <div className="flex justify-between mt-2">
                      <h2 className="text-xl font-bold">{category}</h2>
                      <button className="" onClick={() => navigate(`/shop/${shop.id}/category/${category}`)}>
                        View More
                      </button>
                  </div>
                  <div className="flex overflow-x-auto overflow-y-hidden gap-3 mt-5">
                    {products.map((product) => (
                      <div key={product.id} className="overflow-hidden min-w-[200px] bg-white rounded-md">
                        <img src={product.image} className="object-contain w-full h-30 " />
                        <div className="mt-1 p-2">
                            <p className="text-gray-700">
                              {product.description}
                            </p>
                            <p>
                              UGX {product.price}
                            </p>
                            <button className="px-4 py-1.5 rounded-md cursor-pointer bg-blue-700 text-white mt-2">
                              Add to cart
                            </button>
                        </div>
                        
                      </div>
                    ))}
                  </div>
                </div>
                
             )
          })}
        </section>
    )
}