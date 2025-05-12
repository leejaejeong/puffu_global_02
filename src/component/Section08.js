import { useEffect, useRef } from "react";
import './secCommon.css';
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

    return (
        <div className='wrap'>
            <div className='secBox'>
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