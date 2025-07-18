import React from "react";
import styles from "../assets/styles/SocialIcons.module.css";
import { FaTwitch, FaSteam, FaTelegramPlane, FaInstagram, FaYoutube, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaInstagram />, link: "https://instagram.com/lansows?igsh=a2wxcTNzbWcwY2M1" },
    { icon: <FaYoutube />, link: "https://youtube.com/@lansows?si=mGE71x4g-xBR_3OR" },
    { icon: <FaTelegramPlane />, link: "https://t.me/lansowss" },
    { icon: <FaTwitch />, link: "https://www.twitch.tv/lansow" },
    { icon: <FaSteam />, link: "https://steamcommunity.com/profiles/76561199374405685/" },
    { icon: <FaGithub />, link: "https://github.com/lansow" },
];

const SocialIcons = () => {
  const handleMouseMove = (e, index) => {
    const icon = document.getElementById(`icon-${index}`);
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    icon.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const resetTransform = (index) => {
    const icon = document.getElementById(`icon-${index}`);
    icon.style.transform = "translate(0, 0)";
  };

  return (
    <div className={styles.container}>
      {socials.map((s, i) => (
        <a
          href={s.link}
          key={i}
          target="_blank"
          rel="noreferrer"
          className={styles.iconWrapper}
          onMouseMove={(e) => handleMouseMove(e, i)}
          onMouseLeave={() => resetTransform(i)}
        >
          <div id={`icon-${i}`} className={styles.icon}>
            {s.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
