import useProtectedRoutePolicy from "./ProtectedRouteHook";
const ProtectedRoute = ({ children }) => {
    const { user } = useProtectedRoutePolicy();
   // const location = useLocation();
    if (user.username === 'guest' && user.role === 'guest') {
        window.location.replace("/login")
    }
    return children;
};
export default ProtectedRoute;