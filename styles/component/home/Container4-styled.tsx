import styled from 'styled-components';

export const CONTAINER4 = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    flex-shrink: 0;
    width: 100%;
`;
// container 4_1
export const CONTAINER4_1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 38px;
`;

export const CONTAINER4_1_HEADING = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28.5px;

    div {
        display: flex;
        width: 565px;
        height: 33px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;

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
                width: 240px;
                height: 4px;
                transform: rotate(2deg);
                flex-shrink: 0;
                background-color: #f8b700;
                bottom: -6px;
                left: 184px;
            }
        }
    }
    .container4_1-nav {
        width: 100%;
        height: 50px;
        padding: 6px 26px;
        width: 980px;

        ul {
            padding: 0;
            margin: 0;
            width: 100%;
            display: flex;
            align-items: center;
            column-gap: 96px;

            li {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1 0 0;
                align-self: stretch;
                border-radius: 9999px;
                border: 1px solid #e6d3ff;
                background-color: var(--white);
                color: var(--dark-gray);
                cursor: pointer;

                &.active {
                    color: var(--white);
                    background: var(--primary);
                }

                &:nth-child(1) {
                    padding: 6px 52px 7px 46px;
                    p {
                        width: 118px;
                    }
                }
                &:nth-child(2) {
                    padding: 6px 65px 7px 58px;
                    p {
                        width: 93px;
                    }
                }
                &:nth-child(3) {
                    padding: 6px 63px 7px 57px;
                    p {
                        width: 89px;
                    }
                }

                p {
                    display: flex;
                    height: 20px;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    font-family: 'Poppins', sans-serif;
                    font-size: var(--font-size-primary);
                    font-style: normal;
                    font-weight: 700;
                    line-height: 28px; /* 155.556% */
                }
            }
        }
    }
`;

export const CONTAINER4_1_BODY = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: 30px;
    width: 100%;
`;
