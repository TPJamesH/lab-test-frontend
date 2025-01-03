

// Navbar Wrapper
const Navbar = ({ children, className }) => {
  return <nav className={className}>{children}</nav>;
};

// Navbar Item
const NavbarItem = ({ path, isActive, onClick, children, className }) => {
  return (
    <li
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`${className} cursor-pointer`}
    >
      {children}
    </li>
  );
};

  
  export {Navbar, NavbarItem };
