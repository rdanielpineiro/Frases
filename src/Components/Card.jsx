import React from 'react'



const Card = ({ userRandom, colorFraseRandom, clickRandom }) => {

  const styleButton = {
    backgroundColor: colorFraseRandom
  }
  return (
    <article className='card'
      style={{ color: colorFraseRandom }}
    >
      <h2 className='cardFrase'>
        {userRandom.quote}
      </h2>
      <p className='cardAutor'>
        {userRandom.author}
      </p>

    </article>

  )
}

export default Card