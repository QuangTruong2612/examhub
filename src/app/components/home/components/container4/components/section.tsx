import React from 'react';
import { CONTAINER4_1_CONTAIN_SECTION } from '../../../../../../../styles/component/home/Container4-styled';
import Link from 'next/link';

export default function Section(props: { title: string; image: any; heading: string; subject: string }) {
    return (
        <CONTAINER4_1_CONTAIN_SECTION>
            <div className="secton_subject">
                <span>{props.subject}</span>
            </div>
            <div className="section">
                <div className="section_content">
                    <div className="section_content-info">
                        <span className="section_content-header">{props.heading}</span>
                        <span className="section_content-text">{props.title}</span>
                    </div>
                    <button className="section_content-btn">
                        <Link href="/">Xem thêm</Link>
                    </button>
                </div>
                {props.image}
            </div>
        </CONTAINER4_1_CONTAIN_SECTION>
    );
}
