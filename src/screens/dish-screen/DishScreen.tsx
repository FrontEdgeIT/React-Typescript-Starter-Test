import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/Card";

import styles from "./DishScreen.module.css";

interface Food {
  id: string;
  title: string;
  url: string;
}

interface DishScreenProps {
  children?: JSX.Element | JSX.Element[];
}

export const DishScreen: React.FC<DishScreenProps> = ({}) => {
  const url: string = `${process.env.REACT_APP_API_BASEURL}/dishes`;

  const [data, setData] = useState<Food[]>([]);

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
    const data: Food[] = await response.json();
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
