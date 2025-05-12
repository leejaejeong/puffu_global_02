import React from "react";
import './secCommon.css';
import style from './Section09.module.css';
import secImg01 from '../images/section09_img01.png';

function Section09_m01() {
    return (
        <div className='wrap'>
            <div className='secBox'>
                <div className={style.itemBox}>
                <div className={`${style.item}`}>
                    <div className={style.itemImg}>
                        <img src={secImg01} />
                    </div>
                    <div className={style.itemTxt}>
                        <h4>
                            입점만 하면<br />
                            중국 판매가 시작됩니다
                        </h4>
                        <p>
                            복잡한 중국 진출 절차 없이<br />
                            K-PUFFU에서 모든 과정을 처리합니다.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Section09_m01;