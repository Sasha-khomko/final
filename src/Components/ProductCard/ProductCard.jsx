import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import styles from "./ProductCard.module.css";

// import Button from '@mui/material/Button';

export const ProductCard = ({ products }) => {
  const dispatch = useDispatch();

  if (!products || products.length === 0) return <p>Нет данных.</p>;

  return (
    <div className={styles.container}>
      <>
        {products.map((person) => (
          <div key={person.id} className={styles.card}>
            <div className={styles.wrap__img}>
              <img src={person.image} alt="#" />
            </div>
            <h2>{person.title}</h2>
            {/* <p>{person.description}</p> */}
            <div className={styles.block}>
              <span>{person.price} $</span>
              <button
              onClick={() => dispatch(addToCart(person))}
               className={styles.basket}
              >в корзину</button>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};
