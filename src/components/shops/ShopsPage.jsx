import { useNavigate } from "react-router-dom";
import { shops } from "./ShopData";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
export default function ShopsPage(){
    const navigate = useNavigate();
    
    return(
       <section className="px-2 mt-2 lg:px-40">
          <span className="text-2xl font-bold lg:text-3xl">Explore Shops</span>
           <div className="grid grid-cols-2 gap-2 mt-2 lg:grid-cols-4 lg:mt-4">
              {shops.map((shop)=>(
                <div key={shop.id} className="overflow-hidden rounded-lg bg-white w-full"
                 onClick={()=> navigate(`/shop/${shop.id}`)}
                >
                  <div>
                    
                  </div>
                  <img src={shop.label} className="object-cover w-full h-40 lg:h-50 lg:object-contain" />
                  <div className="p-3">
                      <h2 className="text-sm font-semibold lg:text-base">{shop.name}</h2>
                        <p className="text-sm overflow-hidden">
                          {shop.products.slice(0,2).map((product) =>(product.name)).join(", ")}
                          {shop.products.length > 2 ? " and more.." : ""}
                        </p>
                        <div className="flex gap-2 mt-2 lg:gap-10">
                            <p className="text-sm flex">
                               <span className="hidden lg:block">Over</span> {shop.products.length} Items
                            </p>
                            <p className="text-sm flex items-center gap-1 ">
                              Delivery{shop.delivery ? <FaCheck className="text-blue-600 mt-0.5 " /> : <FaTimes className="text-red-600 mt-0.5" />}
                            </p>
                        </div>
                  </div>
                </div>
              ))}
           </div>
       </section>
    )
}