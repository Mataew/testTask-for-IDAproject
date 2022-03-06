import React from "react";
import styles from "./PriceForm.module.css";

const PriceForm = ({ ...props }) => {
  return (
    <div className={styles.addingForms__price}>
      <div className={styles.addingForms__price__title}>
        <h6>Цена товара</h6>
        <div className={styles.addingForms__price__circle} />
      </div>
      <input
        value={props.price}
        onChange={(e) => props.setPrice(e.target.value)}
        type="text"
        placeholder="Введите цену"
        className={styles.addingForms__price__input}
      />
    </div>
  );
};

export default PriceForm;
