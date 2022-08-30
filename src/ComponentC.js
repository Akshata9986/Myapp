import React, { useState } from "react";

function ComponentC() {
  const [user, setUser] = useState({
    userName: "",
    password: ""
  });

  const updateUserName = (event) => {
    console.log(event.target.value);

    setUser({
      ...user,
      name: event.target.value,
    });
  };

  const updatePassword = (event) => {
    console.log(event.target.value);

    setUser({
      ...user,
      password: event.target.value,
    });
  };

  const login = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      UserName:
      <input type="text" Username="name" onChange={updateUserName} />

      Password:
      <input type="text" password="password" onChange={updatePassword} />

      <button onClick={login}> login</button>

      <p>{user.userName}</p>
      <p>{user.password}</p>
    </form>

  );
}

export default ComponentC;