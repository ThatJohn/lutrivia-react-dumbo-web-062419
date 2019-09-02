import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import data from "./data"
import Header from './components/Header';
import QuizContainer from './components/QuizContainer';
import NameForm from './components/NameForm';


class App extends React.Component {

  state={
    questions: data.questions
  }

  render() {

    return (
      <div className="container ">
        <div className="row">
          <div className="col-md-6 offset-3 main-app shadow p-3 mb-5 bg-white rounded">
            <Header />
            <hr />
            <QuizContainer questions={this.state.questions} />
            <NameForm />
          </div>
        </div>
      </div>
    );
  }
}


export default App;