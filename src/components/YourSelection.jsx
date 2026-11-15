
import React from "react";
import "./YourSelection.css";
import { useState } from "react";
import { useEffect } from "react";
const YourSelection = ({ myOrder, setmyOrders }) => {
  const increase = (index) => {
    const updatedOrder = [...myOrder];

    updatedOrder[index] = {
      ...updatedOrder[index],
      quantity: updatedOrder[index].quantity + 1
    };

    setmyOrders(updatedOrder);
  };
  const decrease = (index) => {
    if (myOrder[index].quantity === 1) {
      removeItem(index);
    } else {
      const updatedOrder = [...myOrder];

      updatedOrder[index] = {
        ...updatedOrder[index],
        quantity: updatedOrder[index].quantity - 1
      };

      setmyOrders(updatedOrder);
    }
  };
  const removeItem = (index) => {
    const updatedOrder = myOrder.filter(
      (item, i) => i !== index
    );

    setmyOrders(updatedOrder);
  };

  let totalPrice = 0;

  myOrder.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  const [isEmpty, setIsEmpty] = useState(true);

useEffect(() => {
  if (myOrder.length === 0) {
    setIsEmpty(true);
  } else {
    setIsEmpty(false);
  }
}, [myOrder]);

  return (
    <div className="container py-5 selection-page">

      <div className="text-center mb-5">
        <h1 className="selection-title">Your Selection</h1>
        <p className="text-light">
          Review your delicious choices!
        </p>
      </div>

      {isEmpty && (
  <div className="text-center text-light">
    <h3>Your selection is empty!</h3>

    <a href="/menu" className="btn btn-warning mt-3">
      Explore Menu
    </a>
  </div>
)}

        <>
          <div className="row g-4">

            {myOrder.map((item, index) => (

              <div className="col-md-6 col-lg-4" key={item.id}>

                <div className="card h-100 selection-card">

                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                  />

                  <div className="card-body text-center">

                    <h4 className="card-title">
                      {item.name}
                    </h4>

                    <p className="card-text">
                      {item.description}
                    </p>

                    <h5 className="item-price">
                      Price: ${item.price}
                    </h5>

                    <div className="d-flex justify-content-center align-items-center gap-3 my-3">

                      <button
                        className="btn btn-outline-warning"
                        onClick={() => decrease(index)}
                      >
                        -
                      </button>

                      <span className="badge bg-warning text-dark fs-6">
                        {item.quantity}
                      </span>

                      <button
                        className="btn btn-outline-warning"
                        onClick={() => increase(index)}
                      >
                        +
                      </button>

                    </div>

                    <h5>
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </h5>

                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>

                  </div>
                </div>
              </div>

            ))}

          </div>

          <div className="text-center total-box mt-5 p-4">

            <h4>
              Total Items: {
                myOrder.reduce(
                  (total, item) => total + item.quantity,
                  0
                )
              }
            </h4>

            <h2>
              Total Price: ${totalPrice.toFixed(2)}
            </h2>

            <button className="btn btn-warning btn-lg mt-3 px-5">
              Confirm Order
            </button>

          </div>
        </>

      

    </div>
  );
};

export default YourSelection;
