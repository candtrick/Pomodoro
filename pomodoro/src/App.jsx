import { CronometroFull } from './Componentes/CronometroFull/CronometroFull'
import './App.css'

function App() {

  return (
    <>
      <div>
        <CronometroFull/>

        <audio preload='metadata'src="videoplayback.mp3" controls></audio> 
      </div>

      <a target='blank' href='https://pomofocus.io/'> Pomodoro Original</a>

    </>
  )
}

export default App
