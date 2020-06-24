import React from 'react';
import Usage from './components/Usage(1)';
import CompoundUsage from "./components/CompoundUsage";
import RenderPropsUsage from './components/RenderPropsUsage';
import StateReducerUsage from "./components/StateReducerUsage";
import ControlPropsUsage from './components/ControlPropsUsage';
import ProviderPatternUsage from './components/ProviderPatternUsage';
import HOCUsage from './components/HOCUsage'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Usage /> */}
      {/* <CompoundUsage/> */}
      {/* <RenderPropsUsage/> */}
      {/* <StateReducerUsage/> */}
      {/* <ControlPropsUsage /> */}
      <HOCUsage/>
    </div>
  );
}

export default App;
