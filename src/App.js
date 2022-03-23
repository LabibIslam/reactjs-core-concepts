import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name:'Dr. Mahfuz', job:'singer'};
const singer2 = {name:'Eva Rahman', job:'singer2'};

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <Perosn></Perosn>
      <Perosn></Perosn>
      <Perosn></Perosn>
      <Perosn></Perosn>
      <h2>New Component. yaaaah</h2>
      <Friends></Friends>
      <Friends></Friends>
      <Friends></Friends>
    </div>
  );
}

function Perosn(){
  return (
    <div className='perosn'>
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Cricketer</p>
  </div>
  )
}

function Friends(){
  return(
    <div className='container'>
      <h3>Name: Ajay Devgun</h3>
      <p>Job: Maramari</p>
    </div>
  )
}

export default App;
