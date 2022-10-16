import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  id?: string;
  title?: string;
  url?: string;
  remove: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Card: React.FC<CardProps> = ({ id, title, url, remove }) => {
  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${url})` }}>
      <span>{title}</span>

      <div className={styles.controller}>
        <button id={id} onClick={(e) => remove(e)}>
          Remove
        </button>
      </div>
    </div>
  );
};
