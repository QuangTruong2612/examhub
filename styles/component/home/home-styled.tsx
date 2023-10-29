import styled from 'styled-components';

export const CONTAINER = styled.div`
    width: 100%;
    padding-top: 20px;
`;
// container1
export const CONTAINER1 = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
`;

export const CONTAINER1_IMG = styled.div`
    margin-right: 18px;
`;

export const CONTAINER1_RIGHT = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
`;

export const CONTAINER1_HEADING = styled.span`
    color: var(--primary);
    font-family: 'Poppins', sans-serif;
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: 75px;
    margin-bottom: 6px;
`;

export const CONTAINER1_INTRO = styled.span`
    color: var(--neutral-black);
    font-family: 'Poppins', sans-serif;
    font-size: var(--font-size-primary);
    font-style: normal;
    font-weight: 400;
    line-height: 31.5px;
    margin-bottom: 6px;
`;

export const CONTAINER1_INTRO_LIST = styled.ul`
    padding: 0;
    margin: 0px 0px 20px 0px;
    list-style: none;
    display: flex;

    li {
        font-size: 12px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        line-height: 20px;
        color: var(--primary);
        padding-right: 8px;
        margin-right: 6px;
        border-right: 1px solid var(--primary);

        &:last-child {
            border: none;
        }
    }
`;

export const CONTAINER1_JOIN = styled.div`
    margin-bottom: 20px;
`;
export const CONTAINER1_JOIN_BTN = styled.button`
    padding: 10px 22px;
    border-radius: 9999px;
    background: linear-gradient(180deg, #f05f5f 0%, #b33030 100%);
    color: var(--white);
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: var(--font-size-primary);
    font-style: normal;
    font-weight: 700;
    line-height: 31.5px; /* 150% */
`;

export const CONTAINER1_DIFFEVENT = styled.div`
    width: 480px;
    padding: 20px 12px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 16px;
    border: 1px solid #e6d3ff;
    background: var(--white);
    box-shadow: 0px 20px 30px -16px rgba(224, 200, 255, 0.5);
    position: relative;
    margin-bottom: 12px;

    &::before {
        position: absolute;
        content: 'Sự kiện khác';
        width: 108px;
        height: 19px;
        background-color: var(--white);
        text-align: center;
        color: var(--secondary-gray);
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
        top: -14px;
        left: 36px;
    }
`;

export const CONTAINER1_SEEMORE = styled.div`
    button {
        display: flex;
        padding: 10px 17px;
        align-items: flex-start;
        border-radius: 9999px;
        border: 1px solid #f05f5f;
    }

    span {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: var(--font-size-primary);
        font-style: normal;
        font-weight: 700;
        line-height: 31.5px; /* 150% */
        background: linear-gradient(180deg, #f05f5f 0%, #b33030 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
// container2
export const CONTAINER2 = styled.div`
    width: 100%;
    padding-top: 20px;
    margin-bottom: 20px;
`;

export const CONTAINER2_HEADER = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    div {
        width: 650px;
        display: flex;
        height: 32px;
        flex-direction: column;
        justify-content: center;

        span {
            color: var(--primary);
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-size: var(--heading-font-size);
            font-style: normal;
            font-weight: 700;
            line-height: 36px;
            position: relative;

            &::before {
                position: absolute;
                content: '';
                width: 160px;
                height: 4px;
                background-color: var(--background-color-stick);
                transform: rotate(-2deg);
                bottom: 0;
                left: 232px;
            }
        }
    }
`;

export const CONTAINER2_BODY = styled.div`
    widows: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

export const CONTAINER2_BODY_RE = styled.div`
    position: relative;
`;

export const CONTAINER2_BODY_CENTER = styled.div`
    position: absolute;
    top: 0;
    left: -674px;
    width: 980px;
    display: flex;
    justify-content: space-between;
`;

export const CONTAINER2_BODY_GRID = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    row-gap: 82px;
    column-gap: 16px;
    padding-top: 16px;
    div {
        width: 234px;
        span {
            display: block;
            width: 100%;
            color: var(--dark-gray);
            font-family: 'Poppins', sans-serif;
            font-size: var(--font-size-primary);
            font-style: normal;
            font-weight: 400;
            line-height: 28px; /* 140% */

            &:nth-child(2) {
                font-weight: 700;
            }
        }
    }
`;

export const CONTAINER2_FOOTER = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const CONTAINER2_FOOTER_BTN = styled.button`
    display: inline-flex;
    padding: 6px 25px 6px 25px;
    border-radius: 9999px;
    background: linear-gradient(180deg, #f05f5f 0%, #b33030 100%);
    align-items: flex-start;

    a {
        width: 160px;
        color: var(--white);
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: var(--font-size-primary);
        font-style: normal;
        font-weight: 700;
        line-height: 28px; /* 155.556% */
    }
`;
// container3

export const CONTAINER3 = styled.div`
    width: 100%;
    padding-top: 20px;
    margin-bottom: 40px;
`;

export const CONTAINER3_HEADER = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 22px;

    .heading_text {
        width: 224px;
        display: flex;
        justify-content: center;

        span {
            color: var(--primary);
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-size: var(--heading-font-size);
            font-style: normal;
            font-weight: 700;
            line-height: 36px; /* 120% */
            position: relative;

            &::before {
                position: absolute;
                content: '';
                width: 110px;
                height: 6px;
                background-color: var(--background-color-stick);
                transform: rotate(-3deg);
                bottom: -6px;
                left: -18px;
            }
        }
    }
`;

export const CONTAINER3_BODY = styled.div`
    width: 100%;

    .body_center {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .body_center-content {
        width: 482px;
        margin-left: 16px;
        display: flex;
        flex-direction: column;
        row-gap: 50px;
    }
`;

export const CONTAINER3_BODY_CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;

    span {
        color: var(--primary);
        font-family: 'Poppins', sans-serif;
        font-size: var(--font-size-primary);
        font-style: normal;
        font-weight: 700;
        line-height: 28px; /* 140% */
    }
    p {
        padding: 0;
        margin: 0;
        color: var(--dark-gray);
        font-family: 'Poppins', sans-serif;
        font-size: var(--font-size-primary);
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 140% */
    }
`;
