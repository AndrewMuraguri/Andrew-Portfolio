import React from 'react';
import './App.css';
import 'tachyons'
import { Routes , Route } from 'react-router-dom'
import {Header} from './Components/Header/Header';
import {Project} from './Components/Project/Project';
import {Homepage} from './Components/Homepage/Homepage';
import {Credential} from './Components/Credential/Credential'
import background from './Components/media/layeredwavesbg.svg';
    


function App() {
  const myStyle={
      backgroundImage: `url(${background})`,
}

    return (
      <div className='App'style={myStyle} >
        {<Header/>}
          <Routes>
              <Route index element={<Homepage /> } />
              <Route path='/Project' element={<Project /> } />
              <Route path='/Credential' element={<Credential /> } />
          </Routes>   
        </div>
  )
}
export default App;