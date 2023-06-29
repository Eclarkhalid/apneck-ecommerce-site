import React from "react";
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";
import { Link } from "react-router-dom";

const blogs = () => {
  return (
    <>
      <div className="col-3">
        <div className="card">
          <img src={blog1} alt="" className="card-img-top img-fluid mb-3 p-5" />
          <div className="card-body">
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos voluptate itaque voluptates
            </p>
            <Link to={'/blog'}>
            <button className="button-blog">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src={blog2} alt="" className="card-img-top img-fluid mb-3 p-5" />
          <div className="card-body">
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos voluptate itaque voluptates
            </p>
            <Link to={'/blog'}>
            <button className="button-blog">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src={blog3} alt="" className="card-img-top img-fluid mb-3 p-5" />
          <div className="card-body">
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos voluptate itaque voluptates
            </p>
            <Link to={'/blog'}>
            <button className="button-blog">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src={blog4} alt="" className="card-img-top img-fluid mb-3 p-5" />
          <div className="card-body">
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos voluptate itaque voluptates
            </p>
            <Link to={'/blog'}>
            <button className="button-blog">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default blogs;
