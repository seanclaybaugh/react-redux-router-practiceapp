import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => (
  <div className="jumbotron">
    <h1>Redux Practice Page</h1>
    <p>React, Redux and React Router make for a good site!</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn all about it!
    </Link>
  </div>
);

export default HomePage