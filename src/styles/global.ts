import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url(https://cdn.ncsoft.com/dependencies/fonts/fontawesome/5.6.3/css/all.min.css);
@import url(https://fonts.ncwest.ncsoft.com/adelon/fonts.css?v=1.0);
@import url(https://fonts.ncwest.ncsoft.com/dinnextpro/fonts.css);
@import url(https://fonts.ncwest.ncsoft.com/includes/fonts/fonts.css);
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);

  *{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    display: block;
    color: #b1b1b1;
    /* background-color: #1c1c1c; */
    font-family: 'AdelonBook', 'Times New Roman';
  }

  body, html {
    padding: 0;
  }

  html, body, #root {
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: auto;
    min-height: 100%;
    max-width: 100%;
    position: relative;
  }

  @media (min-width: 1024px) {
    html, body, #app {
      overflow-x: visible; 
    } 
  }
  
`;