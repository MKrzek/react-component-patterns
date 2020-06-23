import React from 'react';
import Usage from './components/Usage(1)'
import CompoundUsage from "./components/CompoundUsage"
import RenderPropsUsage from './components/RenderPropsUsage'
import StateReducerUsage from "./components/StateReducerUsage"
import ControlPropsUsage from './components/ControlPropsUsage'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Usage /> */}
      {/* <CompoundUsage/> */}
      {/* <RenderPropsUsage/> */}
      {/* <StateReducerUsage/> */}
      <ControlPropsUsage/>
    </div>
  );
}

export default App;
