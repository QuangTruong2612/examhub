import React from 'react';
import {
    CONTAINER3,
    CONTAINER3_BODY,
    CONTAINER3_BODY_CONTENT,
    CONTAINER3_HEADER,
} from '../../../../../styles/component/home/home-styled';
import Image from 'next/image';
import baloonImag from '../../../../../public/girl2.png';
export default function Container3() {
    return (
        <CONTAINER3>
            {/* ---------- */}
            <CONTAINER3_HEADER>
                <div className="heading_text">
                    <span>Giá trị mang đến</span>
                </div>
            </CONTAINER3_HEADER>
            {/* ------------ */}
            <CONTAINER3_BODY>
                <div className="body_center">
                    <Image src={baloonImag} alt="baloon" width={482} height={500} />
                    <div className="body_center-content">
                        <CONTAINER3_BODY_CONTENT></CONTAINER3_BODY_CONTENT>
                    </div>
                </div>
            </CONTAINER3_BODY>
        </CONTAINER3>
    );
}
