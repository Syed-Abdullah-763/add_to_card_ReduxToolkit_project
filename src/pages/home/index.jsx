import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import styles from "./home.module.css";
import ProductCard from "../../components/card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAddToCard, setProduct } from "../../redux/slices/product";

const HomePage = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.productReducer);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://fakestoreapi.com/products");

      dispatch(setProduct(response.data));
    })();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <Navbar className={styles.sticky} />

        <main>
          <h1>Products</h1>

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
        </main>
      </div>
    </>
  );
};

export default HomePage;
