import { useEffect } from "react";
import { GetList } from "../components/Types";
import axios from "axios";

const useFetch = <T extends GetList>({ setData, setLoading, list, setError }: T): void => {
  useEffect(() => {
    setLoading(true);
    setData(null);
    setError("");
    axios
      .get(`http://localhost:3000/${list}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong.");
      });
  }, []);
};

export default useFetch;
