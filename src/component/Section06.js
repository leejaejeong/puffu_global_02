import { useEffect, useRef } from "react";
import './secCommon.css';
import style from './Section04.module.css';
import sec06Img from '../images/section06_img.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section06() {

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
                        맞춤형<br />
                        포지셔닝 가이드
                    </h3>
                    <p>
                        중국 소비자를 위한 제품 포지셔닝 가이드는 물론<br />
                        판매자의 상품이 시장에 효과적으로<br />
                        자리 잡을 수 있도록 함께합니다.
                    </p>
                </div>
                <div className={style.secImg}>
                    <img src={sec06Img} />
                </div>
            </div>
        </div>
    )

}

export default Section06;