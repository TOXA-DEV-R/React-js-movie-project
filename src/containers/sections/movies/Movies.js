/** @format */

import { useState, useCallback } from "react";
import { Container } from "../../../styles/styles";
import TabsContentItems from "../../../components/sections/movies/TabsContentItems";
import { Movie, MovieBasic, MovieTab, MovieTabs, MovieTitle } from "./styles";
import tabsReducer from "./reducer";
import useFetchMovie from "../../../customHooks/useFetchMovie";

const Movies = ({ tabs, title, initialCategory, trailersBlock }) => {
  const [movieTabCont, setMovieTabCont] = useState(1);
  const [category, setCategory] = useState(initialCategory);
  const [controlFetch, setControlFetch] = useState(true);
  const [scrollLeft, setScrollLeft] = useState(false);
  const { data, loading } = useFetchMovie(controlFetch, category);

  const [moviesBgImage, setMoviesBgImage] = useState({
    backgroundImage:
      "url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg)",
  });

  const tabControl = useCallback((id, listName) => {
    setMovieTabCont(id);
    const { ctrol, categoryIn } = tabsReducer({ type: listName });
    setControlFetch(ctrol);
    setCategory(categoryIn);
  }, []);

  if (loading) {
    return <div className="loading loading--full-height"></div>;
  } else {
    return (
      <Movie
        className={scrollLeft ? "movie movie__scroll" : "movie"}
        style={trailersBlock && moviesBgImage}
      >
        <MovieBasic className="movie__basic" trailersBlock={trailersBlock}>
          <Container
            className="movie__container"
            style={trailersBlock && { paddingTop: "30px" }}
          >
            <MovieTitle className="movie__title" trailersBlock={trailersBlock}>
              <h2>{title}</h2>
            </MovieTitle>
            <MovieTabs
              className={`movie__tabs ${trailersBlock && "movie__tabs-wide"}`}
            >
              {tabs.map((tab) => (
                <MovieTab
                  key={tab.id}
                  className={`movie__tab ${
                    movieTabCont === tab.id ? "active" : ""
                  }`}
                  trailersBlock={trailersBlock}
                >
                  <button
                    type="button"
                    onClick={() => tabControl(tab.id, tab.listName)}
                  >
                    {tab.name}
                  </button>
                </MovieTab>
              ))}
            </MovieTabs>
          </Container>
          <Container initalWith={true} fluid={true}>
            <TabsContentItems
              moviesData={data}
              setMoviesBgImage={setMoviesBgImage}
              trailersBlock={trailersBlock}
              setScrollLeft={setScrollLeft}
            />
          </Container>
        </MovieBasic>
      </Movie>
    );
  }
};

export default Movies;
