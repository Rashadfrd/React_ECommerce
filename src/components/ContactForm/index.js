import React from "react";
import classes from "./style.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS

function ContactForm() {
  const position = [40.4194, 49.8491];
  const customIcon = L.icon({
    iconUrl:
      "https://www.freeiconspng.com/thumbs/address-icon/address-icon-15.png", // Sample icon URL
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  return (
    <section className={classes.contactForm}>
      <div className={classes.mapAndForm}>
        <div className={classes.map}>
          <MapContainer
            center={position}
            zoom={14}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          ,
        </div>
        <div className={classes.form}>
          <h2>Get in touch</h2>
          <form action="">
            <div className={classes.formNameAndSurname}>
              <div className={classes.formItem}>
                <label htmlFor="name">First Name</label>
                <input id="name" type="text" placeholder="First Name" />
              </div>
              <div className={classes.formItem}>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className={classes.formItem}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Email" />
            </div>
            <div className={classes.formItem}>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Message here..." rows={8} />
            </div>
            <button className={classes.submitBtn} type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default ContactForm;
