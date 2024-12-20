import React, { useState, useEffect, useMemo, useCallback } from 'react'
import generateProducts from './data/generateProducts'
import Filters from './components/Filters/Filters'
import ProductList from './components/Products/ProductList'
import styles from './App.module.css'

function App() {
  const [products] = useState(generateProducts(8))
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortOrder, setSortOrder] = useState('asc')

  const handleFilterChange = useCallback((filtered) => {
    setFilteredProducts(filtered)
  }, [])

  const handleSortChange = useCallback((order) => {
    setSortOrder(order)
  }, [])

  const sortedFilteredProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price
      if (sortOrder === 'desc') return b.price - a.price
      return b.rating - a.rating
    })
  }, [filteredProducts, sortOrder])

  return (
    <div className={styles.container}>
      <div className={styles.filtersAndProducts}>
        <div className={styles.filters}>
          <Filters
            products={products}
            onFilterChange={handleFilterChange}
            sortOrder={sortOrder}
            onSortChange={handleSortChange}
          />
          <div className={styles.productCount}>
            Total products: {filteredProducts.length}
          </div>
        </div>
        <div className={styles.productArea}>
          {sortedFilteredProducts.length > 0 ? (
            <ProductList products={sortedFilteredProducts} />
          ) : (
            <p className={styles.noResults}>
              No results were found for your request.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
