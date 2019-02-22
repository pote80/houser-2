import React from 'react';
import '../../App.css'

const House = (props) => (
  <div key={props.house.id}>
    <h3>{props.house.property_name}</h3>
    <div>{props.house.property_address}</div>
    <div>{props.house.property_city}</div>
    <div>{props.house.property_state}</div>
    <div>{props.house.property_zip}</div>
    <button onClick={() => props.delete(props.house.id)}>Delete</button>
  </div>
);

export default House;