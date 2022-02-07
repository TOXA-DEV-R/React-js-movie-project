/** @format */

import { useEffect, useRef, useState } from "react";
import http from "../services/http";

const KEY = "2dd08287b759101888b5a20c23399375";

const useFetchMovie = (controlFetch = true, category = "popular", page = 1) => {
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
      .get(
        controlFetch
          ? `/3/movie/${category}?api_key=${KEY}&language=en-US&page=${page}`
          : `/3/movie/804435/recommendations?api_key=${KEY}&language=en-US&page=${page}`
      )
      .then((data) => {
        if (isCurrent.current) {
          setData(data.data.results);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [controlFetch, category, page]);

  return { data, loading };
};

export default useFetchMovie;
