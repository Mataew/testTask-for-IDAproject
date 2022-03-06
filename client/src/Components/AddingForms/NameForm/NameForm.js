import React, { useState } from "react";
import styles from "./NameForm.module.css";

const NameForm = ({ ...props }) => {
  return (
    <div className={styles.addingForms__name}>
      <div className={styles.addingForms__name__title}>
        <h6>Наименование товара</h6>
        <div className={styles.addingForms__name__circle} />
      </div>
      <input
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        type="text"
        placeholder="Название товара"
        className={styles.addingForms__name__input}
      />
    </div>
  );
};

export default NameForm;
