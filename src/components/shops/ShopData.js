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
      { id: 3, name: "Black Cap", category: "caps" },
      { id: 4, name: "Gold Watch", category: "watches" },
    ],
  },
  {
    id: "2",
    name: "FASHION HUB",
    label: Cap,
    delivery: false,
    products: [
      { id: 1, name: "Red Jumper", category: "jumpers" },
      { id: 2, name: "Blue Jumper", category: "jumpers" },
      { id: 3, name: "Black Cap", category: "caps" },
      { id: 4, name: "Gold Watch", category: "watches" },
    ],
  },
  {
    id: "3",
    name: "HAM JERSEYS",
    label: Jersey,
    delivery: false,
    products: [
      { id: 1, name: "Red Jumper", category: "jumpers" },
      { id: 2, name: "Blue Jumper", category: "jumpers" },
      { id: 3, name: "Black Cap", category: "caps" },
      { id: 4, name: "Gold Watch", category: "watches" },
    ],
  },
  {
    id: "4",
    name: "KATO SHOES",
    label: Shoes,
    delivery: true,
    products: [
      { id: 1, name: "Red Jumper", category: "jumpers" },
      { id: 2, name: "Blue Jumper", category: "jumpers" },
      { id: 3, name: "Black Cap", category: "caps" },
      { id: 4, name: "Gold Watch", category: "watches" },
    ],
  },
  
];
