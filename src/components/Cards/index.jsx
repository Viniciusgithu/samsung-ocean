import React from 'react'
import { ContainerCard } from './style'



export function CardComponent({ image, name, gender, species }) {

  return (
    <ContainerCard>
      <div className="image-container">
        <img src={image} alt={image} />
        <h3>{name}</h3>
        <p>{gender}</p>
        <p>{species}</p>
      </div>
    </ContainerCard>
  )

}