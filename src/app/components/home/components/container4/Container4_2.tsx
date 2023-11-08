import React from 'react';
import {
    CONTAINER4_2,
    CONTAINER4_2_HEADING,
    CONTAINER4_2_SLICK,
} from '../../../../../../styles/component/home/Container4-styled';
import { CONTAINER_HEADER_TEXT } from '../../../../../../styles/component/global';
import { Slick4_2 } from './components/slick';

export default function Container4_2() {
    return (
        <CONTAINER4_2>
            <CONTAINER4_2_HEADING>
                <CONTAINER_HEADER_TEXT accessKey="true">Khách hàng nói gì về chúng tôi</CONTAINER_HEADER_TEXT>
            </CONTAINER4_2_HEADING>
            {/* ------------------- */}
            <CONTAINER4_2_SLICK>
                <Slick4_2 />
            </CONTAINER4_2_SLICK>
        </CONTAINER4_2>
    );
}
