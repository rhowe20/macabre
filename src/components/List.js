import React from "react";

function List(props) {
  return (
    <ul className="list-group">
      <li>{props.groceries[0].name}</li>
    </ul>
  );
}

export default List;
