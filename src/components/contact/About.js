import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="container helpHght">
      <div className="text-center">
        <h1 className="large text-primary">About Us</h1>
        <h2 className="">
          We are a group of positive individuals and look at things on the
          bright side.
        </h2>
        <br />
        <p>
          As you read this we hope to open your mind and heart to the good
          things in life and know if your going through things, we hope this
          site could be a light in your darkness. We are all developers and
          while most companies have developers to build we are proud to say from
          the President of the company to the accountant, we all have coding
          experience.
        </p>
        <br />
        <h2>Founding Members</h2>
      </div>

      <div className="centerMe">
        
        
{/* Joshua About */}
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                class="imgAB"
                src="https://avatars0.githubusercontent.com/u/55989066?s=460&u=9f8274d80c3f6bd7849ec8dd4ea22ce0ee0bba34&v=4"
                alt="Joshua-Grey"
              />
            </div>
            <div class="flip-card-back p-1">
              <Link to="profile/5ecedb3715afeb58d0da5872" target="_blank">
                <h1 className="text-light lead">Joshua Gray</h1>
              </Link>

              <h3>Architect & Engineer</h3>
              <strong>
                <p className="aboutFlipBack">We love that guy</p>
              </strong>
              <p>
                I would rather be hated for who I am, than loved for who I am
                not.
              </p>
            </div>
          </div>
        </div>


{/* Nelson About */}
        <div class="flip-card ">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                class="imgAB"
                src="https://avatars1.githubusercontent.com/u/55574734?s=460&v=4"
                alt="Nelson-Chaves"
              />
            </div>
            <div class="flip-card-back p-1">
            <Link to="profile/5ecedb6d4ee8653887291044" target="_blank">
                <h1 className="text-light lead">Nelson Chaves</h1>
              </Link>
              <h3>Engineer & Backend</h3>
              <strong>
                <p className="aboutFlipBack">I'm Cool</p>
              </strong>
              <p>Work hard play hard.</p>
            </div>
          </div>
        </div>


{/* Justin About */}
        <div class="flip-card ">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                class="imgAB"
                src="https://avatars2.githubusercontent.com/u/55962297?s=460&u=cc21587c51614db5c9db6860190b0a2e2a96e246&v=4"
                alt="Justin-Harris"
              />
            </div>
            <div class="flip-card-back p-1">
            <Link to="profile/5ed04968e8546f5e2cbf3dfb" target="_blank">
                <h1 className="text-light lead">Justin Harris</h1>
              </Link>
              <h3>Fullstack</h3>
              <strong>
                <p className="aboutFlipBack">Be Greatfull</p>
              </strong>
              <p>
                Be gratefull of what you have and don't worry about what you
                don't
              </p>
            </div>
          </div>
        </div>


{/* Jeb Profile */}
        <div class="flip-card ">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                class="imgAB"
                src="https://avatars3.githubusercontent.com/u/55933461?s=460&u=0bea4a90c8bc05e19c5048aebfc51e4a6d659cd2&v=4"
                alt="Jeb-Brant"
              />
            </div>
            <div class="flip-card-back p-1">
            <Link to="profile/5ed29a95a8fcb71f5aac6ee7" target="_blank">
                <h1 className="text-light lead">Jeb Brant</h1>
              </Link>
              <h1>Pixel Engineer</h1>
              <strong>
                <p className="aboutFlipBack">I am Groot.</p>
              </strong>
              <p>It's dangerous to go alone, take this!</p>
            </div>
          </div>
        </div>


{/* Charles Profile */}
        <div class="flip-card ">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                class="imgAB"
                src="https://avatars3.githubusercontent.com/u/54374358?s=460&v=4"
                alt="Charles-Bartels"
              />
            </div>
            <div class="flip-card-back p-1">
            <Link to="profile/5ed95c90fd2a8398140e8c96" target="_blank">
                <h1 className="text-light lead">Charles Bartels</h1>
              </Link>
              <h3>Engineer & Backend</h3>
              <strong>
                <p className="aboutFlipBack">Great things will happen</p>
              </strong>
              <p>This is the way.</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};
export default About;
