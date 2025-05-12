const Layout = ({ children, className }) => {
    return (
      <div className={`layOut ${className || ''}`}>
        {children}
      </div>
    );
  };
  
  export default Layout;