import React from "react"

class NewGameButton extends React.Component {
    render() {
        return (
            <div className="clearfix">
                <button className="float-left btn btn-success">New game</button> <span className="float-right">Score: 1</span>
            </div>
        );
    }
}

export default NewGameButton;