import styled from 'styled-components';

export const CONTAINER_HEADER_TEXT = styled.span`
    &[accessKey~='true'] {
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
            background-color: var(--background-color-stick);
            transform: rotate(-2deg);
        }
    }
    &[accessKey~='false'] {
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
            transform: rotate(2deg);
            flex-shrink: 0;
            background-color: #f8b700;
        }
    }
`;
