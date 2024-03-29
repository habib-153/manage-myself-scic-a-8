import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user , logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <div className="md:flex gap-5 md:items-center">
      <li className="hover:text-[#ffc403]">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#8A4EC2] hover:text-[#ffc403] underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-[#ffc403]">
        <NavLink
          to="/usersAndBenefit"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#8A4EC2] hover:text-[#ffc403] underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="hover:text-[#ffc403]">
        <NavLink
          to="/usersAndBenefit"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#8A4EC2] hover:text-[#ffc403] underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="hover:text-[#ffc403]">
        <NavLink
          to="/usersAndBenefit"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#8A4EC2] hover:text-[#ffc403] underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
        >
          Know US
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className=" navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
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
            className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-l from-[#8A4EC2] to-[#ffc403] font-semibold">
          MANAGE MYSELF
        </h2>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="font-semibold menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-8">
        <div>
        {user ? (
        <p className="hover:text-[#ffc403] font-bold">
          <NavLink
            to="/dashboard/tasks"
            className={({ isActive, isPending }) =>
              isActive
                ? "text-[#8A4EC2] hover:text-[#ffc403] underline font-bold"
                : isPending
                ? "pending"
                : ""
            }
          >
            Dashboard
          </NavLink>
        </p>
      ) : undefined}
        </div>
        <div>
        {user?.email ? (
            <div className="dropdown dropdown-end">
              <div className="tooltip tooltip-left" data-tip={user.displayName}>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-11 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content text-center mt-3 z-[1] p-2 shadow bg-[#434543c3] rounded-box w-52"
              >
                <li>
                  <p className="text-white w-full text-center font-semibold">
                    {user.displayName}
                  </p>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-outline w-full text-white border-0"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
