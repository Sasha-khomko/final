import React, { useState } from "react";
import {ProductCard} from "../ProductCard/ProductCard";
import styles from "./Acardion.module.css";

export const Acardion = ({
  title="Актуальное",
  suptitle="aктуальное",
  suptitleStyles,
  products=[{
    price: '',
    title: '',
    image: '',
    id: 1,
  }]
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.wrapper}>
          <h1>{title}</h1>
          <h2 style={suptitleStyles} >{suptitle}</h2>
        </div>
      </div>
      <div className={styles.acardion}>
        
        <ProductCard products={products.slice(0, 4)} />
        {isOpen && <ProductCard products={products.slice(4)} />}
        <div className={styles.button}>
          <button onClick={handleToggle}>{isOpen ? "Скрыть" : "Смотреть больше"}</button>
        </div>
      </div>
    </div>
  );
};
