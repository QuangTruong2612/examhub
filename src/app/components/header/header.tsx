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
} from '../../../../styles/component/header/header-style';

import Logo from '../../../../public/LOGOEXAM.png';
import VN from '../../../../public/Flag.svg';
import KOR from '../../../../public/han.png';
import AME from '../../../../public/my.png';
import ENG from '../../../../public/eng.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useState } from 'react';

export default function Header() {
    const items = [
        {
            key: 0,
            icon: <Image src={VN} alt="VN" width={24} height={16} />,
        },
        {
            key: 1,
            icon: <Image src={KOR} alt="VN" width={24} height={16} />,
        },
        {
            key: 2,
            icon: <Image src={AME} alt="VN" width={24} height={16} />,
        },
        {
            key: 3,
            icon: <Image src={ENG} alt="VN" width={24} height={16} />,
        },
    ];
    // API SEARCH
    const [text, setText] = useState('');
    console.log(text);

    const pathname = usePathname();
    return (
        <HEADER>
            <HEADER_FRAME>
                <Image alt="Logo" src={Logo} width={86} height={42} />
                <HEADER_SEARCH>
                    <HEADER_SEARCH_BUTTON>
                        <SearchOutlined className="SearchIcon" />
                    </HEADER_SEARCH_BUTTON>
                    <HEADER_SEARCH_INPUT
                        placeholder="Tìm kiếm ..."
                        type="text"
                        name="action"
                        onChange={(e) => setText(e.target.value)}
                    />
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
                    <HEARDER_BTN>
                        <Link href="/api/search.php">Đăng nhập</Link>
                    </HEARDER_BTN>
                </HEADER_NAVBAR>
            </HEADER_FRAME>
            <HEADER_FOOTER>
                <HEADER_FOOTER_NAVBAR>
                    <LISTITEM>
                        <ITEMNAV className={pathname === '/' ? 'active' : ''}>
                            <Link href="/">Trang chủ</Link>
                        </ITEMNAV>
                        <ITEMNAV className={pathname === '/components/exam' ? 'active' : ''}>
                            <Link
                                href={
                                    pathname.includes('components') === true
                                        ? pathname.replace(pathname.split('/')[2], 'exam')
                                        : 'components/exam'
                                }
                            >
                                Kỳ thi
                            </Link>
                        </ITEMNAV>
                        <ITEMNAV className={pathname === '/components/sale' ? 'active' : ''}>
                            <Link
                                href={
                                    pathname.includes('components') === true
                                        ? pathname.replace(pathname.split('/')[2], 'sale')
                                        : 'components/sale'
                                }
                            >
                                Chuỗi giảm giá gia đình
                            </Link>
                        </ITEMNAV>
                        <ITEMNAV className={pathname === '/components/gift' ? 'active' : ''}>
                            <Link
                                href={
                                    pathname.includes('components') === true
                                        ? pathname.replace(pathname.split('/')[2], 'gift')
                                        : 'components/gift'
                                }
                            >
                                Quà tặng tri thức
                            </Link>
                        </ITEMNAV>
                        <ITEMNAV className={pathname === '/components/product' ? 'active' : ''}>
                            <Link
                                href={
                                    pathname.includes('components') === true
                                        ? pathname.replace(pathname.split('/')[2], 'product')
                                        : 'components/product'
                                }
                            >
                                Sản phẩm
                            </Link>
                        </ITEMNAV>
                        <ITEMNAV className={pathname === '/components/event' ? 'active' : ''}>
                            <Link
                                href={
                                    pathname.includes('components') === true
                                        ? pathname.replace(pathname.split('/')[2], 'event')
                                        : 'components/event'
                                }
                            >
                                Sự kiện
                            </Link>
                        </ITEMNAV>
                        <ITEMNAV className={pathname === '/components/about' ? 'active' : ''}>
                            <Link
                                href={
                                    pathname.includes('components') === true
                                        ? pathname.replace(pathname.split('/')[2], 'about')
                                        : 'components/about'
                                }
                            >
                                Về chúng tôi
                            </Link>
                        </ITEMNAV>
                        <ITEMNAV className={pathname === '/components/contact' ? 'active' : ''}>
                            <Link
                                href={
                                    pathname.includes('components') === true
                                        ? pathname.replace(pathname.split('/')[2], 'contact')
                                        : 'components/contact'
                                }
                            >
                                Liên hệ
                            </Link>
                        </ITEMNAV>
                    </LISTITEM>
                </HEADER_FOOTER_NAVBAR>
            </HEADER_FOOTER>
        </HEADER>
    );
}
