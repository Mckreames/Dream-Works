import React, { useState, useEffect } from "react";
import "./Blog.css";

export default function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles", error));
  }, []);

  return (
    <>
      <section className="blog-body">
        <div className="container">
          <h1 className="mb-4">Blog Articles</h1>
          <a href="/articles/new" className="btn btn-success">
            New Article
          </a>
          {articles.map((article, index) => (
            <div key={index} className="card mt-4">
              <h2>{article.title}</h2>
              <p>{new Date(article.createdAt).toLocaleString()}</p>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
        {/* <div className="offset-1 col-10 blog-container">
          <div className="offset-1 col-10 blog-bubble">
            <p>ID</p>
            <p>post-img</p>
            <h3>Title:</h3>
            <h5>Date:</h5>
            <p>Content:</p>
          </div>
        </div> */}
      </section>
    </>
  );
}
