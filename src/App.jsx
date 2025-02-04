/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css';

const FaqItem = ({question, answer}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  }

  return (
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={toggleShow}>
        {question}
      </div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
          {answer}
        </div>
      </div>
    </div>
  );
}

const FaqAccordion = ({data}) => {
  return (
    <div className="faq-accordion">
      <h2>FAQs</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer}/>
      ))}
    </div>
  )
};

const data = [
  { id: 1, question: "What is React", answer: "React is a front-end Javascript Library for building user interfaces or UI components."},
  { id: 2, question: "What are the benefits of React", answer: "Some of the benefits of React are: it is fast, scalable, modular, easy to debug, and supports server-side rendering."},
  { id: 3, question: "What are the main concepts of React?", answer: "Some of the main concepts are : components, props, state, hooks, lifecycle methods and JSX."},
  { id: 4, question: "What is useState() in React?", answer: "The useState() is a built-in React Hook that allows you for having state variables in functional components."},
  { id: 5, question: " What is JSX?", answer: "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( )."}
];

function App() {
  
  return (
    <>
      <div className="App">
        <FaqAccordion data={data}/>
      </div>
    </>
  )
}

export default App
