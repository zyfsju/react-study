import React, { Component } from "react";

class ContactList extends Component {
  render() {
    // const people = [{ name: "Tyler" }, { name: "Karen" }, { name: "Richard" }];
    const people = this.props.contacts;
    return (
      <ol>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    );
  }
}

function App() {
  return (
    <div className="App">
      <ContactList
        contacts={[{ name: "Tyler" }, { name: "Karen" }, { name: "Richard" }]}
      />
      <ContactList
        contacts={[{ name: "44" }, { name: "K32" }, { name: "R55" }]}
      />
    </div>
  );
}

export default App;
