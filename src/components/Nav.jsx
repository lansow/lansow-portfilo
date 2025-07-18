import { useState } from "react";
import styles from "../assets/styles/Nav.module.css";
import {
  HomeOutlined,
  SearchOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";

const items = [
    HomeOutlined,
    SearchOutlined,
    PlusOutlined,
    UserOutlined,
];

const Nav = ({ sectionRefs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollToSection = (index) => {
    setActiveIndex(index);
    sectionRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollTop = (index) => {
    setActiveIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.bottomNav}>
      {items.map((Icon, index) => (
        <div
          key={index}
          className={`${styles.navItem} ${activeIndex === index ? styles.active : ""} ${Icon === HomeOutlined ? styles.scrollTopBtn : ""}`}
          onClick={Icon === HomeOutlined ? () => handleScrollTop(index) : () => handleScrollToSection(index)}
        >
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default Nav;
