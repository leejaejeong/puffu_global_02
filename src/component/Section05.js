import React from "react";
import './secCommon.css';
import style from './Section04.module.css';
import sec05Img from '../images/section05_img.png';

function Section05() {
    return (
        <div className='wrap'>
            <div className={`${style.secBox} ${style.secBox02}`}>
                <div className={style.secTxt}>
                    <h3>
                        판매부터<br />
                        물류·CS·마케팅까지
                    </h3>
                    <p>
                        K-PUFFU를 통해 중국 현지 판매부터<br />
                        통관, 배송, 고객 응대까지 전 과정을 대행하며<br />
                        프로모션 기획과 마케팅까지 지원합니다.
                    </p>
                </div>
                <div className={style.secImg}>
                    <img src={sec05Img} />
                </div>
            </div>
        </div>
    )
}

export default Section05;