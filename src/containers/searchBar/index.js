/** @format */

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { Block, Form, Icon, Input, Section } from "./styles";
import { useHistory } from "react-router-dom";
import { Container } from "../../styles/styles";
import useScrollListener from "../header/useScrollListener";
import Sticky from "react-stickynode";
import { useGlobalContext } from "../../context/context";

const Index = () => {
  const [searchingUpAndDown, setSearchingUpAndDown] = useState(64);
  const scroll = useScrollListener();
  const history = useHistory();
  const { globalSearchText } = useGlobalContext();
  const [inputValue, setInputValue] = useState(globalSearchText);

  const submitHandle = (event) => {
    event.preventDefault();
    if (inputValue.length < 1) {
      alert("Enter value, please");
    } else {
      history.push({ pathname: `/searching`, state: { inputValue } });
    }
  };

  useEffect(() => {
    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      setSearchingUpAndDown(0);
    } else {
      setSearchingUpAndDown(64);
    }
  }, [scroll.lastY, scroll.y]);

  return (
    <Sticky innerZ={1000} top={searchingUpAndDown}>
      <Block className={`search-bar__block`}>
        <Container fluid={true} className="search-bar__container">
          <Section className="search-bar__section">
            <Form className="search-bar__form" onSubmit={submitHandle}>
              <Input
                type="input"
                name="search"
                value={inputValue}
                placeholder="Search for a movie, tv show,person..."
                onChange={(e) => setInputValue(e.target.value)}
                className="search-bar__input"
              />
              <Icon className="search-bar__icon">
                <FaSearch size={15} />
              </Icon>
              <Icon
                className="search-bar__icon"
                onClick={() => setInputValue("")}
              >
                <GrFormClose size={18} />
              </Icon>
            </Form>
          </Section>
        </Container>
      </Block>
    </Sticky>
  );
};

export default Index;
