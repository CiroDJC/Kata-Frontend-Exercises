import React from 'react'
import './AxiosComponent.css'

const AxiosComponent = ({item}) => {
  return (
    <div className="CharacterCard" style={{
      backgroundImage: `url(${item.image})`
    }}>
      <div className="CharacterCard__name-container">
        {item.name}
      </div>
    </div>
  )
}

export default AxiosComponent