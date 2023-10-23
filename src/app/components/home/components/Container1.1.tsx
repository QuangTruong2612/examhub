import React from 'react';
import {
    CONTAINER1,
    CONTAINER1_DIFFEVENT,
    CONTAINER1_HEADING,
    CONTAINER1_IMG,
    CONTAINER1_INTRO,
    CONTAINER1_INTRO_LIST,
    CONTAINER1_JOIN,
    CONTAINER1_JOIN_BTN,
    CONTAINER1_RIGHT,
    CONTAINER1_SEEMORE,
} from '../../../../../styles/component/home/home-styled';
import Image from 'next/image';
import img from '../../../../../public/container1Logo.png';
import DiffEventimg1 from '../../../../../public/DiffEventimg1.png';
import DiffEventimg2 from '../../../../../public/DiffEventimg2.png';
import DiffEventimg3 from '../../../../../public/DiffEventimg3.png';
import DiffEventimg4 from '../../../../../public/DiffEventimg4.png';
import DiffEventimg5 from '../../../../../public/DiffEventimg5.png';
export default function Container1() {
    return (
        <CONTAINER1>
            <CONTAINER1_IMG>
                <Image src={img} alt="img" width={740} height={520} />
            </CONTAINER1_IMG>
            {/* ----------- */}
            <CONTAINER1_RIGHT>
                <CONTAINER1_HEADING>Cuộc thi Toán tư duy Quốc tế Bkids</CONTAINER1_HEADING>
                {/* ----------------- */}
                <CONTAINER1_INTRO>
                    We make learning engaging & effective, so that you are ready to achieve your goals
                </CONTAINER1_INTRO>
                {/* ------------- */}
                <CONTAINER1_INTRO_LIST>
                    <li>150 000+ Learners</li>
                    <li>120+ Countries</li>
                    <li>20 000+ Teachers</li>
                </CONTAINER1_INTRO_LIST>
                {/* -------------- */}
                <CONTAINER1_JOIN>
                    <CONTAINER1_JOIN_BTN>Tham gia</CONTAINER1_JOIN_BTN>
                </CONTAINER1_JOIN>
                {/* ------------ */}
                <CONTAINER1_DIFFEVENT>
                    <Image src={DiffEventimg1} alt="img1" width={82} height={82} />
                    <Image src={DiffEventimg2} alt="img1" width={82} height={82} />
                    <Image src={DiffEventimg3} alt="img1" width={82} height={82} />
                    <Image src={DiffEventimg4} alt="img1" width={82} height={82} />
                    <Image src={DiffEventimg5} alt="img1" width={82} height={82} />
                </CONTAINER1_DIFFEVENT>
                {/* ------------ */}
                <CONTAINER1_SEEMORE>
                    <button type="button">
                        <span>Xem thêm</span>
                    </button>
                </CONTAINER1_SEEMORE>
            </CONTAINER1_RIGHT>
        </CONTAINER1>
    );
}
