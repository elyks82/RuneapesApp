"use client";
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useScrollTopPosition from "@/hooks/useScrollTopPosition";

import Image from "next/image";
import MobileNav from "../MobileNavBar/MobileNav";

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "Launchpad", href: "/launchpad" },
  { title: "App", href: "/app" },
];

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const { scrolled, topOffset } = useScrollTopPosition();

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (expanded) {
      // setting overflow on body to be hidden so navbar won't scroll
      window.document.documentElement.style.overflow = "hidden";
    } else {
      window.document.documentElement.style.overflow = "auto";
    }
  }, [expanded]);

  return (
    <div
      className={
        styles.upper_container +
        " " +
        (scrolled || expanded ? styles.scrolled_nav : "")
      }
    >
      <div className={styles.nav_logo}>
        <Image
          src="/logos/logo_black.svg"
          alt="main logo"
          width={140}
          height={140}
          style={{ display: !scrolled && !expanded ? "block" : "none" }}
        />
        <Image
          src="/logos/logo_white.svg"
          alt="main logo"
          width={140}
          height={60}
          style={{ display: !scrolled && !expanded ? "none" : "block" }}
        />
      </div>

      <div className={styles.nav}>
        <nav className={styles.navList}>
          {navLinks.map((link) => {
            return (
              <div key={link.title}>
                <Link
                  href={link.href}
                  className={
                    styles.link + ` ${pathname == link.href && styles.active} `
                  }
                >
                  {link.title}
                </Link>
              </div>
            );
          })}
        </nav>
        <div onClick={() => toggleExpanded()} className={styles.mobileBars}>
          <Image
            className={styles.bar_image}
            src="/icons/bars.svg"
            alt="menu"
            width={25}
            height={25}
          />
        </div>
        <MobileNav expanded={expanded} toggleExpanded={toggleExpanded} />
      </div>
    </div>
  );
};

export default Navbar;
