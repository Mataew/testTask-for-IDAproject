import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>Добавление товара</h1>
      <div className={styles.select_wrapper}>
        <select name="select-category" className={styles.select}>
          <option value="value1">Значение 1</option>
          <option value="value2" selected>
            Значение 2
          </option>
          <option value="value3">Значение 3</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
