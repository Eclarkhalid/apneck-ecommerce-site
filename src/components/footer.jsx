import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import google from "../assets/images/pay/play.jpg";
import app from "../assets/images/pay/app.jpg";
import pay from "../assets/images/pay/pay.png";

const footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="col-8 text-center mb-3">
                <h3>Signup For News-letter</h3>
                <p>
                  To get updates On All <Link>Special Offers</Link>
                </p>
              </div>
              <div className="col-4">
                <div className="input-group mb-3 text-center">
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Enter Email here"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <hr className="m-2" />
            <div className="col-4 d-flex flex-column  ">
              <h3 className="mb-4">Contact us</h3>
              <div className="footer-details">
                <p className="mb-3">
                  <b>Address:</b> Thika town, Naltex building, 2nd floor
                </p>
                <p className="mb-3">
                  <b>Phone:</b>{" "}
                  <a href="tel:+2457865438"> Call us +2457865438</a>
                </p>
                <p className="mb-5">
                  <b>Hours Open:</b> From 8 A.m to 5 P.m
                </p>
                <p className="mb-3">
                  <b>Follow Us</b>
                </p>
                <div className="col-4 social-icons mb-3 d-flex justify-content-around">
                  <Link>
                    <AiFillTwitterCircle className="fs-4" />
                  </Link>
                  <Link>
                    <BsFacebook className="fs-4" />
                  </Link>
                  <Link>
                    <BsInstagram className="fs-4" />
                  </Link>
                  <Link>
                    <BsLinkedin className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h3 className="mb-4">About</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">About Us</Link>
                <Link className="mb-3">Delivery</Link>
                <Link className="mb-3">Privacy Policy</Link>
                <Link className="mb-3">Tax Policy</Link>
                <Link className="mb-3">Fee Policy</Link>
                <Link className="mb-3">Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-2">
              <h3 className="mb-4">Account</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">Profile</Link>
                <Link className="mb-3">View Cart</Link>
                <Link className="mb-3">My Orders</Link>
                <Link className="mb-3">My Wishlist</Link>
                <Link className="mb-3">Help</Link>
                <Link className="mb-3">Coupons</Link>
              </div>
            </div>
            <div className="col-4">
              <h3 className="mb-3">Install App</h3>
              <div className="footer-details">
                <p>Available On Google Play Services & App Store</p>
                <div className="pay d-flex">
                  <div>
                    <Link>
                      <img
                        src={google}
                        alt=""
                        className="img-fluid p-4 my-3 "
                      />
                    </Link>
                  </div>
                  <div>
                    <Link>
                      <img src={app} alt="" className="img-fluid p-4 my-3" />
                    </Link>
                  </div>
                </div>
                <p className="mb-3">Payment Methods</p>
                <Link className="pay">
                  <img src={pay} alt="" className="img-fluid p-3  " />
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex justify-content-between">
            <div className="col-3">
              <p>&copy; Developed by Eclar Developers 2023</p>
            </div>
            <div className="col-3 d-flex justify-content-around">
              <Link className="text-black">Privacy Policy</Link>
              <Link className="text-black">Terms of Use</Link>
              <Link className="text-black">Contact Me</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
