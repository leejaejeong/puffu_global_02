import React from "react";
import './secCommon.css';
import style from './Section09.module.css';
import secImg03 from '../images/section09_img03.png';

function Section09_m03() {
    return (
        <div className='wrap'>
            <div className='secBox'>
                <div className={style.itemBox}>
                <div className={`${style.item}`}>
                    <div className={style.itemImg}>
                        <img src={secImg03} />
                    </div>
                    <div className={style.itemTxt}>
                        <h4>
                            당신의 브랜드에<br />
                            온전히 집중할 수 있도록
                        </h4>
                        <p>
                            운영의 번거로움은 줄이고,<br />
                            상품 경쟁력에만 집중할 수 있도록 지원합니다.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Section09_m03;