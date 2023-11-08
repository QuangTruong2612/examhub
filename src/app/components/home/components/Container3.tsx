import React from 'react';
import {
    CONTAINER3,
    CONTAINER3_BODY,
    CONTAINER3_BODY_CONTENT,
    CONTAINER3_HEADER,
} from '../../../../../styles/component/home/home-styled';
import Image from 'next/image';
import baloonImag from '../../../../../public/girl2.png';
import { CONTAINER_HEADER_TEXT } from '../../../../../styles/component/global';
export default function Container3() {
    return (
        <CONTAINER3>
            {/* ---------- */}
            <CONTAINER3_HEADER>
                <div className="heading_text">
                    <CONTAINER_HEADER_TEXT accessKey="true">Giá trị mang đến</CONTAINER_HEADER_TEXT>
                </div>
            </CONTAINER3_HEADER>
            {/* ------------ */}
            <CONTAINER3_BODY>
                <div className="body_center">
                    <Image src={baloonImag} alt="baloon" width={482} height={500} />
                    <div className="body_center-content">
                        <CONTAINER3_BODY_CONTENT>
                            <span>Phát triển tư duy</span>
                            <p>Các bài học phù hợp với độ tuổi của Trẻ</p>
                        </CONTAINER3_BODY_CONTENT>
                        <CONTAINER3_BODY_CONTENT>
                            <span>Tự tin giao tiếp</span>
                            <p>Giao lưu với bạn bè qua các cuộc thi tiêu chuẩn quốc tế.</p>
                        </CONTAINER3_BODY_CONTENT>
                        <CONTAINER3_BODY_CONTENT>
                            <span>Khéo léo</span>
                            <p>Giúp tự động hóa trong việc vận hành và mở rộng quy mô.</p>
                        </CONTAINER3_BODY_CONTENT>
                        <CONTAINER3_BODY_CONTENT>
                            <span>Tập trung</span>
                            <p>Thông qua các trò chơi rèn luyện trí não được thể hiện sinh động</p>
                        </CONTAINER3_BODY_CONTENT>
                        <CONTAINER3_BODY_CONTENT>
                            <span>Nhạy bén</span>
                            <p>
                                rèn luyện cho trẻ thói quen học tập theo giờ, tương tác với con trong các bài học mỗi
                                ngày.
                            </p>
                        </CONTAINER3_BODY_CONTENT>
                    </div>
                </div>
            </CONTAINER3_BODY>
        </CONTAINER3>
    );
}
