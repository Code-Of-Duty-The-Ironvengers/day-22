import { faker } from "@faker-js/faker";
import { useState } from "react";

function getRandomUser() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    birthDate: faker.date.birthdate(),
    id: faker.datatype.uuid(),
  };
}

export default function Index() {
  const [users, setUsers] = useState([]);
  const [hasDarkBackground, setHasDarkBackground] = useState(true);

  function showAnExample() {
    // users.push(getRandomUser());
    setHasDarkBackground(!hasDarkBackground);
    setUsers([...users, { ...getRandomUser(), hasDarkBackground }]);
  }

  return (
    <div>
      <h1>Hello</h1>

      <button
        onClick={showAnExample}
        // onClick={() => {
        //   // users.push(getRandomUser());
        //   setHasDarkBackground(!hasDarkBackground);
        //   setUsers([...users, { ...getRandomUser(), hasDarkBackground }]);
        // }}
      >
        Add User
      </button>
      {users.map((user, index) => {
        return (
          <User
            key={user.id}
            {...user}
            deleteUser={(userId) => {
              setUsers(users.filter((user) => user.id !== userId));
            }}
          />
        );
      })}
      {/* <pre>{JSON.stringify(users, null, 4)}</pre> */}
    </div>
  );
}

function Button(props) {
  console.log("props:", props);
  return <button>{props.children}</button>;
}

function User(props) {
  console.log(
    "props: inside of user component, about to start rendering, so nice",
    props
  );

  function deleteStuff() {
    props.deleteUser(props.id);
  }
  return (
    <div
      style={{
        backgroundColor: props.hasDarkBackground ? "pink" : "",
        color: props.hasDarkBackground ? "white" : "pink",
      }}
    >
      <h1>ID Card:</h1>
      <div>
        <strong>First Name:</strong> {props.firstName}
        <br />
        <strong>Last Name: </strong> {props.lastName}
        <br />
        <strong>email </strong> {props.email}
        <br />
        {/* <Coolbeans hasDarkBackground={props.hasDarkBackground} /> */}
        {/* {(props.hasDarkBackground || props.email.includes("hotmail")) && (
          <div>MY EYEEEES! MY EEYEEEEEESS</div>
        )} */}
        {props.hasDarkBackground ? (
          <div>MY EYEEEES! MY EEYEEEEEESS</div>
        ) : (
          <div>😎</div>
        )}
        {/* <button onClick={props.deleteUser(props.id)}> */}
        <button onClick={() => props.deleteUser(props.id)}>
          {/* <button onClick={deleteStuff}> */}
          Abra Kadabra Alakazam! Gotta catch em all
        </button>
      </div>
    </div>
  );
}

function Coolbeans(props) {
  if (props.hasDarkBackground) {
    return <div>MY EYEEEES! MY EEYEEEEEESS</div>;
  }

  return <div>😎</div>;
}
