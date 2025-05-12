import logo from './images/header_logo_blue.png';
import applyIcon from './images/header_apply_store_ico.png';
import "./reset.css";
import './App.css';
import { useRef } from 'react';
import Layout from './component/Layout.jsx';
import Section01 from './component/Section01.js';
import Section02 from './component/Section02.js';
import Section03 from './component/Section03.js';
import Section04 from './component/Section04.js';
import Section05 from './component/Section05.js';
import Section06 from './component/Section06.js';
import Section07 from './component/Section07.js';
import Section08 from './component/Section08.js';
import Section09 from './component/Section09.js';
import Section09_m01 from './component/Section09_m01.js';
import Section09_m02 from './component/Section09_m02.js';
import Section09_m03 from './component/Section09_m03.js';
import Section10 from './component/Section10.js';

function App() {

    const sectionRefs = useRef([]);

    const sections = [
        { component: <Section01 /> },
        { component: <Section02 /> },
        { component: <Section03 />, className: 'specialBg pdReset' },
        { component: <Section04 /> },
        { component: <Section05 /> },
        { component: <Section06 /> },
        { component: <Section07 /> },
        { component: <Section08 /> },
        { component: <Section09 />, className: 'Sec09' },
        // { component: <Section09_m01 />, className: 'mSec09' },
        // { component: <Section09_m02 />, className: 'mSec09' },
        // { component: <Section09_m03 />, className: 'mSec09' },
        { component: <Section10 />, className: 'pdReset' },
    ];

    // 클릭 시 해당 ref 위치로 스크롤
    const scrollToSection = (index) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="wrap">

            <header className="header">
                <div className='logoArea'>
                    <div className="logoBox">
                        <img src={logo} alt='puffu global' />
                    </div>
                </div>
                <nav>
                    <p onClick={() => scrollToSection(2)}>회사소개</p>
                    <p onClick={() => scrollToSection(6)}>브랜드 철학</p>
                    <p onClick={() => scrollToSection(7)}>차별점</p>
                </nav>
                <div className='btnArea'>
                    <button onClick={() => window.open('https://k-puffu.puffucorp.com/', '_blank')}>
                        <p>입점신청</p>
                        <div>
                            <img src={applyIcon} alt='입점신청' />
                        </div>
                    </button>
                </div>
            </header>
            {/* <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
            <Section05 />
            <Section06 />
            <Section07 />
            <Section08 />
            <Section09 /> */}
            {sections.map((sec, index) => (
                <div key={index} className={sec.className}>
                    <div ref={(el) => (sectionRefs.current[index] = el)}>
                        {sec.component}
                    </div>
                </div>
            ))}

        </div>
    );
}

export default App;
