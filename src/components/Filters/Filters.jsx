// Additional tasks
// dynamic filters: the color filter changes dynamically depending on the search filter and price

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import SearchFilter from './SearchFilter'
import ColorFilter from './ColorFilter'
import PriceFilter from './PriceFilter'
import Sort from '../Sort/Sort'
import styles from './Filters.module.css'

const Filters = ({ products, onFilterChange, sortOrder, onSortChange }) => {
  const [search, setSearch] = useState('')
  const [selectedColors, setSelectedColors] = useState([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity })

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    )
  }

  const handlePriceChange = (e) => {
    const { name, value } = e.target
    setPriceRange((prev) => ({
      ...prev,
      [name]: value ? Number(value) : name === 'min' ? 0 : Infinity,
    }))
  }

  const filters = useMemo(
    () => [
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()),
      (product) =>
        selectedColors.length === 0 || selectedColors.includes(product.color),
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max,
    ],
    [search, selectedColors, priceRange]
  )

  const filterProducts = useCallback(() => {
    const filteredProducts = products.filter((product) =>
      filters.every((filter) => filter(product))
    )
    onFilterChange(filteredProducts)
  }, [products, filters, onFilterChange])

  useEffect(() => {
    filterProducts()
  }, [filterProducts])

  const availableColors = useMemo(() => {
    const filteredProducts = products.filter(filters[0]).filter(filters[2])
    return [...new Set(filteredProducts.map((p) => p.color))]
  }, [products, filters])

  return (
    <div className={styles.filters}>
      <div className={styles.sortAndSearch}>
        <SearchFilter search={search} onSearchChange={setSearch} />
        <Sort onSortChange={onSortChange} activeSort={sortOrder} />
      </div>
      <ColorFilter
        availableColors={availableColors}
        selectedColors={selectedColors}
        onColorChange={handleColorChange}
      />
      <PriceFilter priceRange={priceRange} onPriceChange={handlePriceChange} />
    </div>
  )
}

export default Filters
