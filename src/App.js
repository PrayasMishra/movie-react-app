import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
    <Counter />
    <Message />
    <Greet name="Clark Kent" heroName="Superman">
    <p>this is a child prop</p>  
    </Greet>
    <Greet name="Bruce Wayne" heroName="Batman">
    <button>Action</button>
    </Greet>
    <Greet name="Barry Allen" heroName="Flash"/>

    <Welcome name="Clark Kent" heroName="Superman"></Welcome>
    <Welcome name="Bruce Wayne" heroName="Batman"></Welcome>
    <Welcome name="Barry Allen" heroName="Flash">
      <button>
        Run Barry Run :)
      </button>
    </Welcome>
    <Hello />
    </div>
    
  );
}

export default App;
