import RouteConfig from './component/router/RouteConfig';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthStateProvider } from "./component/AppContext/Context"
import Analytical from './component/Analytical-Component/Analytical';
function App() {
  return (
    // <Router>
    //   <AuthStateProvider>
    //     <RouteConfig />
    //   </AuthStateProvider>
    // </Router>
    <Analytical/>
  );
}

export default App;
