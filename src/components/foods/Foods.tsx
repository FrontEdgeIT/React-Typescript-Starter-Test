import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Foods.module.css";

export const Foods = () => {
  const [data, setData] = useState();
  const url: string = `${process.env.REACT_APP_API_BASEURL}`;

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(url);
      console.log(await response.json());
    };
  }, []);

  return <div className={styles.wrapper}></div>;
};
