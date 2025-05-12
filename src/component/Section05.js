import { useEffect, useRef } from "react";
import './secCommon.css';
import style from './Section04.module.css';
import sec05Img from '../images/section05_img.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section05() {

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
        <div className='wrap'>
            <div className={`${style.secBox} ${style.secBox02}`}>
                <div className={style.secTxt} ref={txtRef}>
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