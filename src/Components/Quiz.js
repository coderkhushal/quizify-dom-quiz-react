import React, { useContext } from 'react'
import '../styles/Quiz.css'
import Quizcontext from '../Context/Quizcontext'
import 'react-toastify/dist/ReactToastify.css';
const Quiz = () => {

    const context = useContext(Quizcontext)

    const {handlesubmit, currentques, questions, score, userans} = context
    
    return (
        <div id='maincontainer'>
            {/* quiz till last question after that display results */}
        { (currentques <= questions.length - 1) ?
            <div>
            <div className='secondary-h' id='questionbox'>
            Q{currentques + 1}. {questions[currentques].question}
                </div>
                <div id='optioncontainer'>
                    <div className={`option`} onClick={handlesubmit} id='a'>
                        {questions[currentques].options.a}
                    </div>
                    <div className={`option`} onClick={handlesubmit} id='b'>
                        {questions[currentques].options.b}
                        
                    </div>
                    <div className={`option`} onClick={handlesubmit} id='c'>

                    {questions[currentques].options.c}
                    </div>
                    <div className={`option`} onClick={handlesubmit} id='d'>
                        {questions[currentques].options.d}

                        </div>
                </div>
            
                </div> : <div>
                    <h1 className='primary-h'>Thank You For Taking Quiz</h1>
                    <br /> <h2>Your Score: {score}</h2>
                    <div className='answerscontainer'>
                        <div className="answerbox " style={{marginBottom:"1rem", fontSize:"2rem", textAlign:"center"}}>
                            <div><b> Questions</b></div>
                            <div><b>Correct Answer</b></div>
                            <div style={{marginRight:"4rem"}}><b>Your Answer</b></div>
                        </div>
                    {questions.map((e,i)=> <div className='answerbox'>
                        <div>Q{i+1} {e.question}</div>
                        <div>{e.options[e.correctOption]}</div>
                        <div>{userans[i]}</div>
                    </div>)}
                    </div>
                    <a href='/' style={{textDecoration:"none", background:"darkgray",padding:"15px", fontSize:"1.3rem",borderRadius:"10px",cursor:"pointer"}}>Retake Quiz</a>
                </div>
            }
        </div>
    )
}

export default Quiz