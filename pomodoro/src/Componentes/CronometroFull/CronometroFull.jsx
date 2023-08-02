import { Buttons } from "../Buttons/Buttons"
import Timer from "../Timer/Timer"
import './CronometroFull.css'
import { useState } from "react"


export function CronometroFull(){

    return(
        <>
            <header>
                <h1 className='p_title'>GESTOR DE PRODUTIVIDADE</h1>
            </header>

            <section className="timer_full">

                <div className="timer_box">
                    <div className="timer"> 
                        <Timer/>
                    </div>
                </div>

               
                <Buttons/>
            </section>

            <article>
                <div id="article_title_box">
                    <h2 id="article_title"> COMO USAR ?</h2>
                </div>

                <div id="article_text">
                    O gestor funciona da seguinte forma:
                    Ao clicar no botão "INICIAR", o contador regressará até 00:00, e chegará uma notificação lhe avisando de que está na hora de dar uma pausa na atividade que você está fazendo. 

                    Logo após o seu clique no botão "DESCANSAR", iniciará um contador de 5 minutos, também regressivo.
                </div>
            </article>

            <footer>
                <br /><br /><br />
                ---- FOOTER A SER PREENCHIDO ----
            </footer>
        </>
    )


}