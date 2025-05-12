import { useEffect, useRef } from "react";
import './secCommon.css';
import style from './Section09.module.css';
import secImg02 from '../images/section09_img02.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section09_m02() {

    const itemRef = useRef();

    useEffect(() => {

        gsap.to(itemRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: itemRef.current,
                start: "top 80%", // 뷰포트 80% 지점에 닿을 때 시작
                toggleActions: "play none none none",
                // markers: true,
            },
        });
    }, []);

    return (
        <div className='wrap'>
            <div className='secBox'>
                <div className={style.itemBox}>
                <div className={`${style.item}`} ref={itemRef}>
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
                </div>
            </div>
        </div>
    )
}

export default Section09_m02;