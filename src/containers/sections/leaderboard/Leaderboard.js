/** @format */

import React, { memo } from "react";
import { Leaderboards, LeaderboardsInfo, LeaderboardsInfoAll } from "./styles";
import { Col, Container, Row } from "../../../styles/styles";
import List from "../../../components/sections/leaderboard/List";
import data from "./data";

const Leaderboard = memo(() => {
  return (
    <Leaderboards className="leaderboards" style={{ marginTop: "30px" }}>
      <Container
        fluid={true}
        className="leaderboards__container padding-top-bootom"
      >
        <LeaderboardsInfo className="leaderboards__info">
          <h2>Leaderboard</h2>
          <LeaderboardsInfoAll className="leaderboards__info-all">
            <p>
              <span></span> All Time Edits
            </p>
            <p>
              <span></span> Edits This Week
            </p>
          </LeaderboardsInfoAll>
        </LeaderboardsInfo>
        <Row>
          <Col md="6">
            {data.map((item, i) => (
              <List
                name={item.name}
                numberOne={item.numberOne}
                numberTwo={item.numberTwo}
                numberFirstWidth={item.numberFirstWidth}
                numberSecondWidth={item.numberSecondWidth}
                avatarColor={item.avatarColor}
                path={item.path}
                key={i}
              />
            ))}
          </Col>
          <Col md="6">
            {data.map((item, i) => (
              <List
                name={item.name}
                numberOne={item.numberOne}
                numberTwo={item.numberTwo}
                numberFirstWidth={item.numberFirstWidth}
                numberSecondWidth={item.numberSecondWidth}
                avatarColor={item.avatarColor}
                path={item.path}
                key={i}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Leaderboards>
  );
});

export default Leaderboard;
