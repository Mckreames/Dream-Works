import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="main-event">
        <h1>Main Event</h1>
        <row className="align-items-center">
          <div className="offset-1 col-3 mb-5 splash-quote">
            <h3>Wow!</h3>
            <p>So much wow.</p>
          </div>
          <div className="offset-4 col-3 mb-5 splash-quote">
            <h3>Woah!</h3>
            <p>That looks delicious</p>
          </div>
        </row>
        <div className="offset-1 col-3 mt-5 splash-quote">
          <h3>Amaze-Balls!</h3>
          <p>That is totally amazing</p>
        </div>
        <div className="offset-4 col-3 mt-5 splash-quote">
          <h3>Inspiring!</h3>
          <p>Awe inspring</p>
        </div>
      </section>
      <section className="profile-sect">
        <h2>Profile</h2>
      </section>
      <section className="project-preview">
        <h2>Project Preview</h2>
      </section>
      <section className="contact-sect">
        <h2>Contact Sect</h2>
      </section>
    </>
  );
}
