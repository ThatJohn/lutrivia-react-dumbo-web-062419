import React from "react"
import QuizQuestion from "./QuizQuestion"


class QuizContainer extends React.Component {

    
    render() {
        
        const renderQuestions = this.props.questions.map(question => <QuizQuestion question={question} />);

        return (
            <>
                {renderQuestions}
            </>
        );
    }
}

export default QuizContainer;