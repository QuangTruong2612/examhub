import React from 'react';
import { CONTAINER4 } from '../../../../../../styles/component/home/Container4-styled';
import Container4_1 from './Container4_1';
import Container4_2 from './Container4_2';
import Container4_3 from './Container4_3';
import Container4_4 from './Container4_4';

export default function Container4() {
    return (
        <CONTAINER4>
            {/* ---------- */}
            <Container4_1 />
            {/* --------- */}
            <Container4_2 />
            {/* --------- */}
            <Container4_3 />
            {/* --------- */}
            <Container4_4 />
        </CONTAINER4>
    );
}
