import React, { useEffect, useState } from "react";
import styles from "./AddingForms.module.css";
import NameForm from "./NameForm/NameForm";
import DescriptionForm from "./DescriptionForm/DescriptionForm";
import ImageForm from "./ImageForm/ImageForm";
import PriceForm from "./PriceForm/PriceForm";
import { useDispatch } from "react-redux";
import {
  productsAdd,
  productsLoad,
} from "../../Redux/Reducers/ProductsReducer";

const AddingForms = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = (name, description, image, price) => {
    if (name !== "" && image !== "" && price !== "") {
      dispatch(productsAdd(name, description, image, price));
      setName("");
      setDescription("");
      setImage("");
      setPrice("");
    }
  };

  useEffect(() => {
    dispatch(productsLoad());
  });

  return (
    <div className={styles.addingForms}>
      <NameForm setName={setName} name={name} />
      <DescriptionForm
        setDescription={setDescription}
        description={description}
      />
      <ImageForm setImage={setImage} image={image} />
      <PriceForm setPrice={setPrice} price={price} />
      <button
        onClick={() => addProduct(name, description, image, price)}
        className={styles.addingButton}
      >
        Добавить товар
      </button>
    </div>
  );
};

export default AddingForms;
