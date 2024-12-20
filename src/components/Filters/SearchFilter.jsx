import React from 'react'
import styles from './Filters.module.css'

const SearchFilter = ({ search, onSearchChange }) => {
  return (
    <div className={styles.searchFilter}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default SearchFilter
