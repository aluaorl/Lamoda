import React from 'react'
import styles from './ProductItem.module.css'

const ProductItem = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.imageUrl} alt={product.name} className={styles.image} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className={styles.price}>Price: {product.price} byn</p>
      <p className={styles.color}>Color: {product.color}</p>
      <p className={styles.rating}>Rating: {product.rating}</p>
    </div>
  )
}

export default ProductItem
