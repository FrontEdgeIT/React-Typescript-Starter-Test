import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/Card";

import styles from "./SportsScreen.module.css";

interface Sport {
  id: string;
  title: string;
  url: string;
}

interface SportsScreenProps {
  children?: JSX.Element | JSX.Element[];
}

export const SportsScreen: React.FC<SportsScreenProps> = ({}) => {
  const url: string = `${process.env.REACT_APP_API_BASEURL}/sports`;

  const [data, setData] = useState<Sport[]>([]);

  const [loaded, setLoaded] = useState(false);

  const remove = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const response = await fetch(`${url}/${event.currentTarget.id}`, {
        method: "DELETE",
      });

      await loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const loadData = async () => {
    const response = await fetch(url);
    const data: Sport[] = await response.json();
    console.log(data);
    setData(data);
    setLoaded(true);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {loaded &&
        data.map((data, key) => {
          return (
            <Card
              id={data.id}
              title={data.title}
              url={data.url}
              key={key}
              remove={remove}
            ></Card>
          );
        })}
    </div>
  );
};
