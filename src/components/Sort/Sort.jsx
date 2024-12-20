import React from 'react'
import styles from './Sort.module.css'

const Sort = ({ onSortChange, activeSort }) => {
  return (
    <div className={styles.sort}>
      <button
        onClick={() => onSortChange('asc')}
        className={`${styles.button} ${
          activeSort === 'asc' ? styles.active : ''
        }`}
      >
        Cheap ones first
      </button>
      <button
        onClick={() => onSortChange('desc')}
        className={`${styles.button} ${
          activeSort === 'desc' ? styles.active : ''
        }`}
      >
        Dear ones first
      </button>
      <button
        onClick={() => onSortChange('popular')}
        className={`${styles.button} ${
          activeSort === 'popular' ? styles.active : ''
        }`}
      >
        Popular first
      </button>
    </div>
  )
}

export default Sort
