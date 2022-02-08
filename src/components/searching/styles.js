/** @format */

import styled from "styled-components";
import {
  backgroundWhite,
  colorBlack,
  flex_between,
  flex_double_center,
} from "../../styles/styles";

export const Results = styled.div`
  border: 1px solid rgba(var(--lightGrey), 1);
  border-radius: var(--imageBorderRadius);
  h3 {
    font-weight: 600;
    padding: 20px;
    color: #fff;
    background-color: rgba(var(--accountLightBlue), 1);
    border-radius: var(--imageBorderRadius) var(--imageBorderRadius) 0 0;
  }
`;
export const List = styled.ul`
  padding: 7px 0;
  ${backgroundWhite}
`;

export const ListItem = styled.li`
  ${flex_between}
  padding: 10px 20px;
  font-size: 0.9em;
  line-height: 1.4em;
  transition: all 100ms ease-in;
  a {
    ${colorBlack}
  }

  &:hover {
    background: rgba(0, 0, 0, 0.08);

    span {
      ${backgroundWhite}
    }
  }

  &.active {
    font-weight: 600;
    background: rgba(0, 0, 0, 0.08);
    span {
      ${backgroundWhite}
    }
  }

  span {
    ${flex_double_center}
    font-size: 0.8em;
    font-weight: 300;
    ${colorBlack}
    background-color: rgba(0, 0, 0, 0.08);
    padding: 0px 10px;
    border-radius: 8px;
    transition: all 100ms ease-in;
  }
`;

export const ResultList = styled.div``;

export const Card = styled.div`
  height: 143px;
  display: flex;
  margin-top: 20px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(var(--lightGrey), 1);
  border-radius: var(--imageBorderRadius);
  background-color: #fff;
  &:first-of-type {
    margin-top: 0;
  }
`;

export const CardTop = styled.div`
  width: 94px;
  height: 100%;
  a {
    width: 100%;
    height: 100%;
    display: block;
    img {
      border-radius: var(--imageBorderRadius) 0 0 var(--imageBorderRadius);
    }
  }
`;

export const CardBody = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: 1.1em;
    line-height: 1.1em;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    a {
      ${colorBlack}
    }
  }
  span {
    display: block;
    margin-top: 7px;
    font-size: 0.9em;
    line-height: 0.9em;
    color: #999;
  }
  p {
    font-size: 1em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
