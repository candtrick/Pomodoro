import './Timer.css'
import { useState, useEffect } from 'react';



export default function Timer(){


    const [regress, setRegress] = useState(25*60 )// *60 segundos//

    const minutes = Math.floor(regress / 60);
    const seconds = regress % 60
    
    const PomodoroOn = () =>{

        useEffect(() =>{

            if (regress === 0){
                alert("Hora de descansar")
                return
            }else{
                setTimeout(() =>{
                    setRegress(regress - 1)
                }, 1000)
            }
        
        }, [regress])

    }


    return(
        <>
            <div className="clock_box">
                <span className='minutes'>{minutes.toString().padStart(2, "0")}</span>
                <span className='dois_pontos'>:</span>
                <span className='seconds'>{seconds.toString().padStart(2, "0")}</span>
            </div>

        </>
    )
}