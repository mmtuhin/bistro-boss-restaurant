import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu">
          <li className="p-2">
            <NavLink to="/dashboard/userhome">User Home</NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/dashboard/cart">My Cart</NavLink>
          </li>
          <li  className="p-2">
            <NavLink to="/dashboard/reservation">Reservation</NavLink>
          </li>
          <li  className="p-2">
            <NavLink to="/dashboard/cart">Reviews</NavLink>
          </li>
          <li  className="p-2">
            <NavLink to="/dashboard/cart">My Bookings</NavLink>
          </li>
          <div className="divider"></div> 
          <li className="p-2">
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
