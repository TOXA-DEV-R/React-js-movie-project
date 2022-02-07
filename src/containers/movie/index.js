/** @format */
import Menu from "../../components/movie/Menu";
import Infos from "../../components/movie/Info";
import Actors from "../../components/movie/Actors";
import AllInfos from "../../components/movie/AllInfos";
import { Col, Container, Row } from "../../styles/styles";
import { Movie, MovieImg } from "./styles";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useHistory } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";

const KEY = "2dd08287b759101888b5a20c23399375";

const Index = () => {
  const history = useHistory();
  const ONE_MOVEI_ID = history.location.state.id;

  const { loading, data } = useFetch(
    `/3/movie/${ONE_MOVEI_ID}?api_key=${KEY}&language=en-US`
  );

  const {
    production_companies,
    backdrop_path,
    original_language,
    title,
    release_date,
    vote_average,
    poster_path,
    overview,
    tagline,
    genres,
    id,
  } = data;

  const voteAverage = Math.ceil(vote_average * 10);
  const voteAverageText =
    `${Math.ceil(vote_average * 10)}`.replace(".", "") + "%";

  if (loading) {
    return <div className="loading loading--full-height"></div>;
  } else {
    return (
      <Movie className="movie">
        <Menu />
        <Container fluid={true} className="movie__container">
          <div className="movie__line-gradient">
            <Row>
              <Col md="3">
                <MovieImg className="movie__img">
                  <LazyLoadImage
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
                    alt={title}
                    effect="blur"
                    delayTime={30}
                  />
                </MovieImg>
              </Col>
              <Col md="9" style={{ paddingLeft: "17px" }}>
                <Infos
                  title={title}
                  release_date={release_date}
                  voteAverage={voteAverage}
                  voteAverageText={voteAverageText}
                  genres={genres}
                  inId={id}
                />
                <AllInfos overview={overview} tagline={tagline} />
              </Col>
            </Row>
          </div>
          <div className="movie__bg">
            <LazyLoadImage
              src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`}
              alt={title}
              effect="blur"
              delayTime={30}
            />
          </div>
        </Container>
        <Actors
          production_companies={production_companies}
          original_language={original_language}
        />
      </Movie>
    );
  }
};

export default Index;
