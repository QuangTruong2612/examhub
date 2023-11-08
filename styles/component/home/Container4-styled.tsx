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
            &::before {
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
    row-gap: 30px;
    width: 100%;
`;

export const CONTAINER4_1_BODY_HEADING = styled.div`
    display: flex;
    padding: 19px 19px 20px 56px;
    justify-content: flex-end;
    align-items: center;
    gap: 76px;
    border-radius: 16px;
    border: 1px solid #e6d3ff;
    background: var(--white);
    box-shadow: 0px 19px 27px -16px rgba(224, 200, 255, 0.5);

    .container4_1-section {
        width: 464px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 12px;
    }
`;

export const CONTAINER4_1_SECTION_HEADER = styled.div`
    display: flex;
    padding: 4px 6px 4px 7px;
    align-items: flex-start;
    border-radius: 6px;
    border: 1px solid #e6d3ff;
    background: rgba(255, 255, 255, 0.1);

    span {
        color: var(--primary);
        font-family: 'Poppins', sans-serif;
        font-size: var(--font-size-section-header);
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
    }
`;

export const CONTAINER4_1_SECTION_BODY = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    .section-header {
        color: var(--primary);
        font-family: 'Poppins', sans-serif;
        font-size: var(--font-size-primary);
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 12px;
    }
    .section-body {
        color: var(--dark-gray);
        font-family: 'Poppins', sans-serif;
        font-size: var(--font-size-section);
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 20px;
    }
    .section-button {
        display: flex;
        width: 113px;
        height: 34px;
        padding: 9px 21px 9px 21px;
        justify-content: center;
        align-items: center;
        border-radius: 75px;
        border: 1px solid #543e93;

        a {
            display: flex;
            width: 72px;
            height: 16px;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;
            color: var(--primary);
            font-family: 'Poppins', sans-serif;
            font-size: var(--font-size-section-header);
            font-style: normal;
            font-weight: 600;
            line-height: 20px; /* 142.857% */
            letter-spacing: 0.8px;
        }
    }
`;

export const CONTAINER4_1_BODY_CONTAIN = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 22px;
    row-gap: 32px;
    width: 100%;
`;

export const CONTAINER4_1_CONTAIN_SECTION = styled.div`
    width: 480px;
    height: 300px;
    border-radius: 16px;
    border: 1px solid #e6d3ff;
    background: #fff;
    box-shadow: 0px 19px 27px -16px rgba(224, 200, 255, 0.5);
    padding: 23px 0px 12px 18px;
    position: relative;

    .section {
        display: inline-flex;
        align-items: center;
        width: 100%;
    }

    .section_content {
        width: 230px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 26px;
        align-self: stretch;
        .section_content-info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            width: 100%;

            .section_content-header {
                color: var(--primary);
                font-family: 'Poppins', sans-serif;
                font-size: var(--font-size-primary);
                font-style: normal;
                font-weight: 700;
                line-height: 28px; /* 140% */
            }

            .section_content-text {
                color: var(--dark-gray);
                font-family: 'Poppins', sans-serif;
                font-size: var(--font-size-section);
                font-style: normal;
                font-weight: 400;
                line-height: 24px; /* 150% */
            }
        }
        .section_content-btn {
            display: flex;
            width: 113px;
            height: 34px;
            padding: 9px 21px 9px 21px;
            justify-content: center;
            align-items: center;
            border-radius: 75px;
            border: 1px solid #543e93;

            a {
                display: flex;
                width: 72px;
                height: 16px;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;
                color: var(--primary);
                font-family: 'Poppins', sans-serif;
                font-size: var(--font-size-section-header);
                font-style: normal;
                font-weight: 600;
                line-height: 20px;
                letter-spacing: 0.8px;
            }
        }
    }

    .secton_subject {
        position: absolute;
        display: inline-flex;
        padding: 4px 6px 4px 7px;
        align-items: flex-start;
        border-radius: 6px;
        border: 1px solid #e6d3ff;
        background: rgba(255, 255, 255, 0.1);
        right: 18px;
        z-index: 1000;

        span {
            color: var(--primary);
            text-align: right;
            font-family: 'Poppins', sans-serif;
            font-size: var(--font-size-section-header);
            font-style: normal;
            font-weight: 500;
            line-height: 20px; /* 142.857% */
        }
    }
`;
//Container 4 _ 2
export const CONTAINER4_2 = styled.div`
    width: 100%;
`;

export const CONTAINER4_2_HEADING = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 23px;

    span {
        &::before {
            bottom: -5px;
            left: 36px;
            width: 254px;
            height: 4px;
            transform: rotate(-2deg);
            flex-shrink: 0;
        }
    }
`;

export const CONTAINER4_2_SLICK = styled.div`
    height: 520px;
    padding: 16px 0px 16px 0px;

    .slick_track {
        padding: 8px 10px 8px 10px;
    }
    .slick-slider {
        position: relative;
    }
    .slick-slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 12px;
        border: 1px solid #e6d3ff;
        background: #fff;
        box-shadow: 0px 24px 34px -20px rgba(224, 200, 255, 0.5);
        overflow: hidden;
        div {
            width: 100%;
            img {
                width: 100%;
                height: 230px;
                flex-shrink: 0;
            }
            .n {
                display: flex;
                padding: 19px 28px;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 10px;

                h3 {
                    padding: 0;
                    margin: 0;
                    color: #000;
                    font-family: 'Poppins', sans-serif;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 32px; /* 133.333% */
                }

                span {
                    display: flex;
                    width: 296px;
                    flex-direction: column;
                    justify-content: center;
                    color: #000;
                    font-family: 'Poppins', sans-serif;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 28px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    -webkit-line-clamp: 4;
                    text-overflow: ellipsis;
                }
            }
        }
    }
    .slick-icon {
        position: absolute;
        top: 50%;
        background-color: #fff;
        z-index: 10000;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        svg {
            fill: var(--secondary-gray);
            font-size: 12px;
        }
        &.pull-left {
            left: 0;
        }
        &.pull-right {
            right: 0;
        }
    }
    .slick-track {
        display: flex;
        column-gap: 16px;
        height: 444px;
    }
    .slick-dots {
        position: absolute;
        bottom: -30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30px;
        padding: 0;
        left: 735px;
        margin: 0;
        li {
            &::marker {
                font-size: 0;
            }
            svg {
                width: 8px;
                height: 8px;
                background: #c4c4c4;
                border-radius: 8px;
                color: #c4c4c4;
            }
        }
    }
    .slick-active {
        svg {
            width: 20px !important;
            height: 8px;
            background: var(--primary) !important;
            color: var(--primary) !important;
            border-radius: 10px !important;
            transition: all ease 0.6s;
        }
    }
`;
//container4_3

export const CONTAINER4_3 = styled.div`
    display: inline-flex;
    justify-content: center;

    .contain {
        display: flex;
        width: 980px;
        align-items: center;
    }
`;

export const CONTAINER4_3_EDU = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 36px;

    .edu-heading {
        width: 414px;
        margin-bottom: 48px;

        span {
            color: var(--primary);
            font-family: 'Poppins', sans-serif;
            font-size: var(--heading-font-size);
            font-style: normal;
            font-weight: 700;
            line-height: 36px; /* 120% */
        }
    }

    .edu-qr {
        display: inline-flex;
        align-items: center;
        gap: 8px;

        .qr-icon {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;
        }
    }
`;

export const CONTAINER4_4 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 38px;
    background: lightgray -240px -57.9px;
    background-size: 125% 120%;
    background-repeat: no-repeat;
    background-image: url('../../../public/section#investors.jpg');

    .contain {
        display: flex;
        width: 980px;
        padding-top: 12px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap: 25px;
        flex-shrink: 0;

        .header {
            span {
                &::before {
                    bottom: 0;
                    height: 2px;
                    width: 120px;
                    left: 1px;
                }
            }
        }
        .body {
            padding: 12px 0px;
            width: 100%;

            .slick-list {
                width: 100%;
                padding: 16px 0;
            }
            .slick-item {
                display: flex !important;
                flex-direction: column;
                align-items: center;
            }
        }
    }
`;
