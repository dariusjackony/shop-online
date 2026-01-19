import { useNavigate } from "react-router-dom";
import { shops } from "./ShopData";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
export default function ShopsPage(){
    //this willl let you move to another route without using Link.
    const navigate = useNavigate();
    
    return(
       <section className="px-2 mt-10">
           <div className="grid grid-cols-2 gap-2">
              {shops.map((shop)=>(
                <div key={shop.id} className="overflow-hidden rounded-lg bg-white w-full"
                 onClick={()=> navigate(`/shop/${shop.id}`)}
                >
                  <img src={shop.label} className="object-cover w-full" />
                  <div className="p-3">
                      <h2 className="text-sm font-semibold">{shop.name}</h2>
                        <p className="text-sm overflow-hidden">
                          {shop.products.slice(0,2).map((product) =>(product.name)).join(", ")}
                          {shop.products.length > 2 ? " and more.." : ""}
                        </p>
                        <div className="flex gap-4 mt-2">
                            <p className="text-sm">
                               {shop.products.length} Items
                            </p>
                            <p className="text-sm flex item-center gap-1">
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