import React from "react";
import img1 from "/image-xx99-mark-two-headphones.jpg";

import img2 from "/image-xx99-mark-one-headphones.jpg";

import img3 from "/image-xx59-headphones.jpg";
import Commonitems from "../components/Commonitems";
import { Link } from "react-router-dom";
import Human from "../components/Human";

const Headphones = () => {
  const num = [4,3,2];
  return (
    <section className="Headphones-container">
      <div className="Header">
        <h1> Headphones</h1>
      </div>

      <article className="Headphones-one">
        <div className="Headphones-img1">
          <img src={img1} />
        </div>
        <div className="Headphones-info1">
          <div className="new-product">
            <h4> NEW PRODUT</h4>
          </div>

          <h1>
            {" "}
            XX99 Mark ||
            <br /> Headphones
          </h1>
          <p>
            {" "}
            Experience natural, lifelike audio with expetional build quality
            <br />
            made for the pationate music enthusiast{" "}
          </p>
          <Link className="links-stylying" to={`/Headphones/${num[0]}`}>
            <button className="btn btn-1">see product</button>
          </Link>
        </div>
      </article>

      <article className="Headphones-two">
        <div className="Headphones-info2">
          <div className="new-product">
            <h4> NEW PRODUT</h4>
          </div>

          <h1>
            {" "}
            XX99 Mark ||
            <br /> Headphones
          </h1>
          <p>
            {" "}
            Experience natural, lifelike audio with expetional build quality
            <br />
            made for the pationate music enthusiast{" "}
          </p>
          <Link className="links-stylying" to={`/Headphones/${num[1]}`}>
            <button className="btn btn-1">see product</button>
          </Link>
        </div>
        <div className="Headphones-img2">
          {" "}
          <img src={img2} />
        </div>
      </article>

      <article className="Headphones-three">
        <div className="Headphones-img3">
          <img src={img3} />{" "}
        </div>
        <div className="Headphones-info3">
          <div className="new-product">
            <h4> NEW PRODUT</h4>
          </div>
          <h1>
            {" "}
            XX99 Mark ||
            <br /> Headphones
          </h1>
          <p>
            {" "}
            Experience natural, lifelike audio with expetional build quality
            <br />
            made for the pationate music enthusiast{" "}
          </p>
          <Link className="links-stylying" to={`/Headphones/${num[2]}`}>
            <button className="btn btn-1">see product</button>
          </Link>
        </div>
      </article>
      <article className="Home-article-2">
        <div>
          <Commonitems />
        </div>
      </article>

      <article>
        <div>
          <Human />
        </div>
      </article>
    </section>
  );
};

export default Headphones;
