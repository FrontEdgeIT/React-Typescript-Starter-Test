import React, { Fragment, useContext } from "react";
import { ContextValues, CardProps, DeleteItem } from "../../Types";
import styles from "./Card.module.scss";
import { InfoContext } from "../../../context/InfoContext";
import useFetch from "../../../hooks/useFetch";

interface Props {
  list: string;
}

export const Card: React.FC<Props> = ({ list }) => {
  let { data, setData, loading, setLoading, error, setError }: ContextValues<CardProps> = useContext(InfoContext);
  useFetch({ setData, setLoading, list, setError });

  const deleteItem = <T extends DeleteItem>({ e, setData, setLoading, list }: T): Promise<boolean | void> => {
    setLoading(true);
    let id = e.currentTarget.id;
    return fetch(`http://localhost:3000/${list}/${id}`, { method: "DELETE" })
      .then((result) => {
        setLoading(false);
        if (result.status === 200) {
          // useFetch({ setData, setLoading, list, setError });
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = ({ e, setData, setLoading, list, setError }: DeleteItem) => {
    let id = e.currentTarget.id;
    let itemDeleted = deleteItem({ e, setData, setLoading, list, setError });
    console.log(itemDeleted);
    
    itemDeleted.then(function (deleted) {
      if (deleted) {
        // When it has been deleted successfully.
        if (data) {
          setData(data.filter((item) => item.id !== Number(id)));
        }
      }
    });
  };

  return (
    <section className={styles.card}>
      <div className={styles.head}>{list}</div>
      <div className={styles.body}>
        <ul className={loading ? styles.loading : ""}>
          {error !== "" && <div className={styles.error}>{error}</div>}
          {data?.map((el) => {
            return (
              <Fragment key={el.id}>
                <li id={el.id.toString()}>
                  <div style={{ backgroundImage: `url("${el.url}")` }}></div>
                  <article>
                    <strong>{el.title}</strong>
                    <span>{el.description}</span>
                  </article>
                  <button onClick={(e) => handleDelete({ e, setData, setLoading, list, setError })} id={el.id.toString()}>
                    Delete
                  </button>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
