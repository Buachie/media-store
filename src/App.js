import React from 'react';
import UploadForm from './components/Upload';
import NavBar from './components/NavBar';
import AudioList from './components/AudioList';
import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <UploadForm/>
        <AudioList/>
      </main>
      
    </div>
  );
}

export default App;
