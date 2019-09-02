import React from "react"

class NameForm extends React.Component {
    render(){
        return (
            <form className="form">
                <div className="input-group row ml-1">
                    <input type="text" className="form-control mb-3" id="inlineFormInputName2" placeholder="Your name..."></input>
                    <button type="submit" className="btn btn-primary ml-3 mb-3">Submit</button>
                </div>
            </form>
        );
    }
}

export default NameForm;