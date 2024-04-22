import { motion } from "framer-motion";
import React, { useState } from "react";
import Test from "./test";

const tabs = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

const days = () => {
  const [selected, setSelected] = useState(tabs[0]);

  const foodItems = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
    "Tacos",
    "Steak",
    "Chicken",
    "Salad",
    "Sandwich",
    "Burrito",
    "Fries",
    "Ice Cream",
    "Cake",
    "Ramen",
    "Curry",
    "Shrimp",
    "Lasagna",
    "Hot Dog",
    "Donuts",
    "Waffles",
    "Pancakes",
    "Bagel",
    "Sausage",
    "Popcorn",
    "Nachos",
    "Cheese",
    "Rice",
    "Noodles",
    "Soup",
    "Muffin",
    "Croissant",
    "Cupcake",
    "Cookie",
    "Brownie",
    "Tiramisu",
    "Cannoli",
    "Milkshake",
    "Smoothie",
    "Pudding",
    "Tart",
    "Quiche",
    "Crepe",
    "Churros",
    "Dumplings",
    "Pretzel",
    "Falafel",
    "Hummus",
    "Guacamole",
    "Fajitas",
    "Paella",
    "Tortilla",
    "Empanadas",
    "Gyros",
    "Kebab",
    "Baklava",
    "Macarons",
    "Fondue",
    "Caviar",
    "Escargot",
    "Crepes",
    "Croissants",
    "Baguette",
    "French Toast",
    "Cinnamon Roll",
    "Frittata",
    "Eggs Benedict",
    "Omelette",
    "Eclair",
    "Macaroons",
    "Risotto",
    "Gnocchi",
    "Calzone",
    "Bruschetta",
    "Caprese Salad",
    "Panzanella",
    "Caesar Salad",
    "Greek Salad",
    "Cobb Salad",
    "Nicoise Salad",
    "Tabbouleh",
    "Caprese",
    "Ratatouille",
    "Moussaka",
    "Baba Ganoush",
    "Tabbouleh",
    "Fattoush",
    "Spanakopita",
    "Baklava",
    "Baba Ganoush",
    "Hummus",
    "Falafel",
    "Shawarma",
    "Biryani",
    "Samosa",
    "Pakora",
    "Chaat",
    "Jalebi",
    "Gulab Jamun",
    "Dosa",
    "Idli",
    "Vada",
    "Bhel Puri",
    "Pav Bhaji",
    "Chole Bhature",
    "Rasgulla",
    "Kheer",
    "Pho",
    "Spring Rolls",
    "Banana Bread",
    "Cinnamon Rolls",
    "Pretzels",
    "Bagels",
    "Cranberry Sauce",
    "Honey",
    "Maple Syrup",
    "Granola",
    "Chili",
    "Potato Chips",
    "Tofu",
    "Soy Milk",
    "Almond Milk",
    "Coconut Milk",
    "Cashew Milk",
    "Oat Milk",
    "Beef Jerky",
    "Trail Mix",
    "Granola Bars",
    "Cereal",
    "Pop Tarts",
    "Granola",
    "Yogurt",
    "Cheese",
    "Milk",
    "Butter",
    "Eggs",
    "Bacon",
    "Sausage",
    "Ham",
    "Turkey",
    "Chicken Breast",
    "Ground Beef",
    "Salmon",
    "Tilapia",
    "Shrimp",
    "Crab",
    "Lobster",
    "Scallops",
    "Tuna",
    "Cod",
    "Trout",
    "Mackerel",
    "Anchovies",
    "Sardines",
    "Octopus",
    "Squid",
    "Clams",
    "Mussels",
    "Oysters",
    "Crab Cakes",
    "Fish Sticks",
    "Fish Tacos",
    "Fish and Chips",
    "Seafood Paella",
    "Seafood Risotto",
    "Seafood Chowder",
    "Seafood Pasta",
    "Seafood Salad",
    "Ceviche",
    "Shrimp Scampi",
    "Lobster Bisque",
    "Clam Chowder",
    "Oyster Rockefeller",
    "Crab Rangoon",
    "Sushi Rolls",
    "Sashimi",
    "Nigiri",
    "California Roll",
    "Spicy Tuna Roll",
    "Dragon Roll",
    "Rainbow Roll",
    "Tempura Roll",
    "Philadelphia Roll",
    "Vegetable Roll",
    "Avocado Roll",
    "Cucumber Roll",
    "Salmon Roll",
    "Tuna Roll",
    "Eel Roll",
    "Spider Roll",
    "Volcano Roll",
    "Alaska Roll",
    "Boston Roll",
    "Spider Roll",
    "Futo Maki",
    "Uramaki",
    "Hosomaki",
    "Temaki",
    "Onigiri",
    "Miso Soup",
    "Edamame",
    "Gyoza",
    "Tempura",
    "Teriyaki Chicken",
    "Teriyaki Beef",
    "Yakitori",
    "Sukiyaki",
    "Okonomiyaki",
    "Tonkatsu",
    "Katsu Don",
    "Ramen Noodles",
    "Udon Noodles",
    "Soba Noodles",
    "Yakisoba",
    "Sake",
    "Shochu",
    "Suntory Whisky",
    "Sapporo Beer",
    "Asahi Beer",
    "Kirin Beer",
    "Plum Wine",
    "Green Tea",
    "Matcha",
    "Sushi Rice",
    "Wasabi",
    "Pickled Ginger",
    "Seaweed Salad",
    "Cucumber Salad"
  ]

  const [showItem, setShowItems] = React.useState([]);
  let toRun = 3;
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  React.useEffect(() => {
    for (let i = 0; i < 2; i++) {
      const index = getRandomNumber(0, foodItems.length - 1);
      setShowItems(prev => [...prev, foodItems[index]])
    }
  },[])

  console.log(showItem);


  return (
    <div className="flex items-center flex-col gap-4">
      <div className="p-4 bg-[#12372a] rounded-lg flex items-center justify-center gap-2">
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>
      
        {selected === "Day 1" ? <div className="flex gap-8 flex-wrap justify-center">
          {showItem.map((item, index) => {
            return <Test name={item}/>
          })}
        </div> : selected === "Day 2" ? <div></div> : <div></div>}
      </div>
  );
};

const Chip = ({ text, selected, setSelected, }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${selected
        ? ""
        : "hover:bg-[#ffffff30]"
        } text-white text-base px-4 py-1 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 1 }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-green-600 to-green-800 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default days;