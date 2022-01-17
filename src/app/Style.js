import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 576px) {
    .container {
      max-width: 100%;
      width: unset !important;
    }
  }
  @media screen and (min-width: 576px) {
    .container {
      max-width: 540px;
    }
    @for $i from 1 through 12 {
      .col-sm-#{$i} {
        width: #{100% / 12 * $i};
      }
    }
  }
  @media screen and (min-width: 768px) {
    .container {
      max-width: 720px;
    }
    @for $i from 1 through 12 {
      .col-md-#{$i} {
        width: #{100% / 12 * $i};
      }
    }
  }
  @media screen and (min-width: 992px) {
    .container {
      max-width: 960px;
    }
    @for $i from 1 through 12 {
      .col-lg-#{$i} {
        width: #{100% / 12 * $i};
      }
    }
    .align-md-unset {
      align-items: unset;
    }
  }
  @media screen and (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
    @for $i from 1 through 12 {
      .col-xl-#{$i} {
        width: #{100% / 12 * $i};
      }
    }
  }
  @media screen and (min-width: 1320px) {
    .container {
      max-width: 1200px;
    }
    @for $i from 1 through 12 {
      .col-xx-#{$i} {
        width: #{100% / 12 * $i};
      }
    }
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
    position: relative;
  }

  @for $i from 1 through 12 {
    .col-#{$i} {
      width: #{100% / 12 * $i};
    }
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

  .source__sans_pro{
    font-family: 'Source Sans Pro', Arial, sans-serif;
  }
`;
export default GlobalStyle;
