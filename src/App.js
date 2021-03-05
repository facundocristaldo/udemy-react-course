import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";

function App() {
  const [users, setUsers] = useState([{id:1,name:"Juan"}, {id:2,name:"Maria"}, {id:3,name:"Diego"}]);

  const changeUsernames = (event,modifiedId) => {
    const newUsers = [...users]
    const userindex = newUsers.findIndex(user=>user.id===modifiedId);
    newUsers[userindex].name = event.target.value;
    setUsers(newUsers);
  };
  return (
    <div>
      <h1 onClick={changeUsernames}>Some text!</h1>
      {users.map(user => {
        return (
          <div key={user.id}>
            <UserInput handleChange={(event)=>changeUsernames(event,user.id)} value={user.name} />
            <UserOutput username={user.name}></UserOutput>
          </div>
        );
      })}
    </div>
  );
}

export default App;
