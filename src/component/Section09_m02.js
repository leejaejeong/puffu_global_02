import { useEffect, useRef } from "react";
import './secCommon.css';
import style from './Section09.module.css';
import secImg02 from '../images/section09_img02.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section09_m02() {

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
        <div className='container'>
            <div className='secBox'>
                <div className={style.itemBox}>
                    <div className={`${style.item}`}>
                        <div className={style.itemImg}>
                            <img src={secImg02} />
                        </div>
                        <div className={style.itemTxt} ref={txtRef}>
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