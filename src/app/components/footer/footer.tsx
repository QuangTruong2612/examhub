'use client';
import React from 'react';
import {
    DIVFOOTER,
    DIVFOOTER1_RIGHT,
    DIVFOOTER_1,
    FOOTER,
    FOOTER1_RIGHT_ITEM,
    FOOTER1_RIGHT_LIST,
    LISTICON_FOLLOW,
    SPANFOOTER_2,
} from '../../../../styles/component/footer/footer-style';
import Image from 'next/image';
import Logo from '../../../../public/footer_logo.png';
import FBicon from '../../../../public/fb.png';
import GGicon from '../../../../public/gg.png';
import YTicon from '../../../../public/youtube.png';
export default function Footer() {
    const ListConnect = ['LIÊN KẾT', 'Tin túc', 'FAQ', 'Chính sách'];
    const ListContact = ['LIÊN HỆ', '69- 71 Bùi Dương Lịch, Quận Sơn Trà, Đà Nẵng', '(+84) 989 550 808'];

    return (
        <footer>
            <FOOTER>
                <DIVFOOTER>
                    {/* FOOTER 1 */}
                    <DIVFOOTER_1>
                        <Image src={Logo} alt="footer_logo" width={230} height={100} className="logo" />
                        {/* ----- */}
                        <DIVFOOTER1_RIGHT>
                            <FOOTER1_RIGHT_LIST>
                                {ListConnect.map((item, index) => (
                                    <FOOTER1_RIGHT_ITEM key={index}>{item}</FOOTER1_RIGHT_ITEM>
                                ))}
                            </FOOTER1_RIGHT_LIST>
                            <FOOTER1_RIGHT_LIST>
                                {ListContact.map((item, index) => (
                                    <FOOTER1_RIGHT_ITEM key={index}>{item}</FOOTER1_RIGHT_ITEM>
                                ))}
                            </FOOTER1_RIGHT_LIST>
                            <FOOTER1_RIGHT_LIST>
                                <FOOTER1_RIGHT_ITEM>THEO DÕI CHÚNG TÔI TRÊN</FOOTER1_RIGHT_ITEM>
                                <FOOTER1_RIGHT_ITEM>
                                    <LISTICON_FOLLOW>
                                        <Image src={FBicon} alt="fb" width={20} height={20} />
                                        <Image src={GGicon} alt="gg" width={20} height={20} />
                                        <Image src={YTicon} alt="yt" width={20} height={20} />
                                    </LISTICON_FOLLOW>
                                </FOOTER1_RIGHT_ITEM>
                            </FOOTER1_RIGHT_LIST>
                        </DIVFOOTER1_RIGHT>
                    </DIVFOOTER_1>
                    {/* FOOTER 2 */}
                    <SPANFOOTER_2>©2023, Hub Platform. All Rights Reserved</SPANFOOTER_2>
                </DIVFOOTER>
            </FOOTER>
        </footer>
    );
}
