import React from "react";
import "./Home.css";
import Pug from "./Imgs/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg";
import Project1 from "./Imgs/thisisengineering-BxZSdcdG3Zc-unsplash.jpg";
import Project2 from "./Imgs/thisisengineering-V-AEBD99Hak-unsplash.jpg";
import Project3 from "./Imgs/gabriel-vasiliu-fCJi6nVU27o-unsplash.jpg";

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
        <div className="p-5 box-art"></div>
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
        <div className="d-flex justify-content-between mt-4">
          <div className="col-4 pt-3 card card1">
            <img
              className="col-3 mb-3 p-3 project-img"
              alt="project-img"
              src={Project1}
            />
            <div className="card-text">
              <h3>AI Robot</h3>
              <p>
                We've all been there... Is that guy Chinese? Japanese? Korean?
                Taiwanese? We always find ourselves wondering how much better
                life would be if all the rice munchers were the same ethnicity.
                Well wonder no more! A robot made using AI to recognize DNA and
                ethnicity of specific asian cultures for the sole purpose of
                eliminating all of them except one.
                <p>"More than one group of Slant-Eyes is too many"</p>
              </p>
              <p> ~ Ghandi</p>
            </div>
          </div>
          <div className="pt-3 card card2">
            <img
              className="col-3 mb-3 p-3 project-img"
              alt="project-img"
              src={Project2}
            />
            <div className="card-text">
              <h3>Gay-Dar for Weed</h3>
              <p>
                I joined a team of some of the brightest minds this age has to
                offer to create the "Weed-Dar". It's a gay-dar for weed! Tired
                of paying masculine weed prices but getting feminine weed
                instead? Well keep the misogyny alive and strong!
                <p>"Only straight kush is good kush"</p>
              </p>
              <p> ~ Martin Luther King</p>
            </div>
          </div>
          <div className="col-4 pt-3 card card3">
            <img
              className="col-3 p-3 project-img"
              alt="project-img"
              src={Project3}
            />
            <div className="card-text">
              <h3>Peeping Tom</h3>
              <p>
                Armed with motion detection, proximity sensors, 6 different
                voice types, 8 different levels of racist remarks, two giant
                lenses for "reconnaissance", and a giant smile for added{" "}
                <i>creepy</i>
                factor, I bring you the answer to all of your home security/ wet
                dream needs. The Peeping Tom.
                <p>
                  "Pudding Pops... And yes, that means what you think it does
                  😏"
                </p>
              </p>
              <p> ~ Bill Cosby</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-sect">
        <h2>Contact Sect</h2>
        <div className="d-flex">
          <div className="col-4 offset-1 mt-5 mb-5 contact-bubble contact-left">
            <h2 className="mt-3 align-self-center justify-self-center">Logo</h2>
          </div>
          <div className="col-4 offset-2 mt-5 mb-5 contact-bubble contact-right">
            <h2 className="mt-3">Contact Me</h2>
            <h4 className="mt-5">Phone</h4>
            <h4 className="mt-5">Email</h4>
            <h4 className="mt-5">Social Media</h4>
          </div>
        </div>
      </section>
    </>
  );
}
