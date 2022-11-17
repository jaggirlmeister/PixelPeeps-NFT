import React from "react";
import styles from './NavBar.module.css';

const Navbar = () => {

  return (
    <div className="nav_wrapper">
            <div className="inner inner_header">
        <div className={styles['logo']}>
          <img src="/pixelpeeps.svg" alt="Vercel Logo" width={180} />
        </div>

        <nav className="nav_header">
          <ul>
            <li className="menu_item">How it Works</li>
            <li className="menu_item">Mint!</li>
            <li className="menu_item">FAQ</li>
          </ul>
        </nav>
      </div>
    </div>

  );
};

export default Navbar; 