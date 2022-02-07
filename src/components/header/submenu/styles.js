/** @format */

import styled from "styled-components";
import { css } from "styled-components";

export const submenuCss = css`
  padding: 2px 0;
  border: 1px solid rgba(33, 37, 41, 0.15);
  border-radius: 4px;
  background-color: var(--white);
  li {
    padding: 6px 19px;
    margin: 0;
    display: block;
  }
`;

export const submenuDropup = css`
  .submenu__dropup {
    position: absolute;
    top: -17px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SubmenuContainer = styled.aside`
  position: absolute;
  z-index: 1001;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Dropup = styled.span`
  position: absolute;
  top: -17px;
  left: 50%;
  transform: translateX(-50%);
`;

export const SubmenuAddList = styled.ul`
  ${submenuCss}
  ${submenuDropup}
`;

export const SubmenuAddItem = styled.li`
  &:hover {
    background-color: rgb(3, 37, 65);
    a {
      color: var(--white);
    }
  }
  a {
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.8em;
    font-weight: 400;
  }
`;

export const SubmenuNotificationList = styled.ul`
  ${submenuCss}
  width: 300px;
  &__text {
    p {
      font-size: 1em;
      font-weight: 400;
      color: var(--black);
      a {
        font-size: 1em;
        color: #000;
        opacity: 0.6;
        text-decoration: underline;
      }
    }
  }
  ${submenuDropup}
`;

export const SubmenuNotificationItem = styled.li`
  margin-bottom: 7px;
  h2 {
    font-size: 1.3em;
    font-weight: 700;
    color: #000;
    span {
      color: #666;
      font-weight: 600;
    }
  }
`;

export const SubmenuUser = styled.div`
  ${submenuCss}
  ${submenuDropup}
  width: 178px;
`;

export const SubmenuUserProfile = styled.div`
  padding: 16px 0 16px 0;
  padding-left: 20px;
  h2 {
    font-size: 1rem;
    font-weight: 600;
    a {
      color: var(--black);
    }
  }
  h2 + a {
    font-size: 0.8em;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const SubmenuUserGruop = styled.div`
  border-top: 1px solid rgba(33, 37, 41, 0.15);
  a {
    display: block;
    padding-left: 20px;
    color: var(--white);
    padding: 6px 20px;
    font-size: 0.9em;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
      color: var(--white);
      background-color: rgba(var(--darkBlue), 1);
    }
  }
`;
