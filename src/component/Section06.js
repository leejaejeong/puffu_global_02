import React from "react";
import './secCommon.css';
import style from './Section04.module.css';
import sec06Img from '../images/section06_img.png';

function Section06() {
    return (
        <div className='wrap'>
            <div className='secBox'>
                <div className={style.secTxt}>
                    <h3>
                        맞춤형<br />
                        포지셔닝 가이드
                    </h3>
                    <p>
                        중국 소비자를 위한 제품 포지셔닝 가이드는 물론<br />
                        판매자의 상품이 시장에 효과적으로<br />
                        자리 잡을 수 있도록 함께합니다.
                    </p>
                </div>
                <div className={style.secImg}>
                    <img src={sec06Img} />
                </div>
            </div>
        </div>
    )

}

export default Section06;