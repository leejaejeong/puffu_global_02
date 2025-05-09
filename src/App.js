import logo from './images/header_logo_blue.png';
import applyIcon from './images/header_apply_store_ico.png';
import "./reset.css";
import './App.css';
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
import Section10 from './component/Section10.js';

function App() {

    const sections = [
        { component: <Section01 /> },
        { component: <Section02 /> },
        { component: <Section03 />, className: 'specialBg' }, // Section03만 다른 배경
        { component: <Section04 /> },
        { component: <Section05 /> },
        { component: <Section06 /> },
        { component: <Section07 /> },
        { component: <Section08 /> },
        { component: <Section09 /> },
        { component: <Section10 />, className: 'pdReset' }, // 패딩 0px
    ];


    return (
        <div className="wrap">

            <header className="header">
                <div className="logoBox">
                    <img src={logo} alt='puffu global' />
                </div>
                <nav>
                    <p>회사소개</p>
                    <p>사업소개</p>
                    <p>브랜드 철학</p>
                    <p>차별점</p>
                </nav>
                <button onClick={() => window.location.href = 'https://k-puffu.puffucorp.com/'}>
                    <p>입점신청</p>
                    <div>
                        <img src={applyIcon} alt='입점신청' />
                    </div>
                </button>
            </header>
            {sections.map((sec) => (
                <Layout key={sec.id} className={sec.className}>
                    {sec.component}
                </Layout>
            ))}
            {/* <Layout><Section01 /></Layout>
            <Layout><Section02 /></Layout>
            <Layout02><Section03 /> </Layout02>
            <Layout><Section04 /></Layout>
            <Layout><Section05 /></Layout>
            <Layout><Section06 /></Layout>
            <Layout><Section07 /></Layout> */}

        </div>
    );
}

// const Layout = ({ children }) => {

//     return (
//         <div className="layOut">
//             {children}
//         </div>
//     )
// }

// const Layout02 = ({ children }) => {

//     return (
//         <div className="layOut" style={{ backgroundColor: '#0064FF' }}>
//             {children}
//         </div>
//     )
// }

export default App;
