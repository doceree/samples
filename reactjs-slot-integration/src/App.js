import React from 'react';
import logo from "./logo.svg";

import "./App.css";
import ScriptTag from "./scriptTag";
import ScriptTag2 from "./scriptTag2";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      	<div> Rendering slot in Component</div>
        <ScriptTag />

        <div> Rendering slot in Component using thrid party</div>
        <ScriptTag2 />
      </div>
    );  
  }
}

export default App;
