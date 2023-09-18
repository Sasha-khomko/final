import styles from "./Collections.module.css";
import Collection1 from "../../assets/img/collection1.jpg";
import Collection2 from "../../assets/img/collection2.jpg";
import Collection3 from "../../assets/img/collection3.jpg";
import Map from "../../assets/img/map.jpg"
import { ReactComponent as Tg } from "../../assets/img/tg.svg";
import { ReactComponent as Vk } from "../../assets/img/vk.svg";
import { ReactComponent as TikTok } from "../../assets/img/TikTok.svg";
import { Acardion } from "../../Components/Acardion/Acardion";
import { useEffect, useState } from "react";
import axios from "axios";

const Collectionss = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";
    axios
      .get(apiUrl)
      .then((resp) => {
        setLoading(true);
        setProducts(resp.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Классика</h1>
      </div>
      <div className={styles.block1}>
        <div className={styles.wrap}>
          <div className={styles.collection1}>
            <img src={Collection1} alt="#" />
          </div>
          <div className={styles.collection3}>
            <img src={Collection3} alt="#" />
          </div>
          <div className={styles.wrap_text}>
            <p className={styles.text1}>классическая коллекция</p>
            <p className={styles.text2}>2022</p>
          </div>
        </div>
        <div className={styles.collection2}>
          <img src={Collection2} alt="#" />
          <p className={styles.text3}>
            коллекция была создана для людей учитывающие детали в своей
            повседневной жизни В перфомансе стиля мы хотели приподнести легкость
            и комфорт, к которому стремиться каждый
          </p>
        </div>
      </div>
      <Acardion suptitle="товары коллекции" products={products} />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collectionss;
