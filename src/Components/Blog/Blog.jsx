import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      <section>
        <div className="offset-1 col-10 blog-container">
          <div className="offset-1 col-10 blog-bubble">
            <p>ID</p>
            <p>post-img</p>
            <h3>Title:</h3>
            <h5>Date:</h5>
            <p>Content:</p>
          </div>
        </div>
      </section>
    </>
  );
}
