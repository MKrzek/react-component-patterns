import React from 'react';
import Usage from './components/Usage(1)'
import CompoundUsage from "./components/CompoundUsage"
import  RenderPropsUsage from './components/RenderPropsUsage'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Usage /> */}
      {/* <CompoundUsage/> */}
      <RenderPropsUsage/>
    </div>
  );
}

export default App;
