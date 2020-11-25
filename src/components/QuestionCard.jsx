import React,{ useState }  from 'react'

const QuestionCard = ({question, openModal}) => {
    return (
        <div className="card-question" onClick={openModal}>
            <p>{question.textQ}</p>
        </div> 
    )
}

export default QuestionCard;