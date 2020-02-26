import React from 'react';
import styled from 'styled-components';

export default function Hashtag({ className, hashtag, occurrences }) {
    return (
        <div className={className}>
            <div className="box">
                <div>
                    <p>{hashtag}</p>
                    <p>{occurrences}</p>
                </div>
            </div>
        </div>
    );
}

export const HashtagResult = styled(Hashtag)`
    width: 33.3%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    .box {
        width: 180px;
        height: 180px;
        background: linear-gradient(358.59deg, #BEC2C4 5.74%, rgba(255, 255, 255, 0) 49.68%), #807C7C;
        border-radius: 50%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .box > div {
        border-radius: 50%;
        position: relative;
        background-color: #fff;
        width: 150px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .box > div > p {
        font-size: 20px;
    }

    @media (max-width: 800px) {
        & {
            width: 50%;
        }
    }

    @media (max-width: 500px) {
        & {
            width: 100%;
        }
    }
`;