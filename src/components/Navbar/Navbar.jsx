import "./Navbar.css";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="logo">
    <h2>Funngro</h2>
</div>

      <ul className="nav-links">
        <li><a href="#">Earn</a></li>
        <li><a href="#">Stories</a></li>
        <li className="active"><a href="#">For Brands</a></li>
        <li><a href="#">Arcade</a></li>
        <li><a href="#">SheLancer</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
      </ul>

      <button className="download-btn">
        Download →
      </button>
    </motion.nav>
  );
}

export default Navbar;