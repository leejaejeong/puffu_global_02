import React from "react";
import style from './Section01.module.css';
import heroImg from '../images/hero_handshake.png';

function Section01() {
    return (
        <div className={style.wrap}>
            <div className={style.hero}>
                <div className={style.heroTxt}>
                    <div>
                        <h1>중국 진출 파트너</h1>
                    </div>
                    <div>
                        <h1 className={style.blueText}>PUFFU GLOBAL</h1>
                    </div>

                    <p>
                        입점만 하면 중국 판매가 시작됩니다. <br />
                        고객응대, 마케팅까지 전 과정 지원.
                    </p>
                </div>
                <div className={style.heroImg}>
                    <img src={heroImg} />
                </div>
            </div>

            <div className={style.scrollArea}>
                <div className={style.scrollCircle}>
                    <div className={style.circle}></div>
                </div>
                <div className={style.scrollText}>
                    <p>SCROLL</p>
                </div>

            </div>
        </div>
    )
}

export default Section01;