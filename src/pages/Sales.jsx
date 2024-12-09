import React from 'react'

const Sales = ({ isNavbarOpen }) => {
    return (
      <div className={`transition-all duration-500 ${isNavbarOpen ? "pt-0":"pt-52"} `}>
        Sales
      </div>
  )
}

export default Sales