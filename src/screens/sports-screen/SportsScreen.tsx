import React from "react";
import { Card } from "../../../src/components/layout/card/Card";
import styles from "./SportsScreen.module.css";

interface Props {}

export const SportsScreen: React.FC<Props> = () => {
  return (
    <div className={"container " + styles.page}>
      <Card list='sports' />
    </div>
  );
};
