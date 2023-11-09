import { createGlobalStyle } from "styled-components";

import { colors, fonts, media } from "./variables";

const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    html,
    body {
    max-width: 100vw;
    overflow-x: hidden;
    font-size: 62.5%;
    }

    body {
    color: rgb(var(--foreground-rgb));
    background: ${colors.neutral100};
    margin-top: 102px;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    li {
        list-style: none;
    }

   

    h1,
    .h1{
        font-family: ${fonts.poppins};
        font-weight: 700;
        font-size: 5.8rem;
        line-height: 70px;
  

        @media ${media.tablet} {
            font-size: 4rem;
            line-height: 4.8rem;
        }

        @media ${media.mobile} {
            font-size: 3rem;
            line-height: 3.6rem;
        }
        
    }

    h2,
    .h2 {
        font-family: ${fonts.poppins};
        font-weight: 700;
        font-size: 3.6rem;
        line-height: 4.3rem;
        text-transform: uppercase;

        @media ${media.tablet} {
            font-size: 3rem;
            line-height: 3.6rem;
        }

        @media ${media.mobile} {
            font-size: 2.6rem;
            line-height: 3.1rem;
        }
    }

    h3,
    .h3 {
        font-family: ${fonts.poppins};
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 3.4rem;
        text-transform: uppercase;

        @media ${media.tablet} {
            font-size: 2.6rem;
            line-height: 3.1rem;
        }

        @media ${media.mobile} {
            font-size: 2.4rem;
            line-height: 2.9rem;
        }
    }

    h4,
    .h4 {
        font-family: ${fonts.poppins};
        font-weight: 400;
        font-size: 4rem;
        line-height: 4rem;
        text-transform: uppercase;

        @media ${media.tablet} {
            font-size: 3.6rem;
            line-height: 4rem;
        }

        @media ${media.mobile} {
            font-size: 3.2rem;
            line-height: 3.2rem;
        }
    }

    h5,
    .h5 {
        font-family: ${fonts.poppins};
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 2.6rem;
        text-transform: uppercase;
        @media ${media.tablet} {
            font-size: 2.2rem;
        }

        @media ${media.mobile} {
            font-size: 2rem;
        }
    }

    h6,
    .h6 {
        font-family: ${fonts.poppins};
        font-weight: 400;
        font-size: 2.7rem;
        line-height: 2.6rem;
        text-transform: uppercase;

        @media ${media.tablet} {
            font-size: 2.4rem;
            line-height: 2.6rem;
        }

        @media ${media.mobile} {
            font-size: 1.9rem;
            line-height: 2.6rem;
        }
    }

    

`;

export default GlobalStyles;
