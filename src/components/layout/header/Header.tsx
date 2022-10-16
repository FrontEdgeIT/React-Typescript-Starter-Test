import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/foods">Foods</Link>
            </li>

            <li>
              <Link to="/users">Cars</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
