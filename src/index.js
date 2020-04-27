import React from 'react';
import ReactDOM from 'react-dom';
import './box.css';

function getTime(){
  const date = new Date();
  return date.getHours() + ":" + date.getMinutes();
}

// <Box></Box>
function Box( props ){
  const random = Math.random();
  const styles = { border: "2px solid gray", backgroundColor: props.color, color: "white" }
  console.log( props );
  return (
    <>
      <hr/>
      <p>Prop color: { props.color }</p>
      <p className="box">A Box! { random * 1000 }</p>
      <p>Time is { getTime() }</p>
      <div style={styles}>Children: { props.children }</div>
    </>
  );
}

// <App></App>
function App(){

  // STATE + AJAX:
  const [ state, setState ] = React.useState(null);
  React.useEffect(function(){
    fetch("https://restcountries.eu/rest/v2/name/greece")
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data[0].population);
      setState(data);
    })
  },[]);
  // STATE + AJAX:

  return (
    <>
      <h1>App! <mark>JS</mark></h1>
      <h2>Subtitle</h2>
      <p>Paragraph</p>
      <Box color="tomato" />
      <Box color="indigo">Box <strong>No2</strong></Box>
      <Box text="OMG">Box <em>No3</em></Box>
    </>
  ); // <-- JSX
}

// ReactDOM.render( WHAT, WHERE );
ReactDOM.render( 
  <App></App>, // <-- Executes App() automatically 
  document.getElementById("root") 
);