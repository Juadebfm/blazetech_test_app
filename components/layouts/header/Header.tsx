"use client";

import { Menu } from "@/components";
import Logo from "@/components/elements/icons/Logo";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useWindowScreenSize } from "@/hooks/useWindowSize";
import headerData from "@/data/header.json";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const size = useWindowScreenSize();
  useEffect(() => {
    if (size.width > 768) {
      setShowMenu(false);
    }
  }, [size.width]);
  return (
    <header className="fixed border-b sm:border-none bg-secondary-950 sm:bg-transparent w-full py-6">
      <div className="container flex justify-between">
        <div className="flex items-center justify-between gap-10">
          <Link href="/" className="z-10">
            <Logo />
          </Link>
          <nav
            className={cx(
              "flex gap-8 list-none bg-secondary-950 right-0 absolute sm:translate-y-0 sm:relative h-screen sm:h-fit w-screen sm:w-fit top-0 text-white flex-col items-center justify-center sm:flex-row duration-300",
              showMenu === true ? "translate-y-0" : "-translate-y-full"
            )}
          >
            {headerData.header.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="capitalize" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </nav>
        </div>
        <div className="flex z-10">
          <button
            onClick={toggleMenu}
            className="p-3 sm:hidden flex items-center justify-center border rounded-full"
          >
            <Menu />
          </button>
          <button className="border hover:bg-primary-300 hover:text-black duration-300 py-3 px-5 rounded-full text-white">
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
