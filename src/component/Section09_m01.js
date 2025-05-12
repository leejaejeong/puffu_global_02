import { useEffect, useRef } from "react";
import style from './Section09.module.css';
import secImg01 from '../images/section09_img01.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section09_m01() {

    const txtRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            txtRef.current,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: txtRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                    // markers: true,
                },
            }
        );
    }, []);

    return (
        <div className={style.container}>
            <div className={style.secBox}>
                <div className={style.itemBox}>
                    <div className={`${style.item}`} >
                        <div className={style.itemImg}>
                            <img src={secImg01} />
                        </div>
                        <div className={style.itemTxt} ref={txtRef}>
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