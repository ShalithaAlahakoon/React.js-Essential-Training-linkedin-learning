import React from 'react';
import './App.css';


function Header(props){
  return(
    <header>
      <h1>{props.name}'s kitchen</h1>
    </header>
  );
}

function Main(props){
  return(
    <div>
      <p>We provide you most {props.adjective} foods around.</p>
    </div>
  );
}

function Footer(props){
  return(
    <footer>
      <div>Copyright @ {props.year}</div>
    </footer>
  );
}



function App() {
  return (
    <div className="App">
      <Header name="Shalihta"/>
      <Main adjective="amaizing"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
