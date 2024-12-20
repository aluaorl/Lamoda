import React from 'react'
import styles from './Filters.module.css'

const PriceFilter = ({ priceRange, onPriceChange }) => {
  const { min, max } = priceRange

  return (
    <div className={styles.filter}>
      <p className={styles.name}>By Price</p>
      <div className={styles.priceIn}>
        <input
          type="number"
          name="min"
          min="0"
          placeholder="from"
          value={min === 0 ? '' : min}
          onChange={onPriceChange}
        />
        <span>-</span>
        <input
          type="number"
          name="max"
          min="0"
          placeholder="to"
          value={max === Infinity ? '' : max}
          onChange={onPriceChange}
        />
      </div>
    </div>
  )
}

export default PriceFilter
