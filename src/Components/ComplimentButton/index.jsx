import React, { useContext } from 'react'
import { mainContext } from '../../Context/MainProvider'

const ComplimentButton = () => {
    const { setCompliments } = useContext(mainContext)
    const  handleClick = () =>{
        setCompliments + 1;
    }
  return (
    <div>
        <h1>Moods</h1>
    <button onClick={handleClick()}>Compliment</button>
    <button>Bully</button>
    </div>
  )
}

export default ComplimentButton