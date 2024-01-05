import React, { useContext } from 'react'
import "../styles/Scorebar.css"
import "../styles/App.css"
import Quizcontext from '../Context/Quizcontext'
import { ToastContainer } from 'react-toastify'

const Scorebar = () => {
  const context= useContext(Quizcontext)

  const {score,currentques,questions}= context
  return (
    <div >
      { (currentques <= questions.length - 1) && 
        
      <div id='scorebar'>

        <div id='questions'>
            {currentques+1}/{questions.length}
        </div>
        <div className='primary-h'>
            Welcome to Quizify
            
        </div>
        <div>
            score: {score}
        </div>
      </div>
      }
    </div>
  )
}

export default Scorebar