import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="main-event">
        <h1>Main Event</h1>
        <col>
          <h3>Wow!</h3>
          <p>So much wow.</p>
        </col>
        <col>
          <h3>Woah!</h3>
          <p>That looks delicious</p>
        </col>
        <col>
          <h3>Amaze-Balls!</h3>
          <p>That is totally amazing</p>
        </col>
        <col>
          <h3>Inspiring!</h3>
          <p>Awe inspring</p>
        </col>
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
