import React, { useEffect, useState } from "react";
import styles from "./Foods.module.css";

interface FoodsProps {
  children?: JSX.Element | JSX.Element[];
}

export const Foods: React.FC<FoodsProps> = ({}) => {
  const [data, setData] = useState();
  const url: string = `${process.env.REACT_APP_API_BASEURL}/dishes`;
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(url);
      console.log(await response.json());
    };
    loadData();
  }, []);

  return <div className={styles.wrapper}></div>;
};

// import { Link } from "react-router-dom";
// import styles from "./Foods.module.css";

// export const Foods = () => {
//   const [data, setData] = useState();
//   const url: string = `${process.env.REACT_APP_API_BASEURL}/dishes`;

//   useEffect(() => {
//     const loadData = async () => {
//       const response = await fetch(url);
//       console.log(await response.json());
//     };

//     loadData();
//   }, []);

//   return <div className={styles.wrapper}></div>;
// };
