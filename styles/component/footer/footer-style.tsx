import React from 'react';
import styled from 'styled-components';

export const FOOTER = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--primary);
`;
export const DIVFOOTER = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
export const DIVFOOTER_1 = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    .logo {
        margin-right: 178px;
    }
`;
export const DIVFOOTER1_RIGHT = styled.div`
    display: flex;
    align-items: flex-start;
    column-gap: 40px;
`;
export const FOOTER1_RIGHT_LIST = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;

    &:nth-child(1) {
        width: 140px;
    }
    &:nth-child(2) {
        width: 180px;
    }
`;
export const FOOTER1_RIGHT_ITEM = styled.li`
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 16px;

    &:nth-child(1) {
        font-weight: 600;
    }
`;

export const SPANFOOTER_2 = styled.span`
    color: #c0c0c0;
    font-family: 'Nunito', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`;

export const LISTICON_FOLLOW = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
`;
