import styles from "./About.module.css";
import Photo1 from "../../assets/img/collection1.jpg";
import Photo2 from "../../assets/img/collection3.jpg";
import Photo3 from "../../assets/img/photo1.png";
import Map from "../../assets/img/map.jpg";
import { ReactComponent as Tg } from "../../assets/img/tg.svg";
import { ReactComponent as Vk } from "../../assets/img/vk.svg";
import { ReactComponent as TikTok } from "../../assets/img/TikTok.svg";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block1}>
        <h1>О нас</h1>
        <div className={styles.wrap}>
          <h2>О нас</h2>
        </div>
      </div>
      <div className={styles.block2}>
        <p>
          Разнообразный и богатый опыт укрепление и развитие структуры в
          значительной степени обуславливает создание соответствующий условий
          активизации. С другой стороны начало повседневной работы по
          формированию позиции позволяет выполнять важные задания по разработке
          существенных финансовых и административных условий. Задача
          организации, в особенности же новая модель организационной
          деятельности требуют определения и уточнения систем массового участия.
          Не следует, однако забывать, что сложившаяся структура организации
          требуют определения и уточнения существенных финансовых и
          административных условий. Повседневная практика показывает, что
          дальнейшее развитие различных форм деятельности требуют определения и
          уточнения форм развития.
        </p>
      </div>
      <div className={styles.block3}>
        <img src={Photo1} alt="#" />
        <img src={Photo2} alt="#" />
        <img src={Photo3} alt="#" />
      </div>
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

export default About;
