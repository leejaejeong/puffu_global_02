import React from "react";
import './secCommon.css';
import style from './Section08.module.css';
import secImg from '../images/section08_img.png';

function Section08() {
    return (
        <div className='wrap'>
            <div className='secBox'>
                <div className={style.secTitle}>
                    <p>
                    우리만의 차별점
                    </p>
                    <h3>
                    중국진출은 단순하게,<br/>
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