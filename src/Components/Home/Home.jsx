import React from "react";
import "./Home.css";
import Pug from "./Imgs/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg";

export default function Home() {
  return (
    <>
      <section className="main-event">
        <h1>Main Event</h1>
        <row className="row-quote-1">
          <div className="offset-1 col-3 splash-quote">
            <h3>Wow!</h3>
            <p>So much wow.</p>
          </div>
          <div className="offset-4 col-3 splash-quote">
            <h3>Woah!</h3>
            <p>That looks delicious</p>
          </div>
        </row>
        <row className="row-quote-2">
          <div className="offset-1 col-3 splash-quote">
            <h3>Amaze-Balls!</h3>
            <p>That is totally amazing</p>
          </div>
          <div className="offset-4 col-3 me-auto splash-quote">
            <h3>Inspiring!</h3>
            <p>Awe inspring</p>
          </div>
        </row>
      </section>
      <section className="profile-sect">
        <h2>Profile</h2>
        <img className="mt-3 profile-pic" alt="profile-pic" src={Pug} />
        <h3 className="offset-1 col-10 mt-4 profile-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          deleniti optio delectus? Laborum alias vero voluptatibus maiores
          voluptas tempora temporibus deserunt nisi officia quisquam eveniet
          dolores vel magni impedit voluptatum sequi ex debitis unde ipsum,
          mollitia at velit rem sapiente in. Nemo soluta laudantium fugit cum
          consectetur nobis molestias eum, delectus placeat quis id animi
          commodi debitis vero veritatis at est ab tempore, velit illo
          reprehenderit. Dolorem corporis dolore nemo ut quos ratione odio ad
          eligendi hic, pariatur nobis sunt aperiam, itaque laborum, a quisquam?
          Voluptates temporibus esse itaque architecto. Laborum, impedit. Iusto
          alias in nesciunt, quas earum atque repellat explicabo inventore
          voluptas exercitationem natus sequi nemo ad iure, esse quaerat ipsam
          provident aliquam nisi blanditiis consequuntur cumque dolore excepturi
          deleniti. Deserunt, recusandae. Debitis beatae nihil corrupti
          veritatis nisi blanditiis omnis minima a quasi natus, ullam quisquam,
          sint porro pariatur nobis maiores laborum facilis! Distinctio,
          doloremque. Nemo veritatis sequi hic in odit tempore facilis dolorum
          voluptas aliquid. Autem, distinctio quasi. Hic, eius! Et nulla harum
          magni repudiandae molestias, ipsam sed rem suscipit voluptatum non?
          Tenetur ex autem soluta ratione eaque quidem, provident perferendis
          libero earum aliquam facere cum fuga, aut odit molestias excepturi hic
          sunt? Nostrum adipisci atque earum minima quo corrupti vel, sequi
          porro dolorem, minus velit. Doloremque nisi molestias, unde velit
          alias voluptatibus fuga ad sint odio aliquid, iste earum, amet soluta
          quaerat. Voluptate possimus, esse tempora cum magnam doloribus illum
          sint quo vero sunt molestiae necessitatibus quod molestias maiores
          vitae minima! Ea est fugit qui molestias cupiditate veniam explicabo
          officiis ipsam eos quibusdam, ullam commodi facilis laboriosam vero.
          Unde nam voluptas esse doloremque quod tempore placeat incidunt
          officia enim voluptates, fuga sint consectetur! Eos explicabo vel
          iusto voluptates. Facilis assumenda veniam sunt tempora! Impedit
          ducimus alias neque nesciunt, nulla in facilis laboriosam consequatur
          cumque iure? Illum, vero?
        </h3>
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
