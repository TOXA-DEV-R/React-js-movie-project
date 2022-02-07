/** @format */

import { useEffect, useRef, useState } from "react";
import http from "../services/http";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    http
      .get(url)
      .then((data) => {
        if (isCurrent.current) {
          setData(data.data.results ? data.data.results : data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;
