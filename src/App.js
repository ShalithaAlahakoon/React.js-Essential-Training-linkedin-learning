import React from 'react';
import './App.css';
import restaurant from './restaurant.jpg'

function SecretComponent() {
  return <h1>This component is  visible to authorized persons only</h1>
}

function RegularComponent(){
  return <h1>Everyone can see this component</h1>
}

function App() {
 
return(
  <>
    <h1>Hello</h1>
  </>
    
}

export default App;
