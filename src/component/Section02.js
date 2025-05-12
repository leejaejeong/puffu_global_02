import { useEffect, useRef } from "react";
import style from './Section02.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import secImg from '../images/section02_img.png';

gsap.registerPlugin(ScrollTrigger);

function Section02() {

    const titRef = useRef();

    // useEffect(() => {
    //     titRef.current.style.opacity = 0;
    // }, []);

    useEffect(() => {
    gsap.fromTo(
        titRef.current,
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
                trigger: titRef.current,
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
                <div className={style.secTitle} ref={titRef}>
                    <h2>
                        당신의 브랜드가<br />
                        중국 시장에<br />
                        진출할 수 있도록
                    </h2>
                </div>
                <div className={style.secImg}>
                    <img src={secImg} />
                </div>
            </div>
        </div>
    )
}

export default Section02;