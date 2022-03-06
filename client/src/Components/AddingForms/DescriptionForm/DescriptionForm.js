import React from "react";
import styles from "./DescriptionForm.module.css";

const DescriptionForm = ({ ...props }) => {
  return (
    <div className={styles.addingForms__description}>
      <div className={styles.addingForms__description__title}>
        <h6>Описание товара</h6>
      </div>
      <input
        value={props.description}
        onChange={(e) => props.setDescription(e.target.value)}
        placeholder="Описание товара"
        type="text"
        className={styles.addingForms__description__input}
      />
    </div>
  );
};

export default DescriptionForm;
