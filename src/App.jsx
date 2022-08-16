import React from 'react'
import './App.css';
import Provider from './components/context/Provider';
import Routes from './components/routes/Routes'

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  )
}

export default App
