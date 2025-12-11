// src/components/ProductCard/ProductCard.jsx
import React from "react";
import styles from "./card.module.css";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({
  image,
  title,
  description,
  price,
  onClick,
  themeColor = "#0f7ab8",
}) => {
  return (
    <div className={styles.card} style={{ "--primary-color": themeColor }}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          <span className={styles.price}>${price}</span>

          <div className={styles.actions}>
            <button className={styles.addToCart} onClick={onClick}>
              <FaCartPlus className={styles.icon} />
              <span>Add to Cart</span>
            </button>

            <button className={styles.buyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
