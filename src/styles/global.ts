import { memo } from "react";
import { createGlobalStyle } from "styled-components";

export default memo(createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: var(--fonts) !important;
  }

  html, body, #root {
    height: 100vh;
    width: 100%;
    position: relative;
    background: var(--color-background);
    font-family: var(--fonts) !important;
    scroll-behavior: smooth;
  }

  :root {
    font-size: 16px !important;
    font-display: swap;

    --color-background: #FFFFFF;
    --color-primary: #FF7417;
    --color-primary-dark: #f26202;
    --color-success: #21ba45;
    --color-success-dark: #10aa30;
    --color-error: #dd0000;
    --color-error-dark: #bb0000;
    --color-secondary: #000;
    --color-title: rgba(0, 0, 0, 0.7);
    --color-text: #222;

    --border-radius: 4px;
    --medium-border-radius: 10px;
    --big-border-radius: 20px;
    --transition: .2s ease-in-out;
    --fast-transition: .1s ease-in-out;

    --fonts: Roboto , 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
    /* --fonts: Montserrat , 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important; */

    --font-big-size: 3.2rem;
    --font-medium-size: 48px;
    --font-big-title-size: 2.5rem;
    --font-title-size: 1.5rem;
    --font-small-title-size: 1.2rem;
    --font-big-subtitle-size: 1.5rem;
    --font-subtitle-size: 1rem;
    --font-big-text-size: 1.2rem;
    --font-text-size: 0.9rem;

    @media screen and (min-width: 1600px)  {
      --font-big-size: 70px;
      --font-big-text-size: 24px;
      --font-big-subtitle-size: 36px;
    }

    @media screen and (min-width: 600px) and (max-width: 1400px){
      --font-big-size: 2.5rem;
      --font-big-text-size: 1rem;
      --font-big-subtitle-size: 1.5rem;
    }

    @media screen and (max-width: 600px) {
      --font-big-size: 2.2rem;
      --font-medium-size: 32px;
      --font-big-title-size: 2rem;
      --font-big-subtitle-size: 24px;
      --font-title-size: 1.2rem;
      --font-subtitle-size: 0.9rem;
      --font-big-text-size: 1rem;
      --font-text-size: 0.8rem;
    }
  }
`);
