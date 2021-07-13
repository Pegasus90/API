import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UserList from "./Components/UserList";

function App() {
  const [listOfUSer, setListOfUSer] = useState([]);
  // using axios to get list of users
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((arr) => setListOfUSer(arr.data));
  }, []);
  return (
    <>
      <div className="title">
        <h1>Users List</h1>
      </div>
      <div className="container">
        {
          // displaying list of users in cards
          listOfUSer.map((user) => {
            return <UserList key={user.id} user={user} />;
          })
        }
      </div>
    </>
  );
}

export default App;
