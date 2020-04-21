import React from "react";

const List = props => (
  <div>
  <ul className="list-group">
    {
      props.groceries.filter(item => {if(item.purchased===false){return true}})
        .map(item => <li className="list-group-item">{item.name}</li>)
        }

  </ul>
  </div>
);

export default List;
