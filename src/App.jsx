import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item"></input>
        </div>
        <button className="btn">Adds</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-delete">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-delete">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
