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
    <section>
      <p>We provide you most {props.adjective} foods around.</p>
      <ul style={{textAlign : 'left'}}>
        {props.Dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </section>
  );
}

function Footer(props){
  return(
    <footer>
      <div>Copyright @ {props.year}</div>
    </footer>
  );
}

const dishes = [
  "Macaroni",
  "Salmon",
  "Cheese Pizza",
];

const dishesObjects = dishes.map((dish, i) => ({id: i , title: dish}) )
console.log(dishesObjects)
function App() {
  return (
    <div className="App">
      <Header name="Shalihta"/>
      <Main adjective="amaizing" Dishes={dishesObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
