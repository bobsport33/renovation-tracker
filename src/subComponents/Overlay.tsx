import React from "react";
import { styled } from "styled-components";

const OverlayCont = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
`;

const Overlay = () => {
    return <OverlayCont></OverlayCont>;
};

export default Overlay;
