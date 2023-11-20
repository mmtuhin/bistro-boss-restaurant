import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import NavBar from "../../pages/shared/NavBar/NavBar";


const MainLayout = () => {
    const location = useLocation()
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            { noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;