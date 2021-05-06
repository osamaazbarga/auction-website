import React, {useEffect, useState} from 'react'
import logo from '../logo.svg';
import axios from 'axios';


function User() {
  const [user, setUser] = useState(null)

  const getUser = async () =>{
    const data = await axios.get('api/customers')
    console.log(data.data[0].email);
    setUser(data.data[0].email)
  }

  useEffect(() => {
    getUser()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`Hello ${user}`}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="btn btn-primary">osama</button>
        <button className="btn btn-info">osama</button>
      </header>
    </div>
  );
}

export default User;
