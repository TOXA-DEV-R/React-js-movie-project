/** @format */

import { Fragment } from "react";
import { HeaderProvider } from "./containers/header/context";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import Main from "./containers/main/Main";
import Movie from "./containers/movie/index";
import { GlobalStyle } from "./styles/styles";
import { ContainersProvider } from "./containers/context";
import Searching from "./containers/searching/index";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <ContainersProvider>
        <GlobalStyle />
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/searching" exact component={Searching} />
          <Route path="/movie/:id" exact component={Movie} />
        </Switch>
        <Footer />
      </ContainersProvider>
    </Fragment>
  );
};

export default App;
