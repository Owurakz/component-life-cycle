import React, { useEffect, useState } from "react";
import axios from "axios";

function UserFunc() {
  const [Users, setUsers] = useState([]);
  async function getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div key={Users.id}>
      <h1>Functional components</h1>

      {Users.map((User) => {
        return (
          <div key={User.id}>
            <h1>{User.name}</h1>
            <h2>{User.username}</h2>
            <h3>{User.email}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default UserFunc;
