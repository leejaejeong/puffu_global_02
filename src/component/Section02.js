import React, { useEffect, useRef } from "react";
import './secCommon.css';
import style from './Section02.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import secImg from '../images/section02_img.png';

gsap.registerPlugin(ScrollTrigger); 

function Section02() {

    return (
        <div className='wrap'>
            <div className='secBox'>
                <div className={style.secTitle}>
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