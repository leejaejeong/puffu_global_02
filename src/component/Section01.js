import React, { useEffect } from "react";
import style from './Section01.module.css';
import heroImg from '../images/hero_handshake.png';

function Section01() {

    useEffect(() => {

        function setvhSize() {
            // let vh = window.innerHeight * 0.01;
            let vh = window.VisualViewport.height * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        setvhSize();

        window.addEventListener('resize', setvhSize);
        window.VisualViewport?.addEventListener('resize', setvhSize);

        // cleanup 함수로 리스너 제거
        return () => {
            window.removeEventListener('resize', setvhSize);
            window.VisualViewport?.removeEventListener('resize', setvhSize);
        };

    }, []);

    return (
        <div className={style.container}>
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