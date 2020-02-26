import React from 'react';
import styled from "styled-components";
import { HomeLink } from './Link';

function Logo({ className }) {
    return (
        <div className={className}>
            <HomeLink to="/">
                <p id="logo">trends</p>
            </HomeLink>
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

const LogoHeader = styled(Logo)`
    margin-left: 20px;
    text-align: center;

    & p {
        font-family: 'Courgette';
        font-size: 45px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
        color: black;
    }

    @media (max-width: 770px) {
        & {
            display: none;
        }
    }
`;

export { LogoHome, LogoHeader };