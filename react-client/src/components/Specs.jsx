import React from 'react';


const Specs = (props) => {
  return (
    <div>
      <ul>{props.specification.map((specs, i) => {
        return <li key={i}>{specs}</li>
        })}
      </ul>
    </div>
  )
}

export default Specs;

