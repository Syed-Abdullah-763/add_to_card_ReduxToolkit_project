import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { addToCard } = useSelector((store) => store.productReducer);

  return (
    <>
      <header>
        <nav>
          <div className={styles.left}>
            <h4>Redux App</h4>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Home
            </NavLink>

            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              About
            </NavLink>

            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Contact
            </NavLink>
          </div>

          <div className={styles.right}>
            <NavLink
              to={"/add-to-card"}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              {addToCard[0] && (
                <span className={styles.counter}>{addToCard.length}</span>
              )}

              <RiShoppingBagLine className={styles.icon} />
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
