import React, { useContext } from "react";
import { ShopContext } from "../components/shopcontext";
import { PRODUCTS, PRODUCTS1 } from "./products";

const productdetails = () => {
  const {
    updateCartItemCount,
    removeToCart,
    addToCart,
    cartItems,
    closeProductDetails,
    selectedProduct,
  } = useContext(ShopContext);
  // Set selectedProduct to 0
  const productId = selectedProduct || 0;

  const product =
    PRODUCTS.find((p) => p.id === productId) ||
    PRODUCTS1.find((p) => p.id === productId);

  return (
    <>
      <div className="d-flex">
        <div className="col-6 card">
          <img src={product.image} alt="" className="img-fluid p-5" />
        </div>

        <div className="col-6 card p-3">
          <div className="p-4">
            <span>{product.brand}</span>
            <h3 className="my-3">{product.name} </h3>
            <div className="card-details">
              <p className="my-3">
                Was <strike className="text-danger">{product.price * 2}</strike>{" "}
                &nbsp; Now <span className="price">${product.price}</span>
              </p>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sequi suscipit voluptas enim doloremque adipisci quasi iusto
                molestias ratione ipsum, dolorem similique at reprehenderit
                itaque reiciendis? Commodi saepe non quae.
              </p>
            </div>

            <button
              className="add-btn mx-2"
              onClick={() => {
                addToCart(product.id);
              }}
            >
              {" "}
              +
            </button>
            <input
              type="text"
              value={cartItems[product.id]}
              onChange={(e) =>
                updateCartItemCount(Number(e.target.value), product.id)
              }
            />

            <button
              className="add-btn mx-2"
              onClick={() => {
                removeToCart(product.id);
              }}
            >
              {" "}
              -
            </button>
            <div className="input-group p-4">
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

            <div className="card-footer">
              <h3 className="price my-3 text-center">
                More Products Of the same
              </h3>
              <div className="row mt-4">
                {PRODUCTS.slice(2, 6).map((product) => (
                  <div className="col-3">
                    <div key={product.id}>
                      <div className="card h-100 m-auto p-3">
                        <img
                          src={product.image}
                          alt=""
                          className="card-img-top img-fluid m-auto p-3"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row mt-4">
                {PRODUCTS1.slice(4, 7).map((product) => (
                  <div className="col-3">
                    <div key={product.id}>
                      <div className="card h-100 m-auto p-3">
                        <img
                          src={product.image}
                          alt=""
                          className="card-img-top img-fluid m-auto p-3"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default productdetails;
