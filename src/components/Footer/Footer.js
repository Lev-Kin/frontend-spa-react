import React from "react";
import classes from "./Footer.module.css";
import instagram from "../../assets/logo/instagram-logo-facebook-2-svgrepo-com.svg";
import twitter from "../../assets/logo/twitter-logo-thin-svgrepo-com.svg";
import linkedin from "../../assets/logo/linkedin-logo-thin-svgrepo-com.svg";
import facebook from "../../assets/logo/facebook-logo-meta-2-svgrepo-com.svg";

function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>
            <a href="/">Luxury Feel</a>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={classes.form}>
          <h4>Sign Up For Luxury News!</h4>
          <form>
            <input type="email" placeholder="Email address" />
            <a href="/testnf" style={{ textDecorationLine: "none" }}>
              &#8594;
            </a>
          </form>
        </div>
        <div className={classes.pages}>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/shop">Products</a>
            </li>
            <li>
              <a href="/location">Location</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
          </ul>
        </div>
        <div className={classes.socialLinks}>
          <div>Follow us</div>
          <ul>
            <li>
              <a href="https://www.instagram.com/">
                <img
                  src={instagram}
                  alt="instagram"
                  className={classes.instagram}
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <img src={twitter} alt="twitter" className={classes.twitter} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className={classes.linkedin}
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <img
                  src={facebook}
                  alt="facebook"
                  className={classes.facebook}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
