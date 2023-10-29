import React, { useEffect } from 'react';
import {
    CONTAINER4_1,
    CONTAINER4_1_BODY,
    CONTAINER4_1_HEADING,
} from '../../../../../../styles/component/home/Container4-styled';

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

    return (
        <CONTAINER4_1>
            <CONTAINER4_1_HEADING>
                <div>
                    <span>Chọn một khóa học phù hợp với bạn</span>
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
            <CONTAINER4_1_BODY></CONTAINER4_1_BODY>
        </CONTAINER4_1>
    );
}
