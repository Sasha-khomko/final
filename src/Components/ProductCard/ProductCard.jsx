import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cart";
import styles from "./ProductCard.module.css";

// import Button from '@mui/material/Button';


export const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);

  if (!products || products.length === 0) return <p>Нет данных.</p>;

  return (
    <div className={styles.container}>
      <>
        {products.map((product) => {
          const isProductInCart = cartProducts.some(
            (cartProduct) => cartProduct.id === product.id
          );

          return (
            <div key={product.id} className={styles.card}>
              <div className={styles.wrap__img}>
                <img src={product.image} alt="#" />
              </div>
              <h2>{product.title}</h2>
              {/* <p>{product.description}</p> */}
              <div className={styles.block}>
                <span>{product.price} $</span>
                {!isProductInCart ? (
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className={styles.basket}
                  >
                    в корзину
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(removeFromCart(product))}
                    className={styles.basket}
                  >
                    удалить
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};


// export const ProductCard = ({ products }) => {
//   const dispatch = useDispatch();

//   if (!products || products.length === 0) return <p>Нет данных.</p>;

//   return (
//     <div className={styles.container}>
//       <>
//         {products.map((person) => (
//           <div key={person.id} className={styles.card}>
//             <div className={styles.wrap__img}>
//               <img src={person.image} alt="#" />
//             </div>
//             <h2>{person.title}</h2>
//             {/* <p>{person.description}</p> */}
//             <div className={styles.block}>
//               <span>{person.price} $</span>
//               <button
//               onClick={() => dispatch(addToCart(person))}
//                className={styles.basket}
//               >в корзину</button>
//             </div>
//           </div>
//         ))}
//       </>
//     </div>
//   );
// };
