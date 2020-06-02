import React from "react";
import { Link } from "react-router-dom";

const Help = () => {

  return (
    <section className="container helpVids">
      <div className="text-center">
          <h1 className="large text-primary">Help Page</h1>
          <h2 className="">Please watch our video below as it will help you with navigating the website.</h2><br />
          <p>
            If you are just browsing and want to see the current Good News Posts you can go <Link to='/'>here</Link>
          </p>
          <br />
          <iframe width="720" height="480" src="https://www.youtube.com/embed/10idJH_bbZo" frameborder="0" 
          allow="accelerometer; autoplay; 
          encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
    </section>
  );
};
export default Help;
// jh help
