import React from 'react';

import styled from 'styled-components';

export const DIVBODY = styled.div`
    width: 100%;
    background-color: var(--white);
    padding-top: 30px;
`;
//Container 1
export const DIVCONTAIN1 = styled.div`
    width: 100%;
    margin-bottom: 30px;
    display: flex;
`;

export const DIV8_CONTAIN1 = styled.div`
    margin-left: 20px;
    padding-right: 180px;

    img[src] {
        padding-right: 0;
    }
`;

export const DIV8_HEADING_CONTAIN1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const DIV8_HEADING_CONTAIN1_H1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: var(--primary);
    font-weight: 700;
    font-size: 60px;
    padding-bottom: 6px;
    line-height: 75px;
`;

export const DIV8_HEADING_CONTAIN1_SPAN = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 6px;
`;

export const DIV8_HEADING__CONTAIN1_UL = styled.ul`
    padding: 0;
    margin: 0;
    color: var(--primary);
    display: flex;
`;

export const DIV8_HEADING_CONTAIN1_LI = styled.li`
    border-right: 1px solid var(--primary);
    padding: 2px 8px 2px 0px;
    margin-right: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;

    &:last-child {
        border: none;
    }
`;

export const DIV8_BUTTON_CONTAIN1 = styled.button`
    background: linear-gradient(180deg, #f05f5f 0%, #b33030 100%);
    color: var(--white);
    width: 166px;
    padding: 8px 16px 8px 16px;
    border-radius: 25px;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
`;

export const DIV8_CONATINER_CONTAIN1 = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DIV8_CONTAINER_CONTAIN1_BRANDS = styled.div`
    border: 1px solid #e6d3ff;
    border-radius: 20px;
    padding: 18px 12px 18px 12px;
    color: #e6d3ff;
    box-shadow: 0px 24px 34px -20px #e0c8ff80;
    background-color: #fff;
    margin-right: 14px;
    margin-bottom: 20px;
    position: relative;
    &::before {
        content: 'Sự kiện khác';
        position: absolute;
        background-color: #fff;
        color: #676668;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        font-family: 'Poppins', sans-serif;
        top: -12px;
        left: 30px;
        width: 132px;
        text-align: center;
    }
    div {
        display: flex;
        justify-content: space-between;
    }
`;
/*background: linear-gradient(180deg, #F05F5F 0%, #B33030 100%);
 */
export const DIV8_CONTAINER_CONTAIN1_BUTTON = styled.button`
    width: 166px;
    padding: 8px 16px 8px 16px;
    border-radius: 25px;
    text-align: center;
    background: linear-gradient(180deg, #f05f5f 0%, #b33030 100%);
    position: relative;
    z-index: 1;

    &::before {
        position: absolute;
        display: block;
        width: 99%;
        content: '';
        background-color: white;
        height: 95%;
        top: 0.6px;
        left: 1px;
        border-radius: 25px;
    }
`;

export const DIV8_CONTAINER_CONTAIN1_BUTTONTEXT = styled.span`
    display: block;
    z-index: 100;
    position: relative;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    color: transparent;
    background-image: linear-gradient(180deg, #f05f5f 0%, #b33030 100%);
    -webkit-background-clip: text;
`;
// container 2

export const DIVCONTAIN2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
    padding-top: 42px;
`;

export const DIV_HEAD_CONTAIN2 = styled.div`
    font-size: 22px;
    line-height: 36px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: var(--primary);
    display: block;
    text-align: center;
    width: 100%;
    position: relative;

    &::before {
        position: absolute;
        content: '';
        background-color: rgba(248, 183, 0, 1);
        width: 154px;
        height: 2px;
        transform: rotate3d(0, 0, -1, 2deg);
        bottom: 0px;
        left: 670px;
    }
`;

export const DIV_CONTAINER_CONTAIN2 = styled.div`
    width: 100%;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DIV_CONTAINER_LEFT_CONTAIN2 = styled.div``;

export const DIV_CONTAINER_RIGHT_CONTAIN2 = styled.div`
    position: relative;
`;
