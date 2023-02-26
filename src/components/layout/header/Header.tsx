import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <nav>
        <ul>
          <li>
            <Link to='/' className={styles.linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/dishscreen' className={styles.linkStyle}>
              Dishes
            </Link>
          </li>
          <li>
            <Link to='/sportsscreen' className={styles.linkStyle}>
              Sports
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
