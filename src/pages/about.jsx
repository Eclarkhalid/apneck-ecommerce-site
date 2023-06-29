import React from "react";
import a6 from "../assets/images/about/a6.jpg";
import { Link } from "react-router-dom";
import vid from "../assets/images/about/1.mp4";
import img1 from "../assets/images/blog/blog-1.jpg";
import img2 from "../assets/images/blog/blog-2.jpg";
import img3 from "../assets/images/blog/blog-3.jpg";
import img4 from "../assets/images/blog/blog-4.jpg";
import Hero from "../components/hero";

import orders from "../assets/images/icons/icon1.png";
import orders1 from "../assets/images/icons/icon2.png";
import orders2 from "../assets/images/icons/icon3.png";
import orders3 from "../assets/images/icons/icon4.png";
import orders4 from "../assets/images/icons/icon5.png";

import Marquee from "react-fast-marquee";

const about = () => {
  return (
    <>
      <section className="about-wrapper p-5 mb-3">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1 className="text-white">#Get To Know Us</h1>
              <p className="text-white fs-3">
                Take a moment to know us better..
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="know-us p-5 mb-3">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex">
              <div className="col-6">
                <img src={a6} alt="" className="img-fluid p-3" />
              </div>
              <div className="col-6 d-flex flex-column  text-center justify-content-center p-3">
                <div className="mb-3">
                  <h1>Who are We?</h1>
                </div>
                <div className="mb-3">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laborum, voluptatibus maxime? Eaque qui veniam earum aliquam
                    accusamus blanditiis harum explicabo ipsum. Cupiditate
                    laudantium repudiandae vero facere est iusto ipsum magni.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa ea earum, ut tempore sint, minima repellat magnam
                    ducimus sapiente explicabo consectetur doloremque obcaecati
                    molestias rerum aspernatur eligendi, incidunt praesentium
                    aliquam.
                  </p>
                </div>
                <div className="mt-5">
                  <Link className="fs-3" to={"/contact"}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="mb-4">
                <h2 className="text-center">
                  Download our{" "}
                  <Link className="fs-2">
                    <b>App</b>
                  </Link>
                </h2>
              </div>
              <div className="col-6 mb-3">
                <video loop autoPlay muted src={vid}></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center mb-4">
              <h1>What our Customers Say</h1>
              <p>Get To know what our trusted customers say</p>
            </div>
            <div className="col-6 p-2">
              <div className="card blog-details-page mb-3 ">
                <div className=" d-flex">
                  <div className="col-4">
                    <img src={img1} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum vel reprehenderit doloribus quas! Quidem culpa amet
                      molestiae neque! Dolorum quidem voluptatem eligendi
                      deleniti ex consectetur placeat adipisci sequi quaerat
                      officia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card blog-details-page mb-3 ">
                <div className=" d-flex">
                  <div className="col-4">
                    <img src={img2} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum vel reprehenderit doloribus quas! Quidem culpa amet
                      molestiae neque! Dolorum quidem voluptatem eligendi
                      deleniti ex consectetur placeat adipisci sequi quaerat
                      officia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card blog-details-page mb-3 ">
                <div className=" d-flex">
                  <div className="col-4">
                    <img src={img3} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum vel reprehenderit doloribus quas! Quidem culpa amet
                      molestiae neque! Dolorum quidem voluptatem eligendi
                      deleniti ex consectetur placeat adipisci sequi quaerat
                      officia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card blog-details-page mb-3 ">
                <div className=" d-flex">
                  <div className="col-4">
                    <img src={img4} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum vel reprehenderit doloribus quas! Quidem culpa amet
                      molestiae neque! Dolorum quidem voluptatem eligendi
                      deleniti ex consectetur placeat adipisci sequi quaerat
                      officia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card blog-details-page mb-3 ">
                <div className=" d-flex">
                  <div className="col-4">
                    <img src={img2} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum vel reprehenderit doloribus quas! Quidem culpa amet
                      molestiae neque! Dolorum quidem voluptatem eligendi
                      deleniti ex consectetur placeat adipisci sequi quaerat
                      officia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card blog-details-page mb-3 ">
                <div className=" d-flex">
                  <div className="col-4">
                    <img src={img1} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body col-8 p-4">
                    <span>
                      <b>Marvel Clein</b>
                    </span>
                    <p className="my-3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum vel reprehenderit doloribus quas! Quidem culpa amet
                      molestiae neque! Dolorum quidem voluptatem eligendi
                      deleniti ex consectetur placeat adipisci sequi quaerat
                      officia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-3">
              <Marquee className="p-2 slide">
                <div className="card mx-3">
                  <img src={orders} alt="" className="img-fluid" />
                  <p className="card-text">Quick Orders</p>
                </div>
                <div className="card mx-3">
                  <img src={orders1} alt="" className="img-fluid" />
                  <p className="card-text">Fast Shipping</p>
                </div>
                <div className="card mx-3">
                  <img src={orders2} alt="" className="img-fluid" />
                  <p className="card-text">Huge Saves</p>
                </div>
                <div className="card mx-3">
                  <img src={orders3} alt="" className="img-fluid" />
                  <p className="card-text">Online Orders</p>
                </div>
                <div className="card mx-3">
                  <img src={orders4} alt="" className="img-fluid" />
                  <p className="card-text">24/7 Support</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
