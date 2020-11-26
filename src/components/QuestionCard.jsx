import React from 'react'

const QuestionCard = ({question, openModal}) => {
    return (
        <div className="card-question" onClick={openModal}>
            <i className="fas fa-question-circle"></i>
            <p>{question.textQ}</p>
            <i className="fas fa-chevron-right"></i>
        </div> 
    )
}

export default QuestionCard;