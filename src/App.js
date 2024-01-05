
import './styles/App.css';
import Scorebar from './Components/Scorebar';
import Quiz from './Components/Quiz';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import Quizcontext from './Context/Quizcontext';

function App() {
  const context = useContext(Quizcontext)
  const { currentques, setcurrentques } = context

  return (
    <div className="App">
      <ToastContainer />
      {/*  quiz if current question >=0 else Starting screen */}
      {(currentques >= 0) ?
      <>
      <Scorebar/>
      <Quiz/>
      </>
      :
      <div>
        <h1  style={{display:"flex",fontSize:"3rem", alignItems:"center", margin:"auto",width:"100%", justifyContent:"center", marginTop:"2rem"}}>
        Welcome to Quizify
        </h1>
        <h6 style={{display:"flex",fontSize:"2.3rem", alignItems:"center", margin:"auto",width:"100%", justifyContent:"center", marginTop:"2rem"}}>
        Dom quiz</h6>
        <button style={{padding:"50px", fontSize:"3rem", borderRadius:"1rem", background:"bisque", color:"black", display:"flex", alignItems:"center", margin:"auto",width:"30%", justifyContent:"center", marginTop:"10rem"}} id='startbtn' onClick={()=>{setcurrentques(0)}}>Start Quiz</button>
      </div>
      }
    </div>
  );
}

export default App;
