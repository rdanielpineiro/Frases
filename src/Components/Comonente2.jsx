import React from 'react'


const Comonente2 = ({ colorFraseRandom, clickRandom }) => {
    const styleButton = {
        backgroundColor: colorFraseRandom
    }
    return (

        <button className='button'
            style={styleButton}
            onClick={clickRandom}
        >{'>'}</button>


    )
}

export default Comonente2