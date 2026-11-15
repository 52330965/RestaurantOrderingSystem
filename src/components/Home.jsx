import React from "react";
import "./Home.css";
import myimage from "../assets/images/rr.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div
        className="home"
        style={{
          backgroundImage: `url(${myimage})`,
          borderRadius: "10px",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          minHeight: "50%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          className="home-content"
          style={{ textAlign: "center", color: "#d5965c" }}
        >
          <h1>Welcome to</h1>
          <h2 style={{ color: "#dfb48d" }}>RR</h2>
          <h5>Restaurant</h5>
        </div>
        <div
          className="home-content"
          style={{
            textAlign: "center",
            color: "#d5965c",
            font: "italic bold 24px/30px Georgia, serif",
            padding: "10px",
            border: "1px solid #d5965c",
            borderRadius: "90px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            marginTop: "5px",
          }}
        >
          <h6>Savor the Moment, Taste the Magic.</h6>
        </div>
        <div
          className="home-buttons"
          style={{ marginTop: "20px", marginBottom: "30px" }}
        >
          <button className="btn-home">
            <Link to="/menu" className="explore-btn">
              Explore Menu
            </Link>
          </button>
          <button className="btn-home">
            <Link to="/your-selection" className="selection-btn">
              Your Selection
            </Link>
          </button>
        </div>
        <div className="btn-container" style={{ marginTop: "20px" }}>
          <button className="btn" style={{ marginRight: "10px" }}>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#d5965c" }}
            >
              Login
            </Link>
          </button>
          <button className="btn">
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "#d5965c" }}
            >
              Register
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
