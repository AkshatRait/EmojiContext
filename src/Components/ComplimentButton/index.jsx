import React, { useContext } from 'react'
import { mainContext } from '../../Context/MainProvider'
import "./index.css"

const ComplimentButton = () => {
    const {setCurrentMood, compliments,setCompliments } = useContext(mainContext);

  
    if(compliments < 5){
        setCurrentMood('sad');
    }else if(compliments < 6){
        setCurrentMood('fine')
    }else if(compliments > 10 ){
        setCurrentMood('happy')
    }
  return (
    <div className='button-container'>    
    <button onClick={()=>setCompliments(compliments+1)}>Compliment</button>
    <button onClick={()=>setCompliments(compliments-1)}>Bully</button>
    </div>
  )
}

export default ComplimentButton