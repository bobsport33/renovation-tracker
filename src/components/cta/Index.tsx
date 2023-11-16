import React from "react";
import styled from "styled-components";

import { colors } from "@/styles/variables";

const CTACont = styled.section`
    margin: 80px auto;
    max-width: 800px;
    padding: 30px;
    background-color: ${colors.neutral200};
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CTA = () => {
    return (
        <CTACont>
            <h2 className="cta__heading">Sign Up</h2>
            {/* Add button, like the look of iconButton here, but need to get an svg for signup */}
        </CTACont>
    );
};

export default CTA;
