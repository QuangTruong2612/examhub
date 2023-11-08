import React from 'react';
import { CONTAINER4_4 } from '../../../../../../styles/component/home/Container4-styled';
import { CONTAINER_HEADER_TEXT } from '../../../../../../styles/component/global';
import { Slick4_4 } from './components/slick';

export default function Container4_4() {
    return (
        <CONTAINER4_4>
            <div className="contain">
                <div className="header">
                    <CONTAINER_HEADER_TEXT accessKey="false">Lời chứng thực</CONTAINER_HEADER_TEXT>
                </div>
                <div className="body">
                    <Slick4_4 />
                </div>
            </div>
        </CONTAINER4_4>
    );
}
