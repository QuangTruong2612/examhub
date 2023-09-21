'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
//
import FRAME625621 from '../../public/Frame 625621.png';
import pseudo from '../../public/pseudo.png';
import girl from '../../public/girl.png';
import {
    DIV8_CONTAIN1,
    DIV8_BUTTON_CONTAIN1,
    DIV8_CONATINER_CONTAIN1,
    DIV8_CONTAINER_CONTAIN1_BRANDS,
    DIV8_CONTAINER_CONTAIN1_BUTTON,
    DIV8_CONTAINER_CONTAIN1_BUTTONTEXT,
    DIV8_HEADING_CONTAIN1,
    DIV8_HEADING_CONTAIN1_H1,
    DIV8_HEADING_CONTAIN1_LI,
    DIV8_HEADING_CONTAIN1_SPAN,
    DIV8_HEADING__CONTAIN1_UL,
    DIVBODY,
    DIVCONTAIN1,
    DIVCONTAIN2,
    DIV_HEAD_CONTAIN2,
    DIV_CONTAINER_CONTAIN2,
    DIV_CONTAINER_LEFT_CONTAIN2,
    DIV_CONTAINER_RIGHT_CONTAIN2,
} from '../../styles/home/BODY_Style';

import Brand1 from '../../public/Rectangle 17113.png';

export default function Body() {
    return (
        <DIVBODY>
            <DIVCONTAIN1>
                <Image src={FRAME625621} alt="PNG" width={750} height={680} />
                <DIV8_CONTAIN1>
                    <DIV8_HEADING_CONTAIN1>
                        <DIV8_HEADING_CONTAIN1_H1>Cuộc thi Toán tư duy Quốc tế Bkids</DIV8_HEADING_CONTAIN1_H1>
                        <DIV8_HEADING_CONTAIN1_SPAN>
                            We make learning engaging & effective, so that you are ready to achieve your goals
                        </DIV8_HEADING_CONTAIN1_SPAN>
                        <DIV8_HEADING__CONTAIN1_UL>
                            <DIV8_HEADING_CONTAIN1_LI>150 000+ Learners</DIV8_HEADING_CONTAIN1_LI>
                            <DIV8_HEADING_CONTAIN1_LI>120+ Countries</DIV8_HEADING_CONTAIN1_LI>
                            <DIV8_HEADING_CONTAIN1_LI>20 000+ Teachers</DIV8_HEADING_CONTAIN1_LI>
                        </DIV8_HEADING__CONTAIN1_UL>
                    </DIV8_HEADING_CONTAIN1>
                    <DIV8_BUTTON_CONTAIN1>Tham gia</DIV8_BUTTON_CONTAIN1>
                    <DIV8_CONATINER_CONTAIN1>
                        <DIV8_CONTAINER_CONTAIN1_BRANDS>
                            <div>
                                <Image src={Brand1} width={100} height={100} alt="brand1" />
                                <Image src={Brand1} width={100} height={100} alt="brand1" />
                                <Image src={Brand1} width={100} height={100} alt="brand1" />
                                <Image src={Brand1} width={100} height={100} alt="brand1" />
                                <Image src={Brand1} width={100} height={100} alt="brand1" />
                            </div>
                        </DIV8_CONTAINER_CONTAIN1_BRANDS>
                        <DIV8_CONTAINER_CONTAIN1_BUTTON>
                            <DIV8_CONTAINER_CONTAIN1_BUTTONTEXT>Xem thêm </DIV8_CONTAINER_CONTAIN1_BUTTONTEXT>
                        </DIV8_CONTAINER_CONTAIN1_BUTTON>
                    </DIV8_CONATINER_CONTAIN1>
                </DIV8_CONTAIN1>
            </DIVCONTAIN1>
            <DIVCONTAIN2>
                <DIV_HEAD_CONTAIN2>Bí quyết thành công, tự tin cho mọi học sinh</DIV_HEAD_CONTAIN2>
                <DIV_CONTAINER_CONTAIN2>
                    <DIV_CONTAINER_LEFT_CONTAIN2></DIV_CONTAINER_LEFT_CONTAIN2>
                    <DIV_CONTAINER_RIGHT_CONTAIN2>
                        <Image src={pseudo} alt="pseudo" width={570} height={607} />
                        <Image src={girl} alt="girl" width={450} height={500} className="girl" />
                    </DIV_CONTAINER_RIGHT_CONTAIN2>
                </DIV_CONTAINER_CONTAIN2>
            </DIVCONTAIN2>
        </DIVBODY>
    );
}
