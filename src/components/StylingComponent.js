import React, { useState } from "react";
import Radium from "radium";

const StylingComponent = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Juan", age: 23 },
    { id: 2, name: "Illa", age: 20 },
    { id: 3, name: "Ela", age: 21 },
  ]);
  const [showPersons, setShowPersons] = useState(false);
  const style = {
    border: "none",
    backgroundColor: "green",
    color: "white",
    padding: "15px",
    fontSize: "16px",
    ":hover": {
      fontWeight: "bold",
      backgroundColor: "darkgreen",
    },
    // "@media (min-width: 500px)": {
    //   width: "300px",
    // },
  };

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };
  const deletePerson = (person) => {
    const newPersons = [...persons];
    const personIndex = newPersons.findIndex((p) => p.id === person.id);
    newPersons.splice(personIndex, 1);
    setPersons(newPersons);
  };
  if (showPersons) {
    style.backgroundColor = "red";
    style[":hover"] = {
      ...style[":hover"],
      backgroundColor: "darkred",
    };
  }

  const classes = [];
  if (persons.length <= 2) classes.push("red");
  if (persons.length <= 1) classes.push("bold");
  return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button style={style} onClick={togglePersonsHandler}>
          Toggle Persons
        </button>
        {showPersons &&
          persons.map((p) => (
            <p onClick={() => deletePerson(p)}>
              {p.name} is {p.age} years old
            </p>
          ))}
      </div>
  );
};
export default Radium(StylingComponent);
