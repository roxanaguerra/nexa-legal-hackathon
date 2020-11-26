import React from 'react'

const QuestionCard = ({question, openModal}) => {
    return (
        <div className="question-card" onClick={openModal}>
            <i className="far fa-check-circle icon-left"></i>
            <p className="question-text">{question.textQ}</p>
            <i className="fas fa-chevron-right icon-right"></i>
        </div> 
    )
}

export default QuestionCard;