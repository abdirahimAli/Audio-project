import React from "react";
import productdata from "../data";
import img1 from "/image-xx99-mark-two-headphones.jpg";
import { Link,useParams } from "react-router-dom";
import Commonitems from "../components/Commonitems";
import Human from "../components/Human";
import img4 from "/image-best-gear.jpg";
const HeadphonesSingleproduct = () => {
  
  const productID = useParams().ProductID;
  const product = productdata.find((product) => product.id == productID);


  return (
    <section className="HeadphonesSinglproduct-container">
      <article className="Navication-back">
      
      </article>
      <Link className="Linkto-home" to="/Headphones">
        Go back
      </Link>
      <article className="Headphones-Singlproduct">
        <div className="Headphones-img1">
          <img src={product.image.desktop} />
        </div>
        <div className="Headphones-info1">
          <div className="new-product">
            <h4> NEW PRODUT</h4>
          </div>

          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span>$ {product.price}</span>
          <button className="btn2">Add to cart</button>
        </div>
      </article>
      <article className="HeadphonesSinglproduct-info">
        <div className="HeadphonesSinglproduct-info1">
          <h2> FEATURES</h2>
          <p>{product.features}</p>
        </div>
        <div className="HeadphonesSinglproduct-info2">
          <h2> IN THE BOX</h2>
          <p>
            <ul>
              <li>
                <span>{product.includes[0].quantity}x</span>{" "}
                {product.includes[0].item}
              </li>
              <li>
                {" "}
                <span>{product.includes[1].quantity}x</span>
                {product.includes[1].item}
              </li>
              <li>
                {" "}
                <span>{product.includes[2].quantity}x</span>
                {product.includes[2].item}
              </li>
              {/* <li>{product.includes[3].item}</li>
              <li>{product.includes[4].item}</li> */}
            </ul>
          </p>
        </div>
      </article>

      <article className="Gallery">
        <div className="img1">
          <div className="img11">
            <img className="image1" src={product.gallery.first.desktop} />
          </div>
          <div className="img12">
            {" "}
            <img
              className="image1 bottom"
              src={product.gallery.second.desktop}
            />
          </div>
        </div>
        <div className="img3">
          <img className="image12" src={product.gallery.third.desktop} />
        </div>
      </article>
      <article className="Others">
        <h3> You might also like</h3>
        <div className="Others-content">
          <div className="others1">
            <img
              className="others1-img"
              src={product.others[0].image.desktop}
            />
            <h4>{product.others[0].name}</h4>
            <button className="btn2">see product</button>
          </div>
          <div className="others1">
            <img
              className="others1-img"
              src={product.others[1].image.desktop}
            />
            <h4>{product.others[1].name}</h4>
            <button className="btn2">see product</button>
          </div>
          <div className="others1">
            <img
              className="others1-img"
              src={product.others[2].image.desktop}
            />
            <h4>{product.others[2].name}</h4>
            <button className="btn2">see product</button>
          </div>
        </div>
      </article>
      <article className="Home-article-2">
        <div>
          <Commonitems />
        </div>
      </article>

      <article className="Human-container">
        <div className="humanimg-Text">
          <div className="humanimgText-header">
            <h1>
              {" "}
              BRING YOU THE <br /> <span className="Best">BEST</span>AUDIO GEAR{" "}
            </h1>
          </div>
          <div className="humanimgText-paragraph">
            <p className="commonitems-paragraph">
              {" "}
              Located at the heart of New York City. Audiophile is the premier
              <br />
              store for high end headphones,earphones,speakers,and audio
              <br />
              accessories. We have a large showroom and luxury <br />
              demonstration rooms available for you to browse and
              <br /> experience a wide range of our products. Stop by our store
              to
              <br /> meet some of the fantastic people who make Audiophile the
              <br />
              best place to buy portable audio equipment.{" "}
            </p>
          </div>
        </div>

        <img className="humanimgimg" src={img4} />
      </article>
    </section>
  );
};

export default HeadphonesSingleproduct;
