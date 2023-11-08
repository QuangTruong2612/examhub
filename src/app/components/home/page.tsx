import React from 'react';
import { CONTAINER } from '../../../../styles/component/home/home-styled';
import Container1 from './components/Container1.1';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import Container4 from './components/container4/Container4';

export default function Home() {
    return (
        <CONTAINER>
            {/* container 1 */}
            <Container1 />
            {/* container2 */}
            <Container2 />
            {/* container3 */}
            <Container3 />
            {/* ========== */}
            <Container4 />
        </CONTAINER>
    );
}
