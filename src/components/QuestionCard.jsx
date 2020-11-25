import React from 'react'

const QuestionCard= ({ question, openModal })=> {

    // const [modal, setModal] = useState(false);
    // const closeModal = () => setModal(false);
    // const openModal = () => setModal(true);
// 
    // prev => !prev

    return (
        <div className="card-question" onClick={openModal}>
            <p>{question.textQ}</p>
            {/* <p>{question.textAnswer}</p> */}
        </div> 
    )
}

export default QuestionCard;


// onClick={openModal}