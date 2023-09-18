import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Wing } from "../../assets/img/Wing.svg";
import styles from "./Catalog.module.css";

export const CatalogButton = () => {
  return (
    <div className={styles.button}>
      <button className={styles.button_catalog}>
        <Link to={"/catalog"}>
          <Wing /> Каталог
        </Link>
      </button>
    </div>
  );
};
