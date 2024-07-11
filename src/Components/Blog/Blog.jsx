import React, { useState, useEffect } from "react";
import "./Blog.css";

export default function Blog() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("https://dcnnpn-8080.csb.app/api/entries")
      .then((response) => response.json())
      .then((data) => setEntries(data))
      .catch((error) => console.error("Error fetching entries", error));
  }, []);

  return (
    <>
      <section className="blog-body">
        <div className="container">
          <h1 className="mb-4">Blog entries</h1>
          <a href="/entries/new" className="btn btn-success">
            New Entry
          </a>
          {entries.map((entry, index) => (
            <div key={index} className="card mt-4">
              <h2>{entry.title}</h2>
              <p>{new Date(entry.createdAt).toLocaleString()}</p>
              <p>{entry.description}</p>
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
