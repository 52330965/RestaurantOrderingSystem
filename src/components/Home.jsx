import "./Home.css";
import myimage from "../assets/images/rr.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home" style={{ backgroundImage: `url(${myimage})` }}>
      <div className="home-content home-heading">
        <h1>Welcome to</h1>
        <h2>RR</h2>
        <h3>Restaurant</h3>
      </div>

      <p className="home-tagline">Savor the Moment, Taste the Magic.</p>

      <div className="home-buttons">
        <Link to="/menu" className="home-action">
          Explore Menu
        </Link>
        <Link to="/your-selection" className="home-action">
          Your Selection
        </Link>
      </div>

      <div className="home-auth-links">
        <Link to="/login" className="home-action">
          Login
        </Link>
        <Link to="/register" className="home-action">
          Register
        </Link>
      </div>
    </main>
  );
};

export default Home;
