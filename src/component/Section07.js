import { useEffect, useRef } from "react";
import style from './Section07.module.css';
import linkIcon from '../images/section07_link.png';
import simpleIcon from '../images/section07_simple.png';
import growthIcon from '../images/section07_growth.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function Section07() {

    const containerRef = useRef();
    const cardRef01 = useRef();
    const cardRef02 = useRef();
    const cardRef03 = useRef();

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
                // markers: true,
            },
        });

        tl.fromTo(
            [cardRef01.current, cardRef02.current, cardRef03.current],
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power1.out",
            }
        );
    }, []);

    return (
        <div className={style.container}>
            <div className={`${style.secBox} ${style.secBox03}`}>
                <div className={style.secTxt}>
                    <p>
                        우리가 믿는 가치
                    </p>
                    <h3>
                        복잡함은 줄이고,<br />
                        함께 성장하는 푸푸글로벌
                    </h3>
                </div>
                <div className={style.cardBox} ref={containerRef}>
                    <div className={`${style.card}`} ref={cardRef01}>
                        <div className={style.cardIcon}>
                            <img src={linkIcon} />
                        </div>
                        <div className={style.cardTxt}>
                            <h4>CONNECTION</h4>
                            <p>
                                누구나 시작할 수 있고<br />
                                함께 성장할 수 있는 기회를 연결합니다.
                            </p>
                        </div>
                    </div>
                    <div className={`${style.card}`} ref={cardRef02}>
                        <div className={style.cardIcon}>
                            <img src={simpleIcon} />
                        </div>
                        <div className={style.cardTxt}>
                            <h4>SIMPLICITY</h4>
                            <p>
                                쉽게 시작하되, 확실한 결과로.<br />
                                우리는 ‘단순함’ 속에 전략이 있다고 믿습니다.
                            </p>
                        </div>
                    </div>
                    <div className={`${style.card}`} ref={cardRef03}>
                        <div className={style.cardIcon}>
                            <img src={growthIcon} />
                        </div>
                        <div className={style.cardTxt}>
                            <h4>GROWTH</h4>
                            <p>
                                우리는 브랜드가 시장에서 성장하고<br />
                                자리 잡을 수 있도록 돕는 성장 파트너입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Section07;