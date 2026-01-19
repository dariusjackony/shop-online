import { useNavigate, useParams } from "react-router-dom"
import { shops } from "./ShopData";
export default function ShopPage(){
     const { shopId } = useParams(); // get shop url
     const navigate = useNavigate(); // easy movement without using Link
     const shop = shops.find((s) => s.id === shopId); // get current shop
     const Categories = [ ...new Set(shop.products.map( p => p.category))]; // this will get unique values and remove duplicates
    return(
        <section>
          <h2>{shop.name}</h2>
          {Categories.map((category) => {
            const products = shop.products
             .filter( p => p.category === category)
             .slice(0, 2);
             return(
                <div key={category}>
                  <h2>{category}</h2>
                </div>
             )
          })}
        </section>
    )
}