import React, { useEffect } from "react";
import styles from "./App.module.css";
import Header from "./Components/Header";
import AddingForms from "./Components/AddingForms";
import Products from "./Components/Products";

const App = () => {
  return (
    <main>
      <Header />
      <div className={styles.content}>
        <AddingForms />
        <Products />
      </div>
    </main>
  );
};

export default App;
