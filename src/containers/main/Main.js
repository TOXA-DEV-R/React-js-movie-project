/** @format */

import React, { Fragment } from "react";
import Leaderboard from "../sections/leaderboard/Leaderboard";
import Movies from "../sections/movies/Movies";
import Searching from "../../components/sections/searching/Searching";
import tabs from "./data";

const Main = () => {
  return (
    <Fragment>
      <main>
        <Searching />
        <Movies
          title={"What's Popular"}
          tabs={tabs.popular}
          initialCategory="popular"
        />
        <Movies
          title={"Free To Watch"}
          tabs={tabs.free}
          initialCategory="upcoming"
        />
        <Movies
          title={"Latest Trailers"}
          tabs={tabs.trailers}
          initialCategory="now_playing"
          trailersBlock={true}
        />
        <Movies
          title={"Trending"}
          tabs={tabs.trending}
          initialCategory="804435/recommendations"
        />
        <Leaderboard />
      </main>
    </Fragment>
  );
};

export default Main;
