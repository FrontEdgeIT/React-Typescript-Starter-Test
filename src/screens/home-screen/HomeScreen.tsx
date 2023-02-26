import React from "react";
import styles from "./HomeScreen.module.css";

interface Props {}

export const HomeScreen: React.FC<Props> = () => {
  return (
    <div className={"container " + styles.page}>
      <h3>Please choose dishes or sports from the menu.</h3>
    </div>
  );
};
