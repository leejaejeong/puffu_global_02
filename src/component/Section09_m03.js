import { useEffect, useRef } from "react";
import style from './Section09.module.css';
import secImg03 from '../images/section09_img03.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section09_m03() {

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
                    <div className={`${style.item}`} >
                        <div className={style.itemImg}>
                            <img src={secImg03} />
                        </div>
                        <div className={style.itemTxt} ref={txtRef}>
                            <h4>
                                당신의 브랜드에<br />
                                온전히 집중할 수 있도록
                            </h4>
                            <p>
                                운영의 번거로움은 줄이고,<br />
                                상품 경쟁력에만 집중할 수 있도록 지원합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section09_m03;