import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello reactJS</h1>
        <h2>hello weather</h2>
        <loader type="puff" color="white" height={100} width={100}>
          loader
        </loader>
      </header>
    </div>
  );
}

export default App;
