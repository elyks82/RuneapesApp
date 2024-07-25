import discord from "../../public/icons/discord.svg";
import telegram from "../../public/icons/telegram.svg";
import twitter from "../../public/icons/x-twitter.svg";
import Image from "next/image";
import styles from "./SocialIcons.module.css";
import { Link } from "react-aria-components";

const icons = [
  { src: discord, href: "https://discord.gg/runeapes" },
  { src: telegram, href: "https://t.me/runeapes" },
  { src: twitter, href: "https://x.com/runeapespad" },
];

interface SocialIconsProps {
  variant?: "light" | "dark";
}

const SocialIcons: React.FC<SocialIconsProps> = ({ variant }) => {
  const theme = variant ?? "light";

  return (
    <div
      className={
        styles.iconContainer + " " + (theme === "dark" ? styles.dark_theme : "")
      }
    >
      {icons.map((icon, idx) => {
        return (
          <Link
            key={idx}
            href={icon.href}
            target="_blank"
            className={styles.icon + " " + styles[`icon_${idx}`]}
          >
            <Image src={icon.src} alt="icon" width={28} height={28} />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
