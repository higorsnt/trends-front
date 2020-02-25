import React from 'react';
import styled from "styled-components";

function Logo({ className }) {
    return (
        <div className={className}>
            <p>trends</p>
        </div>
    );
}

const LogoHome = styled(Logo)`
    margin-top: auto;
    text-align: center;

    & p {
        font-family: 'Courgette';
        font-size: 96px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
        color: black;
    }
`;

export default LogoHome;