import { useState } from 'react';
import { Navbar, NavbarItem } from '../../Headless/NavBar/HeadlessNavBar'; 
import { useNavbar } from '../../Headless/NavBar/hook/useNavbar'; // Import your custom hook
import { useLogout } from './useLogout'; // Import your logout function

const Navbar = () => {
  const { navigate, isActive } = useNavbar();
  const logoutFunction = useLogout();
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>

      <Navbar className={`bg-gradient-to-b from-darkorange to-black flex items-center justify-between py-6 px-4 ${isCollapsed ? "hidden" : "flex"} sm:flex w-full`}>
        <ul className="flex items-center gap-6 w-full">
          
          {/* Dashboard */}
          <NavbarItem
            path="/dashboard"
            isActive={isActive("/dashboard")}
            onClick={() => navigate("/dashboard")}
            className={`flex items-center justify-center gap-4 px-4 py-2 rounded-lg ${isActive("/dashboard") ? "bg-primary shadow-lg opacity-100" : "opacity-70 hover:bg-primary hover:shadow-lg hover:opacity-70"}`}
          >
            <img src={icons.dashboard} alt="Dashboard" className="h-6 w-6" />
            <span className="text-white hidden sm:block">Dashboard</span>
          </NavbarItem>

        </ul>
      </Navbar>
    </>
  );
};

export default UserDefinedNavbar;
