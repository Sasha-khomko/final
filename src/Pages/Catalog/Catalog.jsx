import React, { useState, useEffect } from "react";
import styles from "./Catalog.module.css";
import { ReactComponent as CatalogLogo } from "../../assets/img/catalogcolor.svg";
import { Link, useParams } from "react-router-dom";
import {ProductCard} from "../../Components/ProductCard/ProductCard";
import axios from 'axios'

const apiUrl = "https://fakestoreapi.com/products";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      const productsData = resp.data;
      setProducts(productsData);
    });
  }, []);
  const { category } = useParams(); 

  console.log('category', category);
  return (
    <>
      <h1 className={styles.title}>Коллекции</h1>
      <div className={styles.container}>
        <div className={styles.catalog}>
          <Link  params={{ title: "Мужская" }} to={`/catalog/men's clothing`}>Мужская</Link>
          <Link params={{ title: "Женская" }} to={`/catalog/women's clothing`} >Женская</Link>
          <Link params={{ title: "кольца" }} to={`/catalog/jewelery`} >кольца</Link>
          <Link params={{ title: "электротехника" }} to={`/catalog/electronics`} >электротехника</Link>
          <CatalogLogo />
        </div>
        <ProductCard products={products.filter((el) => category ? el.category === category : true)} />
      </div>
    </>
  );
};

export default Catalog;
