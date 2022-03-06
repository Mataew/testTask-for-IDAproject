import React from "react";
import styles from "./ImageForm.module.css";

const ImageForm = ({ ...props }) => {
  return (
    <div className={styles.addingForms__image}>
      <div className={styles.addingForms__image__title}>
        <h6>Ссылка на изображение товара</h6>
        <div className={styles.addingForms__image__circle} />
      </div>
      <input
        value={props.image}
        onChange={(e) => props.setImage(e.target.value)}
        type="text"
        placeholder="Введите ссылку"
        className={styles.addingForms__image__input}
      />
    </div>
  );
};

export default ImageForm;
