import React from "react";
import { Link } from "react-router-dom";

const About = () => {

  return (
    <section className="container">
      <div className="text-center">
        <div className="">
          <h1 className="large text-primary">About Us</h1>
          <h2 className="">We are a group of positive individuals and look at things on the bright side.</h2><br />
          <p>
            As you read this we hope to open your mind and heart to the good things in life and know if your going through
            things, we hope this site could be a light in your darkness. We are all developers and while most companies have developers to build
            we are proud to say from the President of the company to the accountant, we all have coding experience.
          </p><br />
          <h2>
            Below is our team of
           </h2>
{/* Joshua About */}
        <div className="container centerMe">
          <div class="flex-grid">
            <div class="col">
              <div class="flip-card ">
                <h2>
                <Link to="https://github.com/Joshiba26" target="_blank">Joshua Gray</Link>
                </h2>
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img class="imgAB" src="https://avatars0.githubusercontent.com/u/55989066?s=460&u=9f8274d80c3f6bd7849ec8dd4ea22ce0ee0bba34&v=4" alt="Joshua-Grey" />
                    </div>
                      <div class="flip-card-back">
                        <h2>
                        <Link to="https://github.com/Joshiba26" target="_blank">Joshua Gray</Link>
                        </h2>
                        <Link to="https://github.com/Joshiba26" target="_blank">Github Page<br /></Link>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
    </div>
  <div class="col"></div>
  <div class="col"></div>
</div>
{/* Nelson About */}
          </div>
          <div className="container centerMe">
          <div class="flip-card ">
          <h2>
          <Link to="https://github.com/nelsonchaves" target="_blank">Nelson Chaves</Link>
          </h2>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="imgAB" src="https://avatars1.githubusercontent.com/u/55574734?s=460&v=4" alt="Nelson-Chaves" />
              </div>
              <div class="flip-card-back">
              <Link to="https://github.com/nelsonchaves" target="_blank">Github</Link>
                <p>Engineer</p>
                <p>Knowledgeable</p>
              </div>
            </div>
          </div>
          </div>
{/* Justin About */}
<div className="container centerMe">
          <div class="flip-card ">
            <h2>
            <Link to="https://github.com/jharristech" target="_blank">Justin Harris</Link>
          </h2>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="imgAB" src="https://avatars2.githubusercontent.com/u/55962297?s=460&u=cc21587c51614db5c9db6860190b0a2e2a96e246&v=4" alt="Justin" />
              </div>
              <div class="flip-card-back">
                <h1>Geb Brant</h1>
                <Link to="https://github.com/Lassojeb" target="_blank">Jeb Brant<br /></Link>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          </div>
{/* Jeb Profile */}
          <div className="container centerMe">
          <div class="flip-card ">
            <h2>
            <Link to="https://github.com/Lassojeb" target="_blank">Jeb Brant</Link>
          </h2>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="imgAB" src="https://avatars3.githubusercontent.com/u/55933461?s=460&u=0bea4a90c8bc05e19c5048aebfc51e4a6d659cd2&v=4" alt="Joshua-Grey" />
              </div>
              <div class="flip-card-back">
                <h1>Geb Brant</h1>
                <Link to="https://github.com/Lassojeb" target="_blank">Jeb Brant<br /></Link>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
           </div>
          </div>
         </div>
       </div>
    </section>
  );
};
export default About;
// jh about
