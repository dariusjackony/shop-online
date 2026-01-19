import Jamper from "../../assets/1.jpg";
import Cap from "../../assets/2.jpg";
import Jersey from "../../assets/4.webp";
import Shoes from "../../assets/3.jpg";

export const shops = [
  {
    id: "1",
    name: "ZERO FASHIONS",
    label: Jamper,
    delivery: true,
    products: [
      { id: 1, name: "Red Jumper", category: "jumpers" },
      { id: 2, name: "Blue Jumper", category: "jumpers" },
      { id: 3, name: "Green Hoodie", category: "hoodies" },
      { id: 4, name: "Black Cap", category: "caps" },
      { id: 5, name: "Gold Watch", category: "watches" },
      { id: 6, name: "Silver Bracelet", category: "jewelry" },
      { id: 7, name: "Leather Belt", category: "accessories" },
    ],
  },
  {
    id: "2",
    name: "FASHION HUB",
    label: Cap,
    delivery: false,
    products: [
      { id: 1, name: "White Sneakers", category: "shoes" },
      { id: 2, name: "Black Sneakers", category: "shoes" },
      { id: 3, name: "Red Cap", category: "caps" },
      { id: 4, name: "Blue T-shirt", category: "t-shirts" },
      { id: 5, name: "Grey Hoodie", category: "hoodies" },
      { id: 6, name: "Denim Jacket", category: "jackets" },
      { id: 7, name: "Black Jeans", category: "pants" },
      { id: 8, name: "White Socks", category: "accessories" },
      { id: 9, name: "Sport Watch", category: "watches" },
      { id: 10, name: "Leather Wallet", category: "accessories" },
    ],
  },
  {
    id: "3",
    name: "HAM JERSEYS",
    label: Jersey,
    delivery: false,
    products: [
      { id: 1, name: "Red Jersey", category: "jerseys" },
      { id: 2, name: "Blue Jersey", category: "jerseys" },
      { id: 3, name: "Green Jersey", category: "jerseys" },
      { id: 4, name: "Yellow Jersey", category: "jerseys" },
      { id: 5, name: "Black Shorts", category: "shorts" },
      { id: 6, name: "White Socks", category: "accessories" },
      { id: 7, name: "Team Scarf", category: "accessories" },
      { id: 8, name: "Training Gloves", category: "sports" },
    ],
  },
  {
    id: "4",
    name: "KATO SHOES",
    label: Shoes,
    delivery: true,
    products: [
      { id: 1, name: "Running Shoes", category: "shoes" },
      { id: 2, name: "Casual Shoes", category: "shoes" },
      { id: 3, name: "Formal Shoes", category: "shoes" },
      { id: 4, name: "Boots", category: "shoes" },
      { id: 5, name: "Sandals", category: "shoes" },
      { id: 6, name: "Slippers", category: "shoes" },
      { id: 7, name: "Sneakers", category: "shoes" },
      { id: 8, name: "Sport Shoes", category: "shoes" },
      { id: 9, name: "Leather Loafers", category: "shoes" },
    ],
  },
];
