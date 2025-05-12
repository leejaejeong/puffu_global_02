// const Layout = ({ children, className }) => {
//     return (
//       <div className={`layOut ${className || ''}`}>
//         {children}
//       </div>
//     );
//   };
  
//   export default Layout;

import { useEffect, useState } from 'react';

const Layout = ({ children, className }) => {
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`layOut ${className || ''}`}
      style={{
        height: `${vh}px`,
        scrollSnapAlign: 'start',
        flexShrink: 0, // 혹시 flex 사용 시 높이 문제 방지
      }}
    >
      {children}
    </div>
  );
};

export default Layout;