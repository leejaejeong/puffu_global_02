import { useEffect, useRef } from "react";
import style from './Section03.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section03() {

    const pRef = useRef();
    const titRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            pRef.current,
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
                    trigger: pRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                    // markers: true,
                },
            }
        );
    }, []);

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

    useEffect(() => {
        const height = window.innerHeight;
        const vh = height * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);

    return (
        <div className={style.container}>
            <div className={style.secBox02}>
                <p ref={pRef}>우리가 제공하는 핵심 서비스</p>
                <h3 ref={titRef}>
                    한국 브랜드의 중국 진출,<br />
                    K-PUFFU를 통해 시작됩니다.
                </h3>
            </div>
        </div>
    )
}

export default Section03;