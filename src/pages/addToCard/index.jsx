import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import styles from "./addToCard.module.css";
import ProductCard from "../../components/card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddToCard, setProduct } from "../../redux/slices/product";

const AddToCardPage = () => {
  const dispatch = useDispatch();

  const { addToCard } = useSelector((store) => store.productReducer);

  return (
    <>
      <div className={styles.wrapper}>
        <Navbar className={styles.sticky} />

        <main>
          <h1>Your Card</h1>

          {addToCard.length == 0 && (
            <h4>Nothing in the card...Go to home page to browse products</h4>
          )}

          <div className={styles.cardParent}>
            {addToCard.map((product) => {
              return (
                <ProductCard
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  key={product.id}
                  btnValue="Remove"
                  onClick={() => {
                    dispatch(deleteAddToCard(product));
                  }}
                />
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default AddToCardPage;
