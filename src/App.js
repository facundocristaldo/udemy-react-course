import { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

function App() {

  const [usernames, setUsernames] = useState(["Juan","Maria","Diego"])
  
  const changeUsernames=(event)=>{
    setUsernames([event.target.value,"Franco","Agustin"])
  }
  return (
    <div>
      <h1 onClick={changeUsernames}>Some text!</h1>
      <UserInput handleChange={changeUsernames} value={usernames[0]} />
      <UserOutput username={usernames[0]}></UserOutput>
      <UserOutput username={usernames[1]}></UserOutput>
      <UserOutput username={usernames[2]}></UserOutput>
    </div>
  );
}

export default App;
