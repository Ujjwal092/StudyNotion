import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const fallbackLinks = [
    { name: "Python", slug: "python" },
    { name: "Web Dev", slug: "web-development" },
  ];

  const [catalogLinks, setCatalogLinks] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  useEffect(() => {
    const fetchSublinks = async () => {
      try {
        const result = await apiConnector("GET", categories.CATEGORIES_API);
        setCatalogLinks(result?.data?.data || fallbackLinks);
      } catch (error) {
        setCatalogLinks(fallbackLinks);
      }
    };
    fetchSublinks();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="relative flex h-16 items-center justify-center border-b border-richblack-700 bg-richblack-900">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} width={160} alt="logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-x-6 text-richblack-25 items-center">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="relative flex items-center gap-2 group cursor-pointer">
                    <p>{link.title}</p>
                    <IoIosArrowDropdownCircle />

                    <div
                      className="invisible absolute left-1/2 top-full mt-3
                      -translate-x-1/2 flex flex-col rounded-md bg-richblack-5 p-4 
                      text-richblack-900 opacity-0 transition-all duration-200 
                      group-hover:visible group-hover:opacity-100 
                      lg:w-[300px] z-50 shadow-lg"
                    >
                      {Array.isArray(catalogLinks) &&
                      catalogLinks.length > 0 ? (
                        catalogLinks.map((item) => (
                          <Link to={`/catalog/${item.slug}`} key={item.slug}>
                            <p className="hover:text-yellow-25 py-1">
                              {item.name}
                            </p>
                          </Link>
                        ))
                      ) : (
                        <p className="text-center">Loading...</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`transition-all duration-200 ${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "hover:text-yellow-50"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex gap-x-5 items-center">
          {/* Search - Only When Logged In */}
          {token && (
            <Link to="/search">
              <AiOutlineSearch
                size={22}
                className="text-richblack-50 hover:text-yellow-25 transition cursor-pointer"
              />
            </Link>
          )}

          {/* Cart - Hide Only For Instructor */}
          {user?.accountType !== "Instructor" && (
            <Link
              to={token ? "/dashboard/cart" : "/login"}
              className="relative"
            >
              <AiOutlineShoppingCart
                size={22}
                className="text-richblack-50 hover:text-yellow-25 transition"
              />
              {totalItems > 0 && (
                <span
                  className="absolute -top-2 -right-2 
                  bg-yellow-25 text-black text-xs px-2 py-1 rounded-full animate-pulse"
                >
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {!token && (
            <>
              <Link to="/login">
                <button
                  className="border border-richblack-700 
                  bg-richblack-800 px-3 py-2 text-richblack-100 
                  rounded-md hover:bg-richblack-700 transition"
                >
                  Log in
                </button>
              </Link>

              <Link to="/signup">
                <button
                  className="bg-yellow-25 text-black 
                  px-3 py-2 rounded-md hover:bg-yellow-50 transition"
                >
                  Sign Up
                </button>
              </Link>
            </>
          )}

          {token && <ProfileDropDown />}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          {mobileOpen ? (
            <AiOutlineClose
              size={28}
              onClick={() => setMobileOpen(false)}
              className="cursor-pointer text-richblack-25"
            />
          ) : (
            <AiOutlineMenu
              size={28}
              onClick={() => setMobileOpen(true)}
              className="cursor-pointer text-richblack-25"
            />
          )}
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] max-w-[300px] 
        bg-richblack-900 z-50 transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-end">
            <AiOutlineClose
              size={26}
              onClick={() => setMobileOpen(false)}
              className="cursor-pointer"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4 text-richblack-25 text-lg">
            {NavbarLinks.map((link, index) => (
              <Link
                key={index}
                to={link?.path}
                onClick={() => setMobileOpen(false)}
                className="hover:text-yellow-25"
              >
                {link.title}
              </Link>
            ))}

            {/* Search - Only When Logged In */}
            {token && (
              <Link
                to="/search"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 hover:text-yellow-25"
              >
                <AiOutlineSearch size={20} />
                Search
              </Link>
            )}
          </div>

          <div className="border-t border-richblack-700"></div>

          {/* Cart */}
          {user?.accountType !== "Instructor" && (
            <Link
              to={token ? "/dashboard/cart" : "/login"}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-yellow-25"
            >
              <AiOutlineShoppingCart size={20} />
              Cart ({totalItems})
            </Link>
          )}

          {/* Auth Buttons */}
          {!token && (
            <div className="flex flex-col space-y-3">
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <button className="w-full py-2 border border-richblack-700 text-richblack-25 rounded-md">
                  Log in
                </button>
              </Link>

              <Link to="/signup" onClick={() => setMobileOpen(false)}>
                <button className="w-full py-2 bg-yellow-25 text-black rounded-md">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
