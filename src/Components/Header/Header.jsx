import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Tg } from "../../assets/img/tg.svg";
import { ReactComponent as Vk } from "../../assets/img/vk.svg";
import { ReactComponent as Insta } from "../../assets/img/insta.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.container__nav}>
        <div className={styles.wrapper__nav}>
          <Logo />
          <li>
            <Link to={"/"} className={styles.wrapper__link}>
              Главная
            </Link>
          </li>
          <li>
            <Link to={"/collectionss"} className={styles.wrapper__link}>
              коллекции
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={styles.wrapper__link}>
              О нас
            </Link>
          </li>
          <li>
            <Link to={"/caontacts"} className={styles.wrapper__link}>
              контакты
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className={styles.wrapper__link}>
              корзина
            </Link>
          </li>
        </div>
        <div className={styles.icons}>
          <a href="https://web.tginfo.me/">
            <Tg />
          </a>
          <a href="https://vk.com/?ysclid=lkxvvlf1h4946420290">
            <Vk />
          </a>
          <a href="https://www.instagram.com/?ysclid=lkxvw6wuel2755845">
            <Insta />
          </a>
        </div>
      </ul>
      <div className={styles.block}>
        <div className={styles.content}>
          <p>девушкам</p>
          <p>мужчинам</p>
          <p>унисекс</p>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
