import React, { useContext } from "react";
import { ShopContext } from "./shopcontext";

const cartitems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const {
    viewProductDetails,
    addToCart,
    cartItems,
    removeToCart,
    updateCartItemCount,
  } = useContext(ShopContext);
  return (
    <>
      <tbody key={id}>
        <tr>
          <td>
            <div className="p-2">
              <img src={image} alt="" className="img-fluid " />
            </div>
          </td>
          <td>
            <p>
              Product Brand: <span className="price">{brand}</span>{" "}
            </p>
            <p>
              Product Name: <h5 className="price">{name}</h5>{" "}
            </p>
            <p>
              Product Price: <span className="price">{price}</span>{" "}
            </p>
            <p>
              Items In Stock: <span className="text-danger">1000</span>
            </p>
          </td>
          <td>
            <button
              className="add-btn mx-2"
              onClick={() => {
                addToCart(id);
              }}
            >
              {" "}
              +
            </button>
            <input
              type="text"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />

            <button
              className="add-btn mx-2"
              onClick={() => {
                removeToCart(id);
              }}
            >
              {" "}
              -
            </button>
          </td>

          <td>
            <div className="input-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Enter coupon code ..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button className="input-group-text" id="basic-addon2">
                Search
              </button>
            </div>
          </td>
        </tr>
        <div className="mb-3"></div>
      </tbody>
    </>
  );
};

export default cartitems;
