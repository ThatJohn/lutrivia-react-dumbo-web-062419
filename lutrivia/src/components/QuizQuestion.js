import React from "react"

class QuizQuestion extends React.Component {
    render() {
        return (
            <>
                <h5>{this.props.question.text}</h5>
                <button type="button" className="btn btn-primary">True</button>
                <button type="button" className="btn btn-primary ml-2">False</button>
                <hr />
            </>
        );
    }
}

export default QuizQuestion;