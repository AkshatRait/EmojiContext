import React, { useContext } from 'react'
import { mainContext } from '../../Context/MainProvider'
import "./index.css"

const Emojis = () => {
    const { currentMood , compliments } = useContext(mainContext);

    if(currentMood === 'happy'){
        return <div className='emoji'>😛</div>
    }else if(currentMood === 'sad'){
        return <div  className='emoji'>😒</div>
    }else if(currentMood === 'fine'){
        return <div  className='emoji'>🙄</div> 
    }

  return (
    <div>
        <h1>Emojis</h1>
        <div>Mood</div>
    </div>
  )
}

export default Emojis