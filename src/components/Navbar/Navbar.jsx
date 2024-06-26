import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"appliedjobs"}>Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to={"blogs"}>Blogs</NavLink>
      </li>
    </>
  );

  return (
    <nav className="shadow-sm bg-[#f9f9ff]  sticky top-0 z-10  w-full">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to={'/sign-up'} className="btn btn-primary text-white">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
