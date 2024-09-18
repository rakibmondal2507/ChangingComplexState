import React, { useState } from "react";

function App() {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");

  // function updateFname(event) {
  //   setFname(event.target.value);
  // }
  // function updateLname() {
  //   setLname(event.target.value);
  // }

  const [fullname, setFullname] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullname((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fName} {fullname.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullname.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullname.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
