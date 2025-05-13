import { use, useEffect, useRef } from "react";
import style from './Section08.module.css';
import secImg from '../images/section08_img.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section08() {

    const titRef = useRef();

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

    // useEffect(() => {
    //     function setvhSize() {
    //         const height = window.visualViewport?.height || window.innerHeight;
    //         const vh = height * 0.01;
    //         document.documentElement.style.setProperty('--vh', `${vh}px`);
    //     }

    //     setvhSize();

    //     window.addEventListener('resize', setvhSize);
    //     window.visualViewport?.addEventListener('resize', setvhSize);

    //     return () => {
    //         window.removeEventListener('resize', setvhSize);
    //         window.visualViewport?.removeEventListener('resize', setvhSize);
    //     };
    // }, []);

    // useEffect(() => {
    //     const height = window.innerHeight;
    //     const vh = height * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    // }, []);

    useEffect(() => {
        let frameId;

        const setvhSize = () => {
            if (frameId) cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(() => {
                const height = window.visualViewport?.height || window.innerHeight;
                const vh = height * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            });
        };

        setvhSize(); // 초기 실행

        window.addEventListener('resize', setvhSize);
        window.visualViewport?.addEventListener('resize', setvhSize);
        window.addEventListener('scroll', setvhSize, { passive: true }); // 주소창 숨김 감지

        return () => {
            window.removeEventListener('resize', setvhSize);
            window.visualViewport?.removeEventListener('resize', setvhSize);
            window.removeEventListener('scroll', setvhSize);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div className={style.container}>
            <div className={style.secBox}>
                <div className={style.secTitle} ref={titRef}>
                    <p>
                        우리만의 차별점
                    </p>
                    <h3>
                        중국진출은 단순하게,<br />
                        파트너십은 깊이있게
                    </h3>
                </div>
                <div className={style.secImg}>
                    <img src={secImg} />
                </div>
            </div>
        </div>
    )
}

export default Section08;