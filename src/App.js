import React, { Component } from 'react';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[
            {
              guessedWord: 'train',
              letterMatchCount: 5
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
