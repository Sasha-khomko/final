import styles from "./Contacts.module.css"
import Map from "../../assets/img/map.jpg";
import { ReactComponent as Tg } from "../../assets/img/tg.svg";
import { ReactComponent as Vk } from "../../assets/img/vk.svg";
import { ReactComponent as TikTok } from "../../assets/img/TikTok.svg";

const Contacts = () => {
  return (
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
  );
};

export default Contacts;
