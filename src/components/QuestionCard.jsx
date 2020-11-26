import React from 'react'

const QuestionCard = ({question, openModal}) => {
    return (
        <div className="question-card" onClick={openModal}>
            <i className="fas fa-question-circle icon-left"></i>
            <p>{question.textQ}</p>
            <i className="fas fa-chevron-right icon-right"></i>
        </div> 
    )
}

export default QuestionCard;