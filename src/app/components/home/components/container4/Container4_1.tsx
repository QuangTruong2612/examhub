/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import {
    CONTAINER4_1,
    CONTAINER4_1_BODY,
    CONTAINER4_1_BODY_CONTAIN,
    CONTAINER4_1_BODY_HEADING,
    CONTAINER4_1_CONTAIN_SECTION,
    CONTAINER4_1_HEADING,
    CONTAINER4_1_SECTION_BODY,
    CONTAINER4_1_SECTION_HEADER,
} from '../../../../../../styles/component/home/Container4-styled';

import byjuIMG from '../../../../../../public/byjuOsmo.png.png';
import Image from 'next/image';
import Link from 'next/link';
import Section from './components/section';
import sectionImg from '../../../../../../public/byjuLearning1.webp.png';
import section1Img from '../../../../../../public/byjuTynker1.webp.png';
import section2Img from '../../../../../../public/byjuEpic1.webp.png';
import { CONTAINER_HEADER_TEXT } from '../../../../../../styles/component/global';

export default function Container4_1() {
    // nav
    useEffect(() => {
        const nav = document.querySelectorAll('.container4_1-nav ul li');
        nav.forEach((item) => {
            item.addEventListener('click', () => {
                nav.forEach((item) => {
                    item.classList.remove('active');
                });
                item.classList.add('active');
            });
        });
    });
    // section
    const sections = [
        {
            id: 1,
            subject: 'Toán',
            heading: 'Toán tư duy lớp 1 1',
            title: 'Cuộc thi Tư duy Toán học BeeMath được tổ chức miễn phí, với mục tiêu tạo ra một sân chơi giúp trẻ tiếp cận Toán bằng tự mình cảm nhận cái đẹp, trải nghiệm để có được những giá trị Toán học phù hợp',
            img: <Image src={sectionImg} alt="1" width={233} height={236} />,
        },
        {
            id: 2,
            subject: 'Toán',
            heading: 'Toán tư duy lớp 1 1',
            title: 'Cuộc thi Tư duy Toán học BeeMath được tổ chức miễn phí, với mục tiêu tạo ra một sân chơi giúp trẻ tiếp cận Toán bằng tự mình cảm nhận cái đẹp, trải nghiệm để có được những giá trị Toán học phù hợp',
            img: <Image src={section1Img} alt="1" width={233} height={236} />,
        },
        {
            id: 3,
            subject: 'Toán',
            heading: 'Toán tư duy lớp 1 1',
            title: 'Cuộc thi Tư duy Toán học BeeMath được tổ chức miễn phí, với mục tiêu tạo ra một sân chơi giúp trẻ tiếp cận Toán bằng tự mình cảm nhận cái đẹp, trải nghiệm để có được những giá trị Toán học phù hợp',
            img: <Image src={section2Img} alt="1" width={233} height={236} />,
        },
        {
            id: 4,
            subject: 'Toán',
            heading: 'Toán tư duy lớp 1 1',
            title: 'Cuộc thi Tư duy Toán học BeeMath được tổ chức miễn phí, với mục tiêu tạo ra một sân chơi giúp trẻ tiếp cận Toán bằng tự mình cảm nhận cái đẹp, trải nghiệm để có được những giá trị Toán học phù hợp',
            img: <Image src={section2Img} alt="1" width={233} height={236} />,
        },
    ];

    return (
        <CONTAINER4_1>
            <CONTAINER4_1_HEADING>
                <div>
                    <CONTAINER_HEADER_TEXT accessKey="false">Chọn một khóa học phù hợp với bạn</CONTAINER_HEADER_TEXT>
                </div>

                <div className="container4_1-nav">
                    <ul>
                        <li className="active">
                            <p>Mầm non</p>
                        </li>
                        <li>
                            <p>Trung học</p>
                        </li>
                        <li>
                            <p>Tiểu học</p>
                        </li>
                    </ul>
                </div>
            </CONTAINER4_1_HEADING>
            {/* -------------- */}
            <CONTAINER4_1_BODY>
                {/* ----------------- */}
                <CONTAINER4_1_BODY_HEADING>
                    <Image src={byjuIMG} alt="byju" width={365} height={228} />
                    {/* --------------------------------- */}
                    <div className="container4_1-section">
                        {/* --------------------------- */}
                        <CONTAINER4_1_SECTION_HEADER>
                            <span>Nghệ thuật - kỹ năng mềm</span>
                        </CONTAINER4_1_SECTION_HEADER>
                        {/* ------------------------------- */}
                        <CONTAINER4_1_SECTION_BODY>
                            <span className="section-header">KỸ NĂNG MỀM KẾT HỢP DU LỊCH SINH THÁI</span>
                            <span className="section-body">
                                Với mong muốn mang đến cho các học viên iYes một môi trường thực hành tiếng Anh sinh
                                động kết hợp rèn luyện kỹ năng mềm, Giáo dục Quốc tế iyes tổ chức chương trình du lịch
                                sinh thái với chủ đề bảo vệ môi trường: "Keep our Planet green"
                            </span>
                            <button className="section-button">
                                <Link href="/">Xem thêm</Link>
                            </button>
                        </CONTAINER4_1_SECTION_BODY>
                    </div>
                </CONTAINER4_1_BODY_HEADING>
                {/* --------------------- */}
                <CONTAINER4_1_BODY_CONTAIN>
                    {/* -------------------- */}
                    {sections.map((secion) => (
                        <Section
                            key={secion.id}
                            title={secion.title}
                            heading={secion.heading}
                            subject={secion.subject}
                            image={secion.img}
                        />
                    ))}
                    {/* ------------------------- */}
                </CONTAINER4_1_BODY_CONTAIN>
            </CONTAINER4_1_BODY>
        </CONTAINER4_1>
    );
}
