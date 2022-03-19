
import { useEffect, useState } from 'react';
import './App.css';
import User from './Components/User/User';



function App() {
  const [users, setUsers] = useState([])
  const [team, setTeam] = useState([])
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=25')
    .then(res => res.json())
    .then(data => setUsers(data.results));
  },[])

  const addMember =(name) =>{
   setTeam([...team, name])
  }
  return (
    
    <div>
      <h1>Team Builder.{users.length}</h1>
      <ul>
        {
          team.map((show ,idx) => <li key= {idx}>{show}</li>)
        }
      </ul>
     {
       users.map(user => <User user={user} addMember={addMember}></User>)
     }
    </div>
  );
}

export default App;
