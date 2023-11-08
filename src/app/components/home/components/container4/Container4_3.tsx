import React from 'react';
import { CONTAINER4_3, CONTAINER4_3_EDU } from '../../../../../../styles/component/home/Container4-styled';
import Image from 'next/image';
import educationImage from '../../../../../../public/education_for_all.webp.png';
import qrImag from '../../../../../../public/Qr-code-sign-on-transparent-background-PNG-1 1.png';
import eggImage from '../../../../../../public/pngegg (4) 1.png';
export default function Container4_3() {
    return (
        <CONTAINER4_3>
            <div className="contain">
                <Image src={educationImage} alt="education" width={496} height={360} />
                <CONTAINER4_3_EDU>
                    <div className="edu-heading">
                        <span>Making dreams come true with the power of education.</span>
                    </div>
                    <div className="edu-qr">
                        <div className="qr-icon">
                            <Image src={qrImag} alt="qr" width={65} height={65} />
                            <Image src={qrImag} alt="qr" width={65} height={65} />
                        </div>
                        <Image src={eggImage} alt="egg" width={200} height={143} />
                    </div>
                </CONTAINER4_3_EDU>
            </div>
        </CONTAINER4_3>
    );
}
