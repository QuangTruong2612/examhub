import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import chiamakaImg from '../../../../../../../public/student1.jpg.png';
import alexImg from '../../../../../../../public/student2.jpg.png';
import student3 from '../../../../../../../public/student3.jpg.png';
import student4 from '../../../../../../../public/student4.jpg.png';
import student5 from '../../../../../../../public/student5.jpg.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap-icons/font/bootstrap-icons.json';
export function SampleNextArrow(props: { onClick: any }) {
    return <RightOutlined className="slick-icon pull-right" onClick={props.onClick} />;
}
export function SamplePrevArrow(props: { onClick: any }) {
    return <LeftOutlined className="slick-icon  pull-left" onClick={props.onClick} />;
}
export function Slick4_2() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: false,
        nextArrow: <SampleNextArrow onClick={undefined} />,
        prevArrow: <SamplePrevArrow onClick={undefined} />,
        appendDots: (dots: any) => <ul className="slick-dot">{dots}</ul>,
        customPaging: () => (
            <>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-dot"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
            </>
        ),
    };
    const items = [
        {
            id: 1,
            header: 'Chiamaka',
            title: 'Mang lại sự an tâm và hài lòng cho Quý Khách Hàng thông qua việc ứng dụng công nghệ giáo dục tiên tiến và sáng tạo liên tục nội dung chất lượng.',
            img: <Image src={chiamakaImg} alt="chiamaka" />,
        },
        {
            id: 2,
            header: 'Alex',
            title: 'Beekids có sẵn các lộ trình rất hay, con mình học mà như chơi.',
            img: <Image src={alexImg} alt="chiamaka" />,
        },
        {
            id: 3,
            header: 'Chie',
            title: 'Con rất thích học trên app, hình ảnh rất sinh động và hứng thú cho trẻ nhỏ',
            img: <Image src={student3} alt="chiamaka" />,
        },
        {
            id: 4,
            header: 'Tyler',
            title: 'Mang lại sự an tâm và hài lòng cho Quý Khách Hàng thông qua việc ứng dụng công nghệ giáo dục tiên tiến và sáng tạo liên tục nội dung chất lượng.',
            img: <Image src={student4} alt="chiamaka" />,
        },
        {
            id: 5,
            header: 'Chiamaka',
            title: 'Kể từ ngày có Beekid bé nhà mình không còn nghiện xem tivi nữa',
            img: <Image src={student5} alt="chiamaka" />,
        },
        {
            id: 6,
            header: 'Alex',
            title: 'Beekids có sẵn các lộ trình rất hay, con mình học mà như chơi.',
            img: <Image src={alexImg} alt="chiamaka" />,
        },
        {
            id: 7,
            header: 'Chie',
            title: 'Con rất thích học trên app, hình ảnh rất sinh động và hứng thú cho trẻ nhỏ',
            img: <Image src={student3} alt="chiamaka" />,
        },
        {
            id: 8,
            header: 'Tyler',
            title: 'Mang lại sự an tâm và hài lòng cho Quý Khách Hàng thông qua việc ứng dụng công nghệ giáo dục tiên tiến và sáng tạo liên tục nội dung chất lượng.',
            img: <Image src={student4} alt="chiamaka" />,
        },
    ];
    // /
    return (
        <Slider {...settings}>
            {items.map((item) => (
                <div key={item.id}>
                    {item.img}
                    <div className="n">
                        <h3>{item.header}</h3>
                        <span>{item.title}</span>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
//--------------------------------------

import chanImage from '../../../../../../../public/Chan_Zuck.png.png';
import generalImage from '../../../../../../../public/General_At.png.png';
import silverImage from '../../../../../../../public/Silverlake.png.png';
export function Slick4_4() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: false,
        nextArrow: <SampleNextArrow onClick={undefined} />,
        prevArrow: <SamplePrevArrow onClick={undefined} />,
        appendDots: (dots: any) => <ul className="slick-dot">{dots}</ul>,
        customPaging: () => (
            <>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-dot"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
            </>
        ),
    };

    const items = [
        {
            id: 1,
            img: <Image src={chanImage} alt="chan" width={190} height={54} />,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                        d="M21.9059 15.9707C23.8723 15.9707 25.1975 17.3826 25.1975 19.4745C25.1975 21.357 23.6744 22.9254 21.6115 22.9254C19.352 22.9254 17.6823 21.0428 17.6823 18.1674C17.6823 11.6316 22.2992 9.01731 25.1975 8.70312V11.5786C23.2323 11.9445 21.0228 13.9834 20.9238 16.2331C21.0228 16.1814 21.4148 15.9707 21.9059 15.9707ZM11.8868 15.9707C13.8509 15.9707 15.1772 17.3826 15.1772 19.4745C15.1772 21.357 13.6542 22.9254 11.5913 22.9254C9.33173 22.9254 7.66211 21.0428 7.66211 18.1674C7.66211 11.6316 12.2789 9.01731 15.1772 8.70312V11.5786C13.212 11.9445 11.0026 13.9834 10.9037 16.2331C11.0026 16.1814 11.3946 15.9707 11.8868 15.9707Z"
                        fill="#949494"
                    />
                </svg>
            ),
            title: 'The Chan Zuckerberg initiative supports innovative models of learning wherever they are around the world. BYJU’S represents an opportunity to help even more students develop a love for learning and unlock their potential.',
            actor: 'Dr. Priscilla Chan and Mark Zuckerberg',
        },
        {
            id: 2,
            img: <Image src={generalImage} alt="gen" width={190} height={54} />,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                        d="M21.9059 15.9707C23.8723 15.9707 25.1975 17.3826 25.1975 19.4745C25.1975 21.357 23.6744 22.9254 21.6115 22.9254C19.352 22.9254 17.6823 21.0428 17.6823 18.1674C17.6823 11.6316 22.2992 9.01731 25.1975 8.70312V11.5786C23.2323 11.9445 21.0228 13.9834 20.9238 16.2331C21.0228 16.1814 21.4148 15.9707 21.9059 15.9707ZM11.8868 15.9707C13.8509 15.9707 15.1772 17.3826 15.1772 19.4745C15.1772 21.357 13.6542 22.9254 11.5913 22.9254C9.33173 22.9254 7.66211 21.0428 7.66211 18.1674C7.66211 11.6316 12.2789 9.01731 15.1772 8.70312V11.5786C13.212 11.9445 11.0026 13.9834 10.9037 16.2331C11.0026 16.1814 11.3946 15.9707 11.8868 15.9707Z"
                        fill="#949494"
                    />
                </svg>
            ),
            title: 'General Atlantic firmly believes in helping high quality companies achieve long-term success. We are confident that BYJU’S will redefine the learning landscape for students globally',
            actor: 'Sandeep Naik',
        },
        {
            id: 3,
            img: <Image src={silverImage} alt="silver" width={190} height={54} />,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                        d="M21.9059 15.9707C23.8723 15.9707 25.1975 17.3826 25.1975 19.4745C25.1975 21.357 23.6744 22.9254 21.6115 22.9254C19.352 22.9254 17.6823 21.0428 17.6823 18.1674C17.6823 11.6316 22.2992 9.01731 25.1975 8.70312V11.5786C23.2323 11.9445 21.0228 13.9834 20.9238 16.2331C21.0228 16.1814 21.4148 15.9707 21.9059 15.9707ZM11.8868 15.9707C13.8509 15.9707 15.1772 17.3826 15.1772 19.4745C15.1772 21.357 13.6542 22.9254 11.5913 22.9254C9.33173 22.9254 7.66211 21.0428 7.66211 18.1674C7.66211 11.6316 12.2789 9.01731 15.1772 8.70312V11.5786C13.212 11.9445 11.0026 13.9834 10.9037 16.2331C11.0026 16.1814 11.3946 15.9707 11.8868 15.9707Z"
                        fill="#949494"
                    />
                </svg>
            ),
            title: 'The Chan Zuckerberg initiative supports innovative models of learning wherever they are around the world. BYJU’S represents an opportunity to help even more students develop a love for learning and unlock their potential.',
            actor: 'Dr. Priscilla Chan and Mark Zuckerberg',
        },
        {
            id: 4,
            img: <Image src={chanImage} alt="chan" width={190} height={54} />,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                        d="M21.9059 15.9707C23.8723 15.9707 25.1975 17.3826 25.1975 19.4745C25.1975 21.357 23.6744 22.9254 21.6115 22.9254C19.352 22.9254 17.6823 21.0428 17.6823 18.1674C17.6823 11.6316 22.2992 9.01731 25.1975 8.70312V11.5786C23.2323 11.9445 21.0228 13.9834 20.9238 16.2331C21.0228 16.1814 21.4148 15.9707 21.9059 15.9707ZM11.8868 15.9707C13.8509 15.9707 15.1772 17.3826 15.1772 19.4745C15.1772 21.357 13.6542 22.9254 11.5913 22.9254C9.33173 22.9254 7.66211 21.0428 7.66211 18.1674C7.66211 11.6316 12.2789 9.01731 15.1772 8.70312V11.5786C13.212 11.9445 11.0026 13.9834 10.9037 16.2331C11.0026 16.1814 11.3946 15.9707 11.8868 15.9707Z"
                        fill="#949494"
                    />
                </svg>
            ),
            title: 'The Chan Zuckerberg initiative supports innovative models of learning wherever they are around the world. BYJU’S represents an opportunity to help even more students develop a love for learning and unlock their potential.',
            actor: 'Dr. Priscilla Chan and Mark Zuckerberg',
        },
        {
            id: 5,
            img: <Image src={generalImage} alt="gen" width={190} height={54} />,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                        d="M21.9059 15.9707C23.8723 15.9707 25.1975 17.3826 25.1975 19.4745C25.1975 21.357 23.6744 22.9254 21.6115 22.9254C19.352 22.9254 17.6823 21.0428 17.6823 18.1674C17.6823 11.6316 22.2992 9.01731 25.1975 8.70312V11.5786C23.2323 11.9445 21.0228 13.9834 20.9238 16.2331C21.0228 16.1814 21.4148 15.9707 21.9059 15.9707ZM11.8868 15.9707C13.8509 15.9707 15.1772 17.3826 15.1772 19.4745C15.1772 21.357 13.6542 22.9254 11.5913 22.9254C9.33173 22.9254 7.66211 21.0428 7.66211 18.1674C7.66211 11.6316 12.2789 9.01731 15.1772 8.70312V11.5786C13.212 11.9445 11.0026 13.9834 10.9037 16.2331C11.0026 16.1814 11.3946 15.9707 11.8868 15.9707Z"
                        fill="#949494"
                    />
                </svg>
            ),
            title: 'General Atlantic firmly believes in helping high quality companies achieve long-term success. We are confident that BYJU’S will redefine the learning landscape for students globally',
            actor: 'Sandeep Naik',
        },
        {
            id: 6,
            img: <Image src={silverImage} alt="silver" width={190} height={54} />,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                        d="M21.9059 15.9707C23.8723 15.9707 25.1975 17.3826 25.1975 19.4745C25.1975 21.357 23.6744 22.9254 21.6115 22.9254C19.352 22.9254 17.6823 21.0428 17.6823 18.1674C17.6823 11.6316 22.2992 9.01731 25.1975 8.70312V11.5786C23.2323 11.9445 21.0228 13.9834 20.9238 16.2331C21.0228 16.1814 21.4148 15.9707 21.9059 15.9707ZM11.8868 15.9707C13.8509 15.9707 15.1772 17.3826 15.1772 19.4745C15.1772 21.357 13.6542 22.9254 11.5913 22.9254C9.33173 22.9254 7.66211 21.0428 7.66211 18.1674C7.66211 11.6316 12.2789 9.01731 15.1772 8.70312V11.5786C13.212 11.9445 11.0026 13.9834 10.9037 16.2331C11.0026 16.1814 11.3946 15.9707 11.8868 15.9707Z"
                        fill="#949494"
                    />
                </svg>
            ),
            title: 'The Chan Zuckerberg initiative supports innovative models of learning wherever they are around the world. BYJU’S represents an opportunity to help even more students develop a love for learning and unlock their potential.',
            actor: 'Dr. Priscilla Chan and Mark Zuckerberg',
        },
        {
            id: 7,
            img: <Image src={chanImage} alt="chan" width={190} height={54} />,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                        d="M21.9059 15.9707C23.8723 15.9707 25.1975 17.3826 25.1975 19.4745C25.1975 21.357 23.6744 22.9254 21.6115 22.9254C19.352 22.9254 17.6823 21.0428 17.6823 18.1674C17.6823 11.6316 22.2992 9.01731 25.1975 8.70312V11.5786C23.2323 11.9445 21.0228 13.9834 20.9238 16.2331C21.0228 16.1814 21.4148 15.9707 21.9059 15.9707ZM11.8868 15.9707C13.8509 15.9707 15.1772 17.3826 15.1772 19.4745C15.1772 21.357 13.6542 22.9254 11.5913 22.9254C9.33173 22.9254 7.66211 21.0428 7.66211 18.1674C7.66211 11.6316 12.2789 9.01731 15.1772 8.70312V11.5786C13.212 11.9445 11.0026 13.9834 10.9037 16.2331C11.0026 16.1814 11.3946 15.9707 11.8868 15.9707Z"
                        fill="#949494"
                    />
                </svg>
            ),
            title: 'The Chan Zuckerberg initiative supports innovative models of learning wherever they are around the world. BYJU’S represents an opportunity to help even more students develop a love for learning and unlock their potential.',
            actor: 'Dr. Priscilla Chan and Mark Zuckerberg',
        },
        {
            id: 8,
            img: <Image src={generalImage} alt="gen" width={190} height={54} />,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                        d="M21.9059 15.9707C23.8723 15.9707 25.1975 17.3826 25.1975 19.4745C25.1975 21.357 23.6744 22.9254 21.6115 22.9254C19.352 22.9254 17.6823 21.0428 17.6823 18.1674C17.6823 11.6316 22.2992 9.01731 25.1975 8.70312V11.5786C23.2323 11.9445 21.0228 13.9834 20.9238 16.2331C21.0228 16.1814 21.4148 15.9707 21.9059 15.9707ZM11.8868 15.9707C13.8509 15.9707 15.1772 17.3826 15.1772 19.4745C15.1772 21.357 13.6542 22.9254 11.5913 22.9254C9.33173 22.9254 7.66211 21.0428 7.66211 18.1674C7.66211 11.6316 12.2789 9.01731 15.1772 8.70312V11.5786C13.212 11.9445 11.0026 13.9834 10.9037 16.2331C11.0026 16.1814 11.3946 15.9707 11.8868 15.9707Z"
                        fill="#949494"
                    />
                </svg>
            ),
            title: 'General Atlantic firmly believes in helping high quality companies achieve long-term success. We are confident that BYJU’S will redefine the learning landscape for students globally',
            actor: 'Sandeep Naik',
        },
        {
            id: 9,
            img: <Image src={silverImage} alt="silver" width={190} height={54} />,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                        d="M21.9059 15.9707C23.8723 15.9707 25.1975 17.3826 25.1975 19.4745C25.1975 21.357 23.6744 22.9254 21.6115 22.9254C19.352 22.9254 17.6823 21.0428 17.6823 18.1674C17.6823 11.6316 22.2992 9.01731 25.1975 8.70312V11.5786C23.2323 11.9445 21.0228 13.9834 20.9238 16.2331C21.0228 16.1814 21.4148 15.9707 21.9059 15.9707ZM11.8868 15.9707C13.8509 15.9707 15.1772 17.3826 15.1772 19.4745C15.1772 21.357 13.6542 22.9254 11.5913 22.9254C9.33173 22.9254 7.66211 21.0428 7.66211 18.1674C7.66211 11.6316 12.2789 9.01731 15.1772 8.70312V11.5786C13.212 11.9445 11.0026 13.9834 10.9037 16.2331C11.0026 16.1814 11.3946 15.9707 11.8868 15.9707Z"
                        fill="#949494"
                    />
                </svg>
            ),
            title: 'The Chan Zuckerberg initiative supports innovative models of learning wherever they are around the world. BYJU’S represents an opportunity to help even more students develop a love for learning and unlock their potential.',
            actor: 'Dr. Priscilla Chan and Mark Zuckerberg',
        },
    ];

    return (
        <Slider {...settings}>
            {items.map((item) => (
                <div className="slick-item" key={item.id}>
                    {item.img}
                    {item.icon}
                    {item.title}
                    {item.actor}
                </div>
            ))}
        </Slider>
    );
}
