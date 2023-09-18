import React, { useEffect, useState } from "react";
import { CatalogButton } from "../../Components/Catalog/CatalogButton";
import App from "../../Components/Slider/Slider";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import Map from "../../assets/img/map.jpg"
import { ReactComponent as Tg } from "../../assets/img/tg.svg";
import { ReactComponent as Vk } from "../../assets/img/vk.svg";
import { ReactComponent as TikTok } from "../../assets/img/TikTok.svg";
import styles from "./Mainpage.module.css";
import { Acardion } from "../../Components/Acardion/Acardion";
import axios from "axios";

const Mainpage = () => {
  const [loading, setLoading] = useState(false)
const [products, setProducts] = useState([])


  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";
    axios.get(apiUrl)
    .then((resp) => {
      setLoading(true);
      setProducts(resp.data)
    })
    .finally(() => setLoading(false));

  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <Logo />
        <div className={styles.wrapper__title}>
          <h1 className={styles.title__background}>Одежда для каждого</h1>
          <h1 className={styles.title}>Одежда для каждого</h1>
          <h1 className={styles.title2}>Одежда для каждого</h1>
        </div>
        <p>на каждый день</p>
        <div className={styles.wrapper__button}>
          <CatalogButton />
        </div>
      </div>
      <App />
      <Acardion 
      products={products}
      />
      <div className={styles.contacts}>
        <div className={styles.wrapper__title2}>
          <h1 className={styles.title__background2}>Контакты</h1>
          <h2 className={styles.title2_2}>мы всегда на связи</h2>
        </div>
        <div className={styles.contacts__wrap}>
          <div className={styles.map}>
            <img src={Map} alt="#" />
          </div>
          <div className={styles.contact}>
            <div className={styles.wrap__contact}>
                <p>8(000)000-00-00</p>
                <a href="#">info@advolatum.ru</a>
                <div className={styles.icons}>
                  <a href="https://web.tginfo.me/"><Tg /></a>
                  <a href="https://vk.com/?ysclid=lkxvvlf1h4946420290"><Vk /></a>
                  <a href="https://www.tiktok.com/ru-RU"><TikTok /></a>
                  
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
