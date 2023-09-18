import React from "react";
import { ReactComponent as Logo } from "../../assets/img/logoFooter.svg";
import { ReactComponent as Tg } from "../../assets/img/tg.svg";
import { ReactComponent as Vk } from "../../assets/img/vk.svg";
import { ReactComponent as TikTok } from "../../assets/img/TikTok.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>политика конфиденциальности</p>
        <p>согласие на обработку персональных данных</p>
      </div>
      <div className={styles.Logo}>
        <Logo />
        <p>2022 GruboGovorya</p>
      </div>
      <div className={styles.icons}>
        <a href="https://web.tginfo.me/">
          <Tg />
        </a>
        <a href="https://vk.com/?ysclid=lkxvvlf1h4946420290">
          <Vk />
        </a>
        <a href="https://www.tiktok.com/ru-RU">
          <TikTok />
        </a>
      </div>
    </div>
  );
};

export default Footer;
