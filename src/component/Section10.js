import React from "react";
import './secCommon.css';
import style from './Section10.module.css';
import bannerImg from '../images/section10_img.png';
import topArrow from '../images/section10_top_arr.png';
import logoBlack from '../images/section10_logo_black.png';

function Section10() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className='wrap'>
            <div className={style.secBox}>
                <div className={style.topBtnArea}>
                    <div className={style.topBtn} onClick={() => scrollToTop()}>
                        <img src={topArrow} />
                    </div>
                </div>
                <div className={style.bannerArea}>
                    <div className={style.bannerTxt}>
                        <p>
                            누구든 쉽게 시작하고,<br />
                            모두가 함께 성장하는 플랫폼
                        </p>
                        <div>
                            <button onClick={() => window.open('https://k-puffu.puffucorp.com/', '_blank')}>
                                K-PUFFU 입점 신청하러 가기
                            </button>
                        </div>
                    </div>
                    <div className={style.bannerImg}>
                        <img src={bannerImg} />
                    </div>
                </div>
                <footer>
                    <div className={style.footerInfo}>
                        <div className={style.footerLogo}>
                            <img src={logoBlack} />
                        </div>
                        <div className={style.footerTxt}>
                            <p>푸푸글로벌(주)</p>
                            <div>
                                <span>
                                    <strong>대표</strong>
                                    염희하
                                </span>
                                <span>
                                    <strong>이메일</strong>
                                    puffuglobal23@naver.com
                                </span>
                                <span>
                                    <strong>주소</strong>
                                    대전광역시 서구 관저중로95번길 74, 2층(관저동)
                                </span>
                                <span>
                                    <strong>사업자 등록 번호</strong>
                                    559-81-02488
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={style.copyright}>
                        <p>© 푸푸글로벌 ALL RIGHTS RESERVED.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Section10;