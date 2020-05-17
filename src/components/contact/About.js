import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";


const About = ({ }) => {

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


        {/* HOME PAGE LINKS */}

          <div className="mainButtons">
          <a href="https://github.com/CharlesB8" target="_blank">Charles Bartel</a><br />
          <a href="https://github.com/Lassojeb" target="_blank">Jeb Brant</a><br />
          <a href="https://github.com/Joshiba26" target="_blank">Joshua Gray</a><br />
          <a href="https://github.com/jharristech" target="_blank">Justin Harris</a><br />

          
           <a href="https://github.com/nelsonchaves" target="_blank">Nelson Chaves</a><br />            
          </div>






          <div class="flip-card centerMe">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img class="imgAB" src="https://avatars0.githubusercontent.com/u/55989066?s=460&u=9f8274d80c3f6bd7849ec8dd4ea22ce0ee0bba34&v=4" alt="Joshua-Grey" />
    </div>
    <div class="flip-card-back">
      <h1>Joshua Grey</h1> 
      <a href="https://github.com/Joshiba26" target="_blank" class="flipColor">GitHub Page</a><br />
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
<br />


<div class="flip-card centerMe">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img class="imgAB" src="https://avatars1.githubusercontent.com/u/55574734?s=460&v=4" alt="Nelson" />
    </div>
    <div class="flip-card-back">
      <h1>Nelson Chaves</h1> 
      <a href="https://github.com/Joshiba26" target="_blank" class="flipColor">GitHub Page</a><br />
      <p>Developer & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
<br />

<div class="flip-card centerMe">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img class="imgAB" src="https://avatars3.githubusercontent.com/u/55933461?s=460&u=0bea4a90c8bc05e19c5048aebfc51e4a6d659cd2&v=4" alt="jeb" />
    </div>
    <div class="flip-card-back">
      <h1>Jeb</h1> 
      <a href="https://github.com/Joshiba26" target="_blank" class="flipColor">GitHub Page</a><br />
      <p>Artist & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
<br />




    </div>
  </div>



    </section>














  );
};
export default About;
// jh about
