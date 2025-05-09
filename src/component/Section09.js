import React from "react";
import './secCommon.css';
import style from './Section09.module.css';
import secImg01 from '../images/section09_img01.png';
import secImg02 from '../images/section09_img02.png';
import secImg03 from '../images/section09_img03.png';

function Section09() {
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
                <div className={`${style.item}`}>
                    <div className={style.itemImg}>
                        <img src={secImg02} />
                    </div>
                    <div className={style.itemTxt}>
                        <h4>
                            혼자가 아닌<br />
                            함께 만드는 파트너십 플랫폼
                        </h4>
                        <p>
                            판매자와 브랜드가 함께 성장하는 구조를 지향하며,<br />
                            지속 가능한 파트너십을 만들어갑니다.
                        </p>
                    </div>
                </div>
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

export default Section09;