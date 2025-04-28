import React from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import styles from "./Product.module.css"

const Product = ({ singleProd, singleDelete, singleEdit }) => {
  return (
    <div className={styles.product_item}>
      <ul>
        <li>title: {singleProd.title}</li>
        <li>price: {singleProd.price}</li>
      </ul>
      <div className="buttons">
        <button>
          <MdDelete size={25} onClick={singleDelete} />
        </button>
        <button>
          <MdModeEdit size={25} onClick={singleEdit} />
        </button>
      </div>
    </div>
  );
};

export default Product;
