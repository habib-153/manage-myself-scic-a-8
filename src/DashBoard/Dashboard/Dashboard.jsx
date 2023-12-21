import { FaHome, FaTasks } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const NavOption = (
    <>
      <>
        <li>
          <NavLink to="/dashboard/tasks">
            <FaTasks></FaTasks>Tasks
          </NavLink>
        </li>
      </>
      <div className="divider"></div>
      <li>
        <NavLink to="/">
          <FaHome></FaHome>Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <Helmet>
        <title>Manage Myself | Dashboard</title>
      </Helmet>
      <div className="lg:flex flex-col">
        <div className=" hidden lg:flex justify-between bg-[#64b6dfec]">
          <ul className="menu flex-row justify-center">
            <>
              <li>
                <NavLink to="/dashboard/tasks">
                  <FaTasks></FaTasks>Tasks
                </NavLink>
              </li>
            </>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
          </ul>
          <div>
            {user?.email ? (
              <div className="tooltip tooltip-left" data-tip={user.displayName}>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-11 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
              </div>
            ) : undefined}
          </div>
        </div>
        <div className="lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavOption}
            </ul>
          </div>
        </div>
        <div className="flex-1 p-3 md:p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
