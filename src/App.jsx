import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import frases from './frases.json'
import Card from './Components/Card'
import Comonente2 from './Components/Comonente2'

const arrayColor = [
  '#D55B98', '#61B834', '#AD2ADF', '#E0B963', '#7468DB', '#A1BC2D', '#36C790', '#11DE87', '#6A2084', '#AA0F13', '#D90DA9', '#E1561C', '#0B0E60', '#551D29', '#501900', '#1B2534', '#25392A', '#0C1AAD'
]

function App() {
  const numberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }
  const getRandomArrays = array => {
    const i = numberRandom(array)
    return array[i]
  }


  const [userRandom, setuserRandom] = useState(getRandomArrays(frases))
  const [colorRandom, setColorRandom] = useState(getRandomArrays(arrayColor))
  const [colorFraseRandom, setcolorFraseRandom] = useState(getRandomArrays(arrayColor))
  const clickRandom = () => {
    setuserRandom(getRandomArrays(frases))
    setcolorFraseRandom(getRandomArrays(arrayColor))
    setColorRandom(getRandomArrays(arrayColor))
  }

  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <div className='contenedor'>
        <Card
          userRandom={userRandom}
          colorFraseRandom={colorFraseRandom}
          clickRandom={clickRandom}
        />
        <Comonente2
          colorFraseRandom={colorFraseRandom}
          clickRandom={clickRandom}
        />
      </div>
    </div >
  )
}

export default App
