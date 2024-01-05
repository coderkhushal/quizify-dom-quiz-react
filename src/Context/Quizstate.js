import { useState } from "react"

import { toast } from 'react-toastify'
import Quizcontext from "./Quizcontext"


const Quizstate= (props)=>{
  const [userans, setuserans]= useState([])

    const [questions, setquestions]= useState([
        {
          question: "What does DOM stand for?",
          options: {
            a: "Document Object Model",
            b: "Data Object Model",
            c: "Dynamic Object Management",
            d: "Document Oriented Middleware"
          },
          correctOption: "a"
        },
        {
          question: "Which method is used to select an element by its ID in the DOM?",
          options: {
            a: "getElementByTag",
            b: "selectById",
            c: "querySelector",
            d: "getElementById"
          },
          correctOption: "d"
        },
        {
          question: "What is the purpose of the `document.createElement` method?",
          options: {
            a: "To create a new document",
            b: "To create a new HTML element",
            c: "To remove an element from the DOM",
            d: "To append an element to the body"
          },
          correctOption: "b"
        },
        {
          question: "How can you attach an event listener to an HTML element using JavaScript?",
          options: {
            a: "addEventListener",
            b: "attachEvent",
            c: "onEvent",
            d: "eventListener"
          },
          correctOption: "a"
        },
        {
          question: "Which property is used to get the value of an input field in JavaScript?",
          options: {
            a: "value",
            b: "inputValue",
            c: "text",
            d: "inputText"
          },
          correctOption: "a"
        },
        {
          question: "What does the `innerHTML` property do?",
          options: {
            a: "Gets the HTML content of an element",
            b: "Sets the HTML content of an element",
            c: "Gets the text content of an element",
            d: "Sets the text content of an element"
          },
          correctOption: "b"
        },
        {
          question: "Which method is used to remove a child element from its parent in the DOM?",
          options: {
            a: "deleteChild",
            b: "removeChild",
            c: "detachChild",
            d: "excludeChild"
          },
          correctOption: "b"
        },
        {
          question: "How can you change the CSS style of an element in the DOM using JavaScript?",
          options: {
            a: "style.css",
            b: "setStyle",
            c: "changeStyle",
            d: "style"
          },
          correctOption: "d"
        },
        {
          question: "What does the `parentNode` property return in the DOM?",
          options: {
            a: "The next sibling element",
            b: "The previous sibling element",
            c: "The parent element",
            d: "The child element"
          },
          correctOption: "c"
        },
        {
          question: "Which method is used to make an asynchronous HTTP request in JavaScript?",
          options: {
            a: "fetch",
            b: "ajax",
            c: "httpRequest",
            d: "asyncRequest"
          },
          correctOption: "a"
        }
      ])
    const [currentques, setcurrentques]= useState(-1)
    const handlesubmit = (e) => {

      if (e.target.id === questions[currentques].correctOption) {
          e.target.style.backgroundColor="green"
          toast.success("Correct ans",{
              position: toast.POSITION.TOP_CENTER,
              autoClose: 50,
          })
          setscore(score + 1)
      }
      else{
        e.target.style.backgroundColor="red"
          toast.error('Incorrect ans',{
              position: toast.POSITION.TOP_CENTER,
              autoClose: 50,
          })
      }
      setuserans([...userans,questions[currentques].options[e.target.id]])
      setTimeout(() => {
          setcurrentques(currentques + 1)
          e.target.style.backgroundColor="rgb(17, 17, 147)"
      }, 400);
  }
    const [score, setscore]= useState(0)
    return(
        <Quizcontext.Provider  value={{score,userans,handlesubmit, setuserans, setscore, questions, currentques, setcurrentques}}>
            {props.children}
        </Quizcontext.Provider>
    )

}
export default Quizstate