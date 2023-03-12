import React from "react";
import classes from "./LocationDisplay.module.css";
import { Link } from "react-router-dom";
import locationPin from "../../assets/icon-svg/location-tick-svgrepo-com.svg";
import locationImage from "../../assets/component/locationBoutique.jpg";

export default function LocationDisplay() {
  return (
    <div className={classes.LocationDisplay}>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.images}>
            <img
              src={locationPin}
              alt="Location Pin"
              className={classes.locationPin}
            />
            <img
              src={locationImage}
              alt="Location"
              className={classes.locationImage}
            />
          </div>
          <div className={classes.address}>
            <h3>Gomel</h3>
            <h5>Address</h5>
            <p>Lorem Lorem Lorem Lorem Lorem</p>
            <h5>Phone number</h5>
            <p>123-456-7890</p>
            <h5>Hours</h5>
            <p>Mon – Fri: 10:00 - 18:00</p>
            <p>Sat & Sun: 10:00 - 17:00</p>
            <Link to="/shop">
              <button className={classes.orderButton}>Order now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
