import React from 'react';
import {
    CONTAINER2,
    CONTAINER2_BODY,
    CONTAINER2_BODY_CENTER,
    CONTAINER2_BODY_GRID,
    CONTAINER2_BODY_RE,
    CONTAINER2_FOOTER,
    CONTAINER2_FOOTER_BTN,
    CONTAINER2_HEADER,
} from '../../../../../styles/component/home/home-styled';

import Image from 'next/image';
import pesudo from '../../../../../public/pseudo.png';
import girl from '../../../../../public/girl.png';
import Link from 'next/link';
export default function Container2() {
    return (
        <CONTAINER2>
            {/* ---------- */}
            <CONTAINER2_HEADER>
                <div>
                    <span>Bí quyết thành công, tự tin cho mọi học sinh</span>
                </div>
            </CONTAINER2_HEADER>
            {/* ------------ */}
            <CONTAINER2_BODY>
                <CONTAINER2_BODY_RE>
                    <Image src={pesudo} alt="pesudo" width={575} height={480} />
                    {/* -------------- */}
                    <CONTAINER2_BODY_CENTER>
                        <div>
                            <CONTAINER2_BODY_GRID>
                                <div>
                                    <span>Tự tin tính toán</span>
                                    <span>Toán học</span>
                                </div>
                                <div>
                                    <span>Giao tiếp trôi chảy</span>
                                    <span>Ngoại ngữ</span>
                                </div>
                                <div>
                                    <span>Hội nhập thế giới</span>
                                    <span>Khoa học & Công nghệ</span>
                                </div>
                                <div>
                                    <span>Khéo léo</span>
                                    <span>Nghệ thuật</span>
                                </div>
                                <div>
                                    <span>Bổ trợ thể chất</span>
                                    <span>Giáo dục thể chất</span>
                                </div>
                                <div>
                                    <span>Trau dồi kỹ năng khác</span>
                                    <span>Kỹ năng sống</span>
                                </div>
                            </CONTAINER2_BODY_GRID>
                        </div>
                        {/* ---------------- */}
                        <Image src={girl} alt="girls" width={433} height={475} />
                    </CONTAINER2_BODY_CENTER>
                </CONTAINER2_BODY_RE>
            </CONTAINER2_BODY>
            {/* ------------ */}
            <CONTAINER2_FOOTER>
                <CONTAINER2_FOOTER_BTN>
                    <Link href="/">Khám phá</Link>
                </CONTAINER2_FOOTER_BTN>
            </CONTAINER2_FOOTER>
        </CONTAINER2>
    );
}
