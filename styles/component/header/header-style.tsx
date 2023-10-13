import React from 'react';
import styled from 'styled-components';

export const HEADER = styled.header`
    width: 100%;
    height: 128px;
    border: 0 0 1px 0;
`;

export const HEADER_FRAME = styled.div`
    width: 100%;
    height: 78px;
    padding: 15px 140px 15px 140px;
    border: 0px 0px 0.5px 0px;
    border-bottom: 0.5px solid #ffffff;
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

export const HEADER_SEARCH = styled.div`
    width: 656px;
    height: 44px;
    padding: 6px 6px 6px 21px;
    border-radius: 5px;
    border: 1px solid #ededed;
    background: #ededed;
    position: relative;
`;

export const HEADER_SEARCH_BUTTON = styled.button`
    width: 69px;
    height: 32px;
    top: 6px;
    left: 581px;
    border-radius: 5px;
    position: absolute;
    background-color: var(--primary);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HEADER_SEARCH_INPUT = styled.input`
    width: 81px;
    height: 24px;
    top: 9px;
    left: 21px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: justify;
    position: absolute;
    background-color: transparent;
    outline: none;
    box-shadow: none;
    font-family: 'Nunito', sans-serif;
`;

export const HEADER_NAVBAR = styled.div`
    width: 431px;
    height: 48px;
    display: flex;
    align-items: center;
    column-gap: 24px;
`;

export const HEARDER_BTN = styled.button`
    height: 48px;
    padding: 11px 14px 11px 14px;
    border-radius: 24px;
    border: 1px;
    column-gap: 8px;
    color: var(--primary);
    border: 1px solid var(--primary);
    display: flex;
    align-items: center;
`;

export const HEADER_FOOTER = styled.div`
    width: 100%;
    background-color: var(--primary);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HEADER_FOOTER_NAVBAR = styled.div`
    height: 26px;
    top: 90px;
    left: 455px;
    border-radius: 100px;
`;

export const LISTITEM = styled.nav`
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
`;

export const ITEMNAV = styled.div`
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: var(--white);
    margin-right: 50px;
    padding: 0;
    line-height: 20px;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        width: 0;
        background-color: var(--white);
        height: 2px;
        bottom: 0;
        transition: width ease-in-out 0.6s;
        left: 0;
        border-radius: 4px;
    }
    &:hover {
        ::before {
            width: 100%;
        }
    }

    &.active {
        ::before {
            width: 100%;
        }
    }
    [href] {
        display: flex;
        align-items: center;
    }
    [src] {
        margin: 2px 8px;
    }
`;

export const DIV_SEARCH = styled.div`
    position: absolute;
    width: 100%;
    height: 100px;
    background-color: #fff;
    z-index: 1000;
    top: 50px;
    left: 0;
    border-radius: 10px;
    box-shadow: var(--primary) 0px 0px 6px;
`;
