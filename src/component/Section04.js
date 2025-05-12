import { useEffect, useRef } from "react";
import './secCommon.css';
import style from './Section04.module.css';
import arrowImg from '../images/section04_arr.png';
import sec04Img from '../images/section04_img.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section04() {

const txtRef = useRef();

    useEffect(() => {

        gsap.to(txtRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: txtRef.current,
                start: "top 80%", // 뷰포트 80% 지점에 닿을 때 시작
                toggleActions: "play none none none",
                // markers: true,
            },
        });
    }, []);

    return (
        <div className='wrap'>
            <div className='secBox'>
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