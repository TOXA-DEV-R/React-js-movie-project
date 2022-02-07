/** @format */

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  MTabsContentCards,
  MovieTabCard,
  MovieTabCardTop,
  MovieTabCardBottom,
  TabCardPlay,
} from "./styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import TabCardInside from "./TabCardInside";
import { BsFillPlayFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import useFetch from "../../../customHooks/useFetch";

const KEY = "2dd08287b759101888b5a20c23399375";

const TabsContentItems = ({
  moviesData,
  setMoviesBgImage,
  trailersBlock,
  setScrollLeft,
}) => {
  const history = useHistory();
  const [idCt, setIdCt] = useState(568124);
  const [youtubeCt, setYoutube] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const scrollLeftCard = useRef(null);
  const { data } = useFetch(`/3/movie/${idCt}/videos?api_key=${KEY}`);

  const moviesBgControl = useCallback(
    (id, bg_path) => {
      setMoviesBgImage({
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces${bg_path})`,
      });
    },
    [setMoviesBgImage]
  );

  const scrollHandle = (e) => {
    if (e.target.scrollLeft > 70) {
      setScrollLeft(true);
    } else {
      setScrollLeft(false);
    }
  };

  useEffect(() => {
    if (scrollLeftCard) {
      scrollLeftCard.current.addEventListener("scroll", scrollHandle);
    }
  });

  useEffect(() => {
    setYoutube(data.map((item) => item.key));
  }, [idCt, data]);

  return (
    <MTabsContentCards
      className={`movie__tabs-content-items ${trailersBlock && "wide-tabs"}`}
      ref={scrollLeftCard}
    >
      {moviesData.map((item, i) => {
        const { id, poster_path, title, release_date, vote_average } = item;
        const { first_air_date } = item;
        const voteAverage = Math.ceil(vote_average * 10);
        const voteAverageText =
          `${Math.ceil(vote_average * 10)}`.replace(".", "") + "%";

        const progressControlColor = () => {
          if (voteAverage >= 70) {
            return buildStyles({
              pathColor: "#46d174",
              trailColor: "#204e2c",
            });
          } else {
            return buildStyles({
              pathColor: "#d2d531",
              trailColor: "#504a13",
            });
          }
        };

        return (
          <MovieTabCard
            className={`${
              trailersBlock
                ? "movie__tabs-cotent-item tab-card wide-card"
                : "movie__tabs-cotent-item tab-card"
            }`}
            key={id}
          >
            <MovieTabCardTop className="tab-card__top">
              <TabCardInside />
              {trailersBlock && (
                <TabCardPlay
                  className="tab-card__play"
                  onMouseOver={() => moviesBgControl(id, poster_path)}
                  onClick={() => {
                    if (!trailersBlock) history.push(`/movie/:${id}`);
                    if (trailersBlock) {
                      setOpen(true);
                      setIdCt(id);
                    }
                  }}
                >
                  <button type="button">
                    <BsFillPlayFill size={70} color="white" />
                  </button>
                </TabCardPlay>
              )}
              {trailersBlock ? (
                <LazyLoadImage
                  src={
                    (trailersBlock
                      ? "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/"
                      : "https://www.themoviedb.org/t/p/w220_and_h330_face/") +
                    poster_path
                  }
                  alt={title}
                  effect="blur"
                  delayTime={30}
                />
              ) : (
                <Link to={{ pathname: `movie/:${id}`, state: { id } }}>
                  <LazyLoadImage
                    src={
                      (trailersBlock
                        ? "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/"
                        : "https://www.themoviedb.org/t/p/w220_and_h330_face/") +
                      poster_path
                    }
                    alt={title}
                    effect="blur"
                    delayTime={30}
                  />
                </Link>
              )}
              {trailersBlock ? null : (
                <div className="progressbar">
                  <CircularProgressbar
                    strokeWidth={6}
                    value={voteAverage}
                    text={voteAverageText}
                    styles={progressControlColor()}
                  />
                </div>
              )}
            </MovieTabCardTop>
            <MovieTabCardBottom className="tab-card__bottom">
              <h2>
                <Link to={`/move/:${id}`}>{title}</Link>
              </h2>
              <p>
                {(release_date && release_date) ||
                  (first_air_date && first_air_date)}
              </p>
            </MovieTabCardBottom>
          </MovieTabCard>
        );
      })}
      {youtubeCt[0] && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={youtubeCt[0]}
          onClose={() => setOpen(false)}
        />
      )}
    </MTabsContentCards>
  );
};

export default TabsContentItems;
