import { css } from "styled-components";

import { media, fonts } from "@/styles/variables";

export const paragraphLarge = css`
    font-family: ${fonts.dmSans};
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.8rem;

    @media ${media.tablet} {
        font-size: 1.8rem;
        line-height: 2.6rem;
    }

    @media ${media.mobile} {
        font-size: 1.8rem;
        line-height: 2.6rem;
    }
`;
export const paragraphMedium = css`
    font-family: ${fonts.dmSans};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;

    @media ${media.tablet} {
        font-size: 1.6rem;
        line-height: 2.1rem;
    }
`;
export const paragraphSmall = css`
    font-family: ${fonts.dmSans};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 3rem;

    @media ${media.tablet} {
        line-height: 1.7rem;
    }
`;
