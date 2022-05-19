import React, { useState } from "react";
import { faq } from "../../assets/data/faq";
import "./Faq.css";

const FAQ = () => {
  const [answerShowable, setAnswerShowable] = useState(-1);

  const changeAnswerShowable = (id) => {
    console.log(id, answerShowable);
    if(answerShowable === id) {
        return setAnswerShowable(-1);
    }
    
    setAnswerShowable(id);
  }

  return (
    <>
        <h1 className="faq-title">FAQ</h1>
        <div className="faq-container">
        {
            faq.map(item => {
                return (
                    <div className="faq-item">
                        <div className="faq-item-inner" onClick={() => changeAnswerShowable(item.id)}>
                            <h1 className="faq-question">{item.question}</h1>
                            {
                                answerShowable === item.id
                                ? <i class="ri-arrow-drop-up-line icon"></i>
                                : <i class="ri-arrow-drop-down-line icon"></i>
                            }
                        </div>
                        <p className={answerShowable === item.id ? "faq-answer active" : "faq-answer"}>{item.answer}</p>
                    </div>
                );
            })
        }
    </div>
    </>
  )
}

export default FAQ;