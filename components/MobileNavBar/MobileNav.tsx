import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileNav.module.css";
import { navLinks } from "../Navbar/Navbar";
import Button from "../apebrush/Button/Button";

interface Props {
  expanded: boolean;
  toggleExpanded: () => void;
}

const MobileNav = ({ expanded, toggleExpanded }: Props) => {
  const pathname = usePathname();

  const expandedStyles = {
    top: "0",
    left: "0",
  };

  return (
    <div className={styles.mobileNav} style={expanded ? expandedStyles : {}}>
      <div className={styles.mobileTop}>
        <Image src="/logo_b.svg" alt="logo" width={100} height={30} />
        <div onClick={() => toggleExpanded()} className={styles.mobileBars}>
          <Image
            className={styles.bar_image}
            src={"/icons/close.svg"}
            alt="menu"
            width={25}
            height={25}
          />
        </div>
      </div>
      <nav>
        <div className={styles.navList}>
          {navLinks.map((link, index) => (
            <div key={"link_" + index} className={styles.button_container}>
              <Button
                href={link.href}
                key={"btn_" + index}
                type="action"
                className={styles.button}
                hrefReplace={false}
              >
                {link.title}
              </Button>
            </div>
          ))}
        </div>
      </nav>

      <div className={styles.join}>
        <p>Join Our Community</p>
        <div className={styles.icons}>
          <SocialIcons variant="dark" />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
