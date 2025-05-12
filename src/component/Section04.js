import { useEffect, useRef } from "react";
import style from './Section04.module.css';
import arrowImg from '../images/section04_arr.png';
import sec04Img from '../images/section04_img.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section04() {

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
                <div className={style.secTxt} ref={txtRef}>
                    <h3>
                        중국 시장 진출을 위한<br />
                        전용 플랫폼 구축
                    </h3>
                    <p>
                        한국 브랜드의 중국 시장 진출을 위한 플랫폼<br />
                        ‘K-PUFFU’를 구축하고 운영하고 있습니다.
                    </p>
                    <button onClick={() => window.open('https://www.puffukorea.com/kr/feeds', '_blank')}>
                        <p>K-PUFFU로 이동</p>
                        <div>
                            <img src={arrowImg} />
                        </div>
                    </button>
                </div>
                <div className={style.secImg}>
                    <img src={sec04Img} />
                </div>
            </div>
        </div>
    )

}

export default Section04;