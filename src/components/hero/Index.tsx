import { paragraphLarge } from "@/styles/Type";
import React from "react";
import styled from "styled-components";

const HeroCont = styled.section`
    position: relative;
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    background: rgb(111, 205, 228);
    background: linear-gradient(
        87deg,
        rgba(111, 205, 228, 1) 0%,
        rgba(111, 205, 228, 0.8071603641456583) 49%,
        rgba(191, 191, 191, 0.4962359943977591) 100%
    );

    .hero {
        &__background-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 600px;
            object-fit: cover;
            z-index: -1;
        }

        &__text-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 100px;
            margin-left: 150px;
        }

        &__heading {
            font-size: 7.9rem;
            line-height: 7.9rem;
        }

        &__subheading {
            ${paragraphLarge}
        }
    }
`;

const Hero = () => {
    return (
        <HeroCont>
            <img
                src="/images/bedroom_reno.jpg"
                alt="home partially renovated"
                className="hero__background-img"
            />
            <div className="hero__text-container">
                <h1 className="hero__heading">
                    Renovation
                    <br /> Estimator
                </h1>
                <p className="hero__subheading">
                    Manage all your projects and plans, all in one place
                </p>
            </div>
        </HeroCont>
    );
};

export default Hero;
