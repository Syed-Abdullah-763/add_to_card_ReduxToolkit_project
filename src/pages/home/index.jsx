import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import styles from "./home.module.css";
import ProductCard from "../../components/card";
import { useDispatch, useSelector } from "react-redux";
import { setAddToCard } from "../../redux/slices/product";
import { fetchProductThunk } from "../../redux/thunks/product";

const HomePage = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (store) => store.productReducer
  );

  useEffect(() => {
    (async () => {
      dispatch(fetchProductThunk());
    })();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <Navbar className={styles.sticky} />

        <main>
          <h1>Products</h1>

          {loading && <h3>Loading...</h3>}

          {error ? (
            <h4>{error}. Please check your network</h4>
          ) : (
            <div className={styles.cardParent}>
              {products.map((product) => {
                return (
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    key={product.id}
                    onClick={() => {
                      dispatch(setAddToCard(product));
                    }}
                  />
                );
              })}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default HomePage;
