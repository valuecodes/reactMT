import React from 'react';
import './components/App.css';
import Box from './components/Box'

function App() {
  return (
    <div className="App">
      <div className='boxes'>
        <Box name={'Sam'} title={'CEO'} age={35}/>
        <Box name={'Max'} title={'CFO'} age={45}/>
        <Box name={'Laura'} title={'Designer'} age={28}/>
        <Box name={'Katarina'} title={'Developer'} age={32}/>
        <Box name={'Jack'} title={'UX-designer'} age={24}/>
      </div>
    </div>
  );
}

export default App;
