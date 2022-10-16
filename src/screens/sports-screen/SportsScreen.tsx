import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/Card";
import * as API from "../../fetch/feth";
import styles from "./SportsScreen.module.css";

/**
 *  Interface for a sport.
 */
interface Sport {
  id: string;
  title: string;
  url: string;
}

/**
 * Props. If we for some reason would like to make this comp more advanced.
 */
interface SportsScreenProps {
  children?: JSX.Element | JSX.Element[];
}

export const SportsScreen: React.FC<SportsScreenProps> = ({}) => {
  // Url to the DB "api"
  const url: string = `${process.env.REACT_APP_API_BASEURL}/sports`;

  // The data that will be displayed.
  const [data, setData] = useState<Sport[]>([]);

  // If data isn't loaded I would've used this to render a "loading" screen.
  const [loaded, setLoaded] = useState<boolean>(false);

  // If we have any error during our fetch calls.
  const [error, setError] = useState<boolean>(false);
  /**
   * Calles custom API file to delete an item from the DB.
   * @param event - button click event.
   */
  const remove = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // Create the url with the id of the item to be deleted.
    const removeUrl: string = `${url}/${event.currentTarget.id}`;

    // Call the API to make a DELETE request to the DB.
    await API.deleteItem(removeUrl);
    // Load the updated data again.
    await loadData();
  };

  /**
   * Func to load the data from the DB-api.
   */
  const loadData = async () => {
    await API.fetchData(url, setData);
    setLoaded(true);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {!error ? (
        <div className={styles.wrapper}>
          {loaded ? (
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
            })
          ) : (
            //This could be made into a loading component.
            <div>
              <p>Loading..</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>Something went wrong</p>
        </div>
      )}
    </div>
  );
};
