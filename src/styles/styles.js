/** @format */

import styled, { createGlobalStyle, css } from "styled-components";

export const colorWhite = css`
  color: var(--white);
`;

export const backgroundWhite = css`
  background-color: var(--white);
`;

export const colorBlack = css`
  color: var(--black);
`;

export const backgroundBlack = css`
  background-color: var(--black);
`;

export const flex_center = css`
  display: flex;
  justify-content: center;
`;

export const flex_double_center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flex_between = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
    font-family: 'Source Sans Pro', Arial, sans-serif;
  }
  
  :root{
    --white: white;
    --black: black;
    --darkBlue: 3,37,65;
    --lightGrey: 227,227,227;
    --padding-tp-btm-40: 40px;
    --spaceMono : "Space Mono", monospace;
    --userscrollTrack1: 255,202,154;
    --imageBorderRadius: 8px;
    --lightGreen: 30,213,169;
    --lighterGreen: 192,254,207;
    --logoOrange: 253,193,112;
    --logoRed: 217,59,99;
    --imageBorderRadius: 8px;
    --accountLightBlue: 1,180,228;
    --margin-top-25: 25px;
    --margin-top-15: 15px;
  }


html::-webkit-scrollbar {
  width: .5em;
}

html::-webkit-scrollbar-track{
  background: var(--darkBlue);
}
 
html::-webkit-scrollbar-thumb {
  background-color: rgb(219,219,219);
  outline: none;
  border-radius: 6px;
}

.padding-top-bootom{
  padding-left: var(--padding-tp-btm-40);
  padding-right: var(--padding-tp-btm-40);
}

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-around {
    justify-content: space-around;
  }

  .justify-unset {
    justify-content: unset;
  }

  .align-center {
    align-items: center;
  }

  .align-unset {
    align-items: unset;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-unset {
    flex-direction: unset;
  }

  .display-none {
    display: none;
  }

  .display-flex {
    display: flex;
  }


.loading {
  display: flex;
  justify-content: center;
  height: 300px;
}

.loading--full-height {
  align-items: center;

}

.loading::after {
  content: "";
  width: 50px;
  height: 50px;
  border: 10px solid #dddddd;
  border-top-color: #009579;
  border-radius: 50%;
  transform: rotate(0.16turn);
  animation: loading 1s ease infinite;
}

@keyframes loading {
  /* Safari support */
  from {
    transform: rotate(0turn);
  }
  
  to {
    transform: rotate(1turn);
  }
}

`;
const with_sm = { minWidth: "576px", maxWidth: "540px" };
const with_md = { minWidth: "768px", maxWidth: "720px" };
const with_lg = { minWidth: "992px", maxWidth: "960px" };
const with_xl = { minWidth: "1200px", maxWidth: "1140px" };
const with_xx = { minWidth: "1320px", maxWidth: "1200px" };

const mediaScreenMin = (ct_inWith, width, children = null) => {
  return css`
    @media screen and (min-width: ${width.minWidth}) {
      ${ct_inWith && `max-width: ${width.maxWidth}`}
      ${children && children}
    }
  `;
};

const basicWidth = css`
  max-width: 1278px;
  width: 100%;
`;

const fluidWidth = css`
  max-width: 1400px !important;
  width: 100% !important;
`;

export const Container = styled.div`
  ${({ initalWith }) => (initalWith ? null : basicWidth)}
  margin-left: auto;
  margin-right: auto;

  ${mediaScreenMin(true, with_sm)};
  ${mediaScreenMin(true, with_md)};
  ${mediaScreenMin(true, with_lg)};
  ${mediaScreenMin(true, with_xl)};
  ${mediaScreenMin(true, with_xx)};
  ${({ fluid }) => (fluid ? fluidWidth : null)}
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const funCol = ({ sm, md, lg, xl, xx, auto, basic }) => {
  if (sm) {
    return mediaScreenMin(
      false,
      with_sm,
      css`
        width: calc(100% / 12 * ${sm});
      `
    );
  } else if (md) {
    return mediaScreenMin(
      false,
      with_md,
      css`
        width: calc(100% / 12 * ${md});
      `
    );
  } else if (lg) {
    return mediaScreenMin(
      false,
      with_lg,
      css`
        width: calc(100% / 12 * ${lg});
      `
    );
  } else if (xl) {
    return mediaScreenMin(
      false,
      with_xl,
      css`
        width: calc(100% / 12 * ${xl});
      `
    );
  } else if (xx) {
    return mediaScreenMin(
      false,
      with_xx,
      css`
        width: calc(100% / 12 * ${xx});
      `
    );
  } else if (auto === "auto") {
    return css`
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
      position: relative;
    `;
  } else {
    return css`
      width: calc(100% / 12 * ${basic});
    `;
  }
};

export const Col = styled.div`
  ${funCol}
`;
