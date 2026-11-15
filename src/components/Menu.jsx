import React from "react";
import { useState } from "react";
import "./Menu.css";
import burger from "../assets/images/burger.webp";
import dessert from "../assets/images/dessert.jpg";
import drink from "../assets/images/drink.jpg";
import pasta from "../assets/images/pasta.webp";
import salad from "../assets/images/salad.jpg";
import pizza from "../assets/images/pizza.webp";
const Menu = ({myOrder,setmyOrders}) => {
  const [dishes] = useState( [
  {
    id: 1,
    name: "Italian Pizza",
    description: "Fresh cheese, tomato sauce and basil.",
    price: 12,
    category: "Pizza",
    image: pizza
  },
  {
    id: 2,
    name: "Classic Burger",
    description: "Juicy beef burger with fresh vegetables.",
    price: 10,
    category: "Main Dishes",
    image:burger
  },
  {
    id: 3,
    name: "Creamy Pasta",
    description: "Delicious pasta with creamy white sauce.",
    price: 14,
    category: "Main Dishes",
    image: pasta
  },
  {
    id: "4",
    name: "Fresh Salad",
    description: "Fresh vegetables with special dressing.",
    price: 8,
    category: "Starters",
    image: salad
  },
  {
    id:5,
    name: "Chocolate Cake",
    description: "Delicious chocolate cake.",
    price: 7,
    category: "Desserts",
    image: dessert
  },
  {
    id: 6,
    name: "Fresh Juice",
    description: "Fresh natural orange juice.",
    price: 5,
    category: "Drinks",
    image: drink
  }]);
 

  const addToOrder = (dish) => {
    setmyOrders([...myOrder,{...dish,quantity:1} ]);
     alert(dish.name + " added to your order!");
  };

  return (
    
    <div className="menu-page">

      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Discover our delicious dishes</p>
      </div>

      <div className="menu-categories">
        <button>All</button>
        <button>Main Dishes</button>
        <button>Pizza</button>
        <button>Drinks</button>
        <button>Desserts</button>
      </div>

      <div className="menu-container">
        {dishes.map((dish) => (
          <div className="menu-card" key={dish.id}>

            <img src={dish.image} alt={dish.name} />

            <div className="menu-info">

              <h2>{dish.name}</h2>

              <p>{dish.description}</p>

              <div className="menu-bottom">

                <span>${dish.price}</span>

                <button onClick={() => addToOrder(dish)}>
                  Add to Order
                 
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
   
  );
};

export default Menu;
