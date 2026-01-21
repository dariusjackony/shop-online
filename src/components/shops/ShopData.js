import Jamper from "../../assets/1.jpg";
import Cap from "../../assets/2.jpg";
import Jersey from "../../assets/4.webp";
import Shoes from "../../assets/3.jpg";

export const shops = [
  {
    id: "1",
    name: "Kampala Trends",
    label: Jamper,
    delivery: true,
    products: [
      {
        id: 1,
        name: "Red Jumper",
        category: "jumpers",
        image: Jamper,
        description: "Warm and cozy red jumper, perfect for chilly evenings in Kampala.",
        price: 95_000 // UGX
      },
      {
        id: 2,
        name: "Blue Jumper",
        category: "jumpers",
        image: Jersey,
        description: "Soft cotton blue jumper, comfortable for everyday wear.",
        price: 80_000
      },
      {
        id: 3,
        name: "Blue Jumper",
        category: "jumpers",
        image: Jersey,
        description: "Soft cotton blue jumper, comfortable for everyday wear.",
        price: 80_000
      },
      {
        id: 4,
        name: "Blue Jumper",
        category: "jumpers",
        image: Jersey,
        description: "Soft cotton blue jumper, comfortable for everyday wear.",
        price: 80_000
      },
      {
        id: 5,
        name: "Black Cap",
        category: "caps",
        image: Cap,
        description: "Classic black cap to match any outfit, lightweight and durable.",
        price: 35_000
      }
    ]
  },
  {
    id: "2",
    name: "Uganda Streetwear",
    label: Cap,
    delivery: false,
    products: [
      {
        id: 1,
        name: "Green Hoodie",
        category: "hoodies",
        image: Jamper,
        description: "Trendy green hoodie with adjustable hood, suitable for cooler days.",
        price: 120_000
      },
      {
        id: 2,
        name: "Brown Cap",
        category: "caps",
        image: Cap,
        description: "Casual brown cap perfect for sunny Kampala streets.",
        price: 30_000
      },
      {
        id: 3,
        name: "Golden Sneakers",
        category: "shoes",
        image: Shoes,
        description: "Stylish sneakers designed for comfort and long walks.",
        price: 250_000
      }
    ]
  },
  {
    id: "3",
    name: "Mukono Mall",
    label: Jersey,
    delivery: true,
    products: [
      {
        id: 1,
        name: "Blue Hoodie",
        category: "hoodies",
        image: Jersey,
        description: "Soft blue hoodie made from premium cotton for daily wear.",
        price: 110_000
      },
      {
        id: 2,
        name: "Leather Shoes",
        category: "shoes",
        image: Shoes,
        description: "Durable leather shoes for work or formal events.",
        price: 300_000
      },
      {
        id: 3,
        name: "Red Cap",
        category: "caps",
        image: Cap,
        description: "Vibrant red cap to add color to your outfit.",
        price: 40_000
      }
    ]
  },
  {
    id: "4",
    name: "Jinja Fashions",
    label: Shoes,
    delivery: true,
    products: [
      {
        id: 1,
        name: "Silver Bracelet",
        category: "jewelry",
        image: Shoes,
        description: "Elegant silver bracelet handcrafted for daily wear.",
        price: 75_000
      },
      {
        id: 2,
        name: "Leather Belt",
        category: "accessories",
        image: Shoes,
        description: "Premium leather belt with strong buckle, perfect for casual and formal wear.",
        price: 60_000
      },
      {
        id: 3,
        name: "Yellow Jumper",
        category: "jumpers",
        image: Jamper,
        description: "Bright yellow jumper to lift your mood and style.",
        price: 85_000
      }
    ]
  },
  {
    id: "5",
    name: "Gulu Outfits",
    label: Jersey,
    delivery: false,
    products: [
      {
        id: 1,
        name: "Orange Hoodie",
        category: "hoodies",
        image: Jersey,
        description: "Comfortable orange hoodie, lightweight yet warm.",
        price: 100_000
      },
      {
        id: 2,
        name: "Classic Cap",
        category: "caps",
        image: Cap,
        description: "Simple classic cap suitable for all occasions.",
        price: 32_000
      },
      {
        id: 3,
        name: "Brown Sneakers",
        category: "shoes",
        image: Shoes,
        description: "Brown sneakers for everyday comfort and style.",
        price: 220_000
      }
    ]
  }
];
