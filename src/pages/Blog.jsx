import React from 'react'

import heroImage1 from "../assets/images/pngtree-illustration-man-watching-an-online-business-blog-banner-png-image_7643447-Photoroom.png";
import { Link } from "react-router-dom";
import post1 from "../assets/images/hotel.avif";
import post2 from "../assets/images/hcltech.avif";
import post3 from "../assets/images/N1_1482130301.jpg";

const blogPosts = [
  {
    id: 1,
    image: post1,
    title: "Hotel Dwarkamai – Reinvent Luxury - Nagpur",
    date: "Dec 19, 2021",
    link: "#",
  },
  {
    id: 2,
    image: post2,
    title: "HCL Technologies Nagpur ",
    
    date: "Dec 15, 2021",
    link: "#",
  },
  {
    id: 3,
    image: post3,
    title: "Tech-Mahindra Nagpur",
    
    date: "Dec 12, 2021",
    link: "#",
  },
  
];


const Blog = () => {
  return (
    <div>
     <div>
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active bg-slide-1" data-bs-interval="2000">
            <div className="container text-start text-white">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  
                </div>
                <div className="col-lg-6">
                  <img src={heroImage1} className="img-fluid w-100" style={{ maxHeight: "100vh" }} alt="Couch Service" />
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
       
      </div>
      <div className="blog-section">
      <div className="container">
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-12 col-sm-6 col-md-4 mb-5" key={post.id}>
              <div className="post-entry">
                <Link to={post.link} className="post-thumbnail">
                  <img src={post.image} alt={post.title} className="img-fluid" />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link to={post.link}>{post.title}</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <Link to="#">{post.author}</Link>
                    </span>{" "}
                    <span>
                      on <Link to="#">{post.date}</Link>
                    </span>
                    <br/>
                    <a href="#" className="btn btn-dark me-2">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    
    </div>
  )
}

export default Blog
