import React, { useContext } from 'react'
import { mainContext } from '../../Context/MainProvider'

const Emojis = () => {
    const { mood , compliments } = useContext(mainContext);

    if(mood === 'happy'){
        return '😛'
    }else if(mood === 'sad'){
        return '😒'
    }else{
        return '🙄'
    }

  return (
    <div>
        <h1>Emojis</h1>
        <div>Mood</div>
    </div>
  )
}

export default Emojis