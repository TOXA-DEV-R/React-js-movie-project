/** @format */

import styled from "styled-components";
import { css } from "styled-components";
import {
  flex_double_center,
  colorBlack,
  colorWhite,
  backgroundWhite,
} from "../../styles/styles";
const trans = css`
  transition: all 150ms ease-in;
`;

export const BasicMenue = styled.ul`
  ${flex_double_center}
  background-color: var(--white);
`;

export const MenuBlock = styled.li`
  position: relative;
  margin-left: 30px;
  padding: 15px 0;
  button {
    display: flex;
    align-items: center;
    ${colorBlack}
    font-size: 1em;
    font-weight: 400;
    border: none;
    background: transparent;
    cursor: pointer;
    span {
      display: inline-flex;
    }
  }
  &:first-of-type {
    margin-left: 0;
  }

  &.active {
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #00b4e4;
    }
  }
  &:hover {
    .menu__list {
      transform: scale(1) translateY(0);
    }
  }
`;

export const List = styled.ul`
  position: absolute;
  left: 0;
  top: 36px;
  z-index: 111;
  width: 150px;
  padding: 4px 0;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  ${backgroundWhite};
  transition: all 200ms ease-in;
  transform: scale(0) translateY(100px);
`;

export const Item = styled.li`
  padding: 5px 20px;
  ${backgroundWhite}
  transition: all 100ms ease-in;
  a {
    font-size: 0.9rem;
    ${colorBlack}
  }
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Info = styled.div`
  width: 100%;
`;

export const InfoTitle = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 2.1rem;
    font-weight: 700;
    a {
      ${colorWhite}
      ${trans}
      &:hover {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      margin-left: 7px;
      ${colorWhite}
      font-weight: 400;
      opacity: 0.8;
    }
  }
`;

export const InfosFacts = styled.div`
  margin-top: 3px;
  display: flex;
  align-items: center;
  .infos__certification {
    font-size: 0.9em;
    padding: 0.06em 4px 0.15em 4px !important;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    color: rgba(255, 255, 255, 0.6);
  }
  .infos__release {
    margin-left: 7px;
    font-size: 0.9em;
    ${colorWhite}
  }
  .infos__genres {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      margin-left: 7px;
      .infos__dot {
        width: 5px;
        height: 5px;
        margin-right: 7px;
        background-color: var(--white);
        display: inline-block;
        border-radius: 50%;
      }
      .infos__runtime {
        ${colorWhite}
        opacity: .8;
      }
      a {
        ${colorWhite}
        opacity: 1;
        ${trans}
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;

export const InfosActions = styled.ul`
  height: 68px;
  display: flex;
  align-items: center;
`;

export const InfosAction = styled.li`
  margin-left: 30px;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #032540;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:first-of-type {
    width: 114px;
    height: 100%;
    margin-left: 0;
    background-color: transparent;
    border-radius: none;
  }

  .infos__progressbar {
    width: 68px;
    height: 100%;
    display: inline-block;
    background-color: #081c22;
    border-radius: 50%;
    padding: 4px;
    .CircularProgressbar-text {
      font-size: 2em;
      font-weight: 700;
      fill: white;
    }
  }

  .infos__score {
    display: inline-block;
    ${colorWhite}
    font-size: .9em;
    font-weight: 600;
    margin-left: 7px;
  }

  .infos__action-icon {
    display: flex;
  }

  .infos__show {
    display: none;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #032540;
    li {
      ${flex_double_center}
      padding: 10px 0;
      ${colorWhite}
    }
  }

  .submenu__dropup {
    position: absolute;
    top: 43px;
    left: 50%;
    transform: translateX(-50%);
    display: none;
  }

  &:hover {
    .infos__show {
      display: block;
    }
    .submenu__dropup {
      display: block;
    }
  }

  &:nth-of-type(2) {
    .infos__show {
      width: 100px;
    }
  }

  &:nth-of-type(3) {
    .infos__show {
      width: 140px;
    }
  }

  &:nth-of-type(4) {
    .infos__show {
      width: 174px;
    }
  }

  &:nth-of-type(5) {
    .infos__show {
      width: 78px;
    }
  }
`;

export const AllInfo = styled.div`
  .all-infos__title {
    ${colorWhite}
    font-size: 1em;
    font-weight: 400;
    font-style: italic;
    opacity: 0.7;
  }
`;
export const AllInfosOverview = styled.div`
  h3 {
    ${colorWhite}
    font-weight: 600;
    font-size: 1.2em;
    margin-top: 10px;
  }
  p {
    margin-top: 10px;
    ${colorWhite}
    font-weight: 400;
    font-size: 0.9em;
  }
`;

export const AllInfosList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const AllInfosItem = styled.li`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  a {
    font-size: 0.9em;
    font-weight: 600;
    display: inline-block;
    ${colorWhite}
    opacity: 1;
    ${trans}

    &:hover {
      opacity: 0.7;
    }
  }

  span {
    margin-top: 5px;
    ${colorWhite}
    font-size: 0.9em;
    font-weight: 400;
  }
`;

export const Actor = styled.section``;

export const ActorsScroll = styled.div`
  display: flex;
  flex-direction: column;
  .movie-actors {
    font-weight: 600;
    font-size: 1.4em;
    margin-top: 20px;
  }
`;

export const ScrollList = styled.ul`
  padding: 20px 0;
  display: flex;
  position: relative;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background: var(--darkBlue);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(219, 219, 219);
    outline: none;
    border-radius: 6px;
  }

  &::after {
    content: "";
    width: 60px;
    height: 100%;
    position: absolute;
    z-index: 55;
    top: 0;
    right: 0%;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      #fff 100%
    );
    pointer-events: none;
  }
`;

export const Card = styled.li`
  width: 138px;
  margin-right: 20px;
  border: 1px solid rgba(var(--lightGrey), 1);
  border-radius: var(--imageBorderRadius);
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
`;

export const CardTop = styled.div`
  width: 100%;

  a {
    width: 100%;
    display: block;
    span {
      img {
        border-radius: var(--imageBorderRadius) var(--imageBorderRadius) 0 0;
      }
    }
  }
`;

export const CardBody = styled.div`
  padding: 10px;
  h3 {
    font-size: 0.9em;
    a {
      color: var(--black);
      opacity: 1;
      ${trans}
      &:hover {
        opacity: 0.7;
      }
    }
  }
  p {
    font-size: 0.9em;
  }
`;

export const AdditionalInfos = styled.div`
  margin-top: 20px;
  margin-left: 10px;
`;

export const Icons = styled.div`
  a {
    display: inline;
    margin-left: 15px;
  }
`;

const margin_top_25 = css`
  margin-top: var(--margin-top-25);
`;

const margin_top_15 = css`
  margin-top: var(--margin-top-15);
`;

export const SomeAdditionalInfo = styled.div`
  margin-left: 20px;
  ${margin_top_25}
  .additional-infos {
    &__fact {
      ${colorBlack}
      font-size: .9em;
      font-weight: 600;
    }

    &__status {
      ${margin_top_15}
      font-size: .9em;
      h4 {
        margin-top: 5px;
        font-weight: 600;
      }
    }

    &__company {
      ${margin_top_15}
      a {
        display: flex;
        margin-top: 6px;
      }
      h3 {
        font-size: 0.9em;
        font-weight: 600;
      }
    }

    &__type {
      ${margin_top_15}
      font-size: 0.9em;
      h3 {
        font-weight: 600;
      }
    }

    &__language {
      ${margin_top_15}
      font-size: 0.9em;
      h3 {
        font-weight: 600;
      }
      p {
        text-transform: capitalize;
      }
    }

    &__keywords {
      ${margin_top_15}
      font-size: 0.9em;
      border-bottom: 1px solid #d7d7d7;
      padding-bottom: 40px;
      h3 {
        font-weight: 600;
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-top: 10px;
          background-color: rgba(0, 0, 0, 0.1);
          border: 1px solid #d7d7d7;
          padding: 4px 10px;
          border-radius: 4px;
          margin-left: 5px;
          a {
            color: #000;
            display: flex;
          }

          &:first-of-type {
            margin-left: 0;
          }
        }
      }
    }
  }
`;
