import React from "react";
import "./BlogAdmin.css";

export default function BlogAdmin() {
  return (
    <>
      <section>
        <div class="form-container">
          <h2>Create Blog Post</h2>
          <form
            action="/submit-blog-post"
            method="post"
            enctype="multipart/form-data"
          >
            <div class="form-group">
              <label for="image">Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
              />
            </div>
            <div class="form-group">
              <label for="title">Title:</label>
              <input type="text" id="title" name="title" required />
            </div>
            <div class="form-group">
              <label for="content">Content:</label>
              <textarea id="content" name="content" required></textarea>
            </div>
            <div class="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
