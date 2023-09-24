import { useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { ReactComponent as Wing } from "../../assets/img/Wing.svg";
import styles from "./Cart.module.css";

const initialFomrState = {
  serName: "",
  name: "",
  fatherNeme: "",
  phone: "",
  city: "",
  street: "",
  home: "",
  flat: "",
  onlinePayment: false,
  cashOnDelivery: false,
};
const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const [form, setForm] = useState(initialFomrState);

  const submit = (e) => {
    e.preventDefault();
    if (!products.length){
      alert('Корзина пуста');
      return;
    }
    setForm(initialFomrState);
  };

  return (
    <>
      <div className={styles.wrap_title}>
        <h1>Корзина</h1>
      </div>
      <div className={styles.container}>
        {products.length ? (
          <ProductCard products={products} />
        ) : (
          <div className={styles.wrap_cart}>
            <p>корзина пуста</p>
          </div>
        )}
        <div className={styles.form}>
          <form onSubmit={submit}>
            <h1 className={styles.title}>Оформление заказа</h1>
            <div className={styles.block1}>
              <p className={styles.text}>данные получателя</p>
              <input
                value={form.serName}
                type="text"
                placeholder="фамилия"
                required
                onChange={(e) =>
                  setForm((prSt) => ({ ...prSt, serName: e.target.value }))
                }
              />
              <input
                onChange={(e) =>
                  setForm((prSt) => ({ ...prSt, name: e.target.value }))
                }
                value={form.name}
                type="text"
                placeholder="имя"
                required
              />
              <input
                onChange={(e) =>
                  setForm((prSt) => ({ ...prSt, fatherNeme: e.target.value }))
                }
                value={form.fatherNeme}
                type="text"
                placeholder="отчество"
              />
            </div>
            <div className={styles.block2}>
              <p className={styles.text}>контактный номер телефона</p>
              <input
                onChange={(e) =>
                  setForm((prSt) => ({ ...prSt, phone: e.target.value }))
                }
                value={form.phone}
                type="text"
                placeholder="+375 ( )   -   -  "
                required
              />
            </div>
            <div className={styles.block3}>
              <p className={styles.text}>данные места доставки</p>
              <input
                onChange={(e) =>
                  setForm((prSt) => ({ ...prSt, city: e.target.value }))
                }
                value={form.city}
                type="text"
                placeholder="город"
                required
              />
              <input
                onChange={(e) =>
                  setForm((prSt) => ({ ...prSt, street: e.target.value }))
                }
                value={form.street}
                type="text"
                placeholder="Улица"
                required
              />
              <div className={styles.wrap}>
                <input
                  className={styles.home}
                  onChange={(e) =>
                    setForm((prSt) => ({ ...prSt, home: e.target.value }))
                  }
                  value={form.home}
                  type="text"
                  placeholder="Дом"
                />
                <input
                  className={styles.home}
                  onChange={(e) =>
                    setForm((prSt) => ({ ...prSt, flat: e.target.value }))
                  }
                  value={form.flat}
                  type="text"
                  placeholder="кв/оффис"
                />
              </div>
            </div>
            <div className={styles.block4}>
              <div className={styles.online}>
                <input
                  onChange={(e) =>
                    setForm((prSt) => ({
                      ...prSt,
                      onlinePayment: e.target.checked,
                    }))
                  }
                  checked={form.onlinePayment}
                  type="checkbox"
                  name="оплата online"
                  id=""
                />
                <p>оплата online</p>
              </div>
              <div className={styles.online}>
                <input
                  checked={form.cashOnDelivery}
                  onChange={(e) =>
                    setForm((prSt) => ({
                      ...prSt,
                      cashOnDelivery: e.target.checked,
                    }))
                  }
                  type="checkbox"
                  name="наложенным платежом"
                  id=""
                />
                <p>наложенным платежом</p>
              </div>
            </div>
            <div className={styles.wrap_button}>
              <button className={styles.button_toDesign} type="submit">
                <Wing /> оформить
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;
