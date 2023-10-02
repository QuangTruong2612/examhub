'use client';
import React from 'react';

import Image from 'next/image';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
//
import {
    HEADER,
    HEADER_FOOTER,
    HEADER_FOOTER_NAVBAR,
    HEADER_FRAME,
    HEADER_NAVBAR,
    HEADER_SEARCH,
    HEADER_SEARCH_BUTTON,
    HEADER_SEARCH_INPUT,
    HEARDER_BTN,
    LISTITEM,
    ITEMNAV,
} from '../styles/component/HEADER_Style';

import Logo from '../../public/LOGOEXAM.png';
import Flag from '../../public/Flag.svg';
import Link from 'next/link';
import GDICON from '../../public/GĐ.svg';
import { usePathname } from 'next/navigation';

export default function Header() {
    const items = [
        {
            key: 0,
            icon: <Image src={Flag} alt="VN" width={24} height={16} />,
            title: 'VN',
        },
        {
            key: 1,
            icon: <Image src={Flag} alt="VN" width={24} height={16} />,
            title: 'VN',
        },
    ];

    const pathname = usePathname();
    return (
        <HEADER>
            <HEADER_FRAME>
                <Image alt="Logo" src={Logo} width={86} height={42} />
                <HEADER_SEARCH>
                    <HEADER_SEARCH_BUTTON>
                        <SearchOutlined className="SearchIcon" />
                    </HEADER_SEARCH_BUTTON>
                    <HEADER_SEARCH_INPUT placeholder="Tìm kiếm ..." type="text" name="action" />
                </HEADER_SEARCH>
                <HEADER_NAVBAR>
                    <Select className="SelectItem" defaultValue={items.at(0)}>
                        {items.map((option) => (
                            <Select.Option key={option.key} value={option.key}>
                                <div>{option.icon}</div>
                            </Select.Option>
                        ))}
                    </Select>
                    <HEARDER_BTN>
                        Đề xuất cho bạn
                        <DownOutlined className="DownIcon" />
                    </HEARDER_BTN>
                    <Link href="/">
                        <HEARDER_BTN>Đăng nhập</HEARDER_BTN>
                    </Link>
                </HEADER_NAVBAR>
            </HEADER_FRAME>
            <HEADER_FOOTER>
                <HEADER_FOOTER_NAVBAR>
                    <nav>
                        <LISTITEM>
                            <ITEMNAV className={pathname === '/' ? 'active' : ''}>
                                <Link href="/">Trang chủ</Link>
                            </ITEMNAV>
                            <ITEMNAV className={pathname === '/exam' ? 'active' : ''}>
                                <Link href="/exam">Kỳ thi</Link>
                            </ITEMNAV>
                            <ITEMNAV>
                                <Link href="/sale">
                                    Chuỗi giảm giá gia đình
                                    <Image src={GDICON} alt="gd" width={12} height={16} />
                                </Link>
                            </ITEMNAV>
                            <ITEMNAV>
                                <Link href="/gift">
                                    Qùa tặng tri thức
                                    <Image src={GDICON} alt="gd" width={12} height={16} />{' '}
                                </Link>
                            </ITEMNAV>
                            <ITEMNAV>
                                <Link href="/product">Sản phẩm</Link>
                            </ITEMNAV>
                            <ITEMNAV>
                                <Link href="/event">Sự kiện</Link>
                            </ITEMNAV>
                            <ITEMNAV>
                                <Link href="/about">Về chúng tôi</Link>
                            </ITEMNAV>
                            <ITEMNAV>
                                <Link href="/contact">Liên hệ</Link>
                            </ITEMNAV>
                        </LISTITEM>
                    </nav>
                </HEADER_FOOTER_NAVBAR>
            </HEADER_FOOTER>
        </HEADER>
    );
}
