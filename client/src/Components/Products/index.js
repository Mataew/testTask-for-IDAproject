import React, { useEffect } from "react";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  productsDelete,
  productsLoad,
} from "../../Redux/Reducers/ProductsReducer";
import deleteLogo from "../../Assets/delete-logo.svg";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsLoad());
  }, [dispatch]);

  const products = useSelector((state) => state.productsReducer.products);
  const loading = useSelector((state) => state.productsReducer.loading);

  const deleteProduct = (id) => {
    dispatch(productsDelete(id));
  };

  return (
    <div className={styles.products}>
      {loading ? (
        <object
          className={styles.loader}
          data="https://acegif.com/wp-content/uploads/loading-4.gif"
        ></object>
      ) : (
        products.map((product) => {
          return (
            <div key={product._id} className={styles.products__item}>
              <button
                onClick={() => deleteProduct(product._id)}
                className={styles.products__deleteButton}
              >
                <img src={deleteLogo} alt="" />
              </button>
              <div className={styles.products__item__wrapperImage}>
                <img src={`${product.image}`} alt="surt" />
              </div>
              <div className={styles.products__item__description}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h2>{product.price} руб.</h2>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Products;
