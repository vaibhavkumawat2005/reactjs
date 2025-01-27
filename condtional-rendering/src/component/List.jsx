import React from "react";


function List() {
  const user = ["yash", "raj", "dhaval", "baap"];

  return (
    <div className="list-container">
      <h2>User List</h2>
      <ul className="user-list">
        {user.map((item) => (
          <li key={item} className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;