import React from 'react'
import styles from './Filters.module.css'

const ColorFilter = ({ availableColors, selectedColors, onColorChange }) => {
  return (
    <div className={styles.filter}>
      <p className={styles.name}>By Color</p>
      {availableColors.map((color) => (
        <label key={color}>
          <input
            className={styles.colorIn}
            type="checkbox"
            checked={selectedColors.includes(color)}
            onChange={() => onColorChange(color)}
          />
          {color}
        </label>
      ))}
    </div>
  )
}

export default ColorFilter
