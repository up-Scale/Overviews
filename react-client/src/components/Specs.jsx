import React from 'react';
import styled from 'styled-components';


const Li = styled.li`
  display: list-item;
  font-family: Lato,Helvetica,Arial,Verdana,sans-serif;
  font-size: 8.5px;
  font-weight: 300;
  line-height: 15px;
  color: #5b6a69;
`
const Ul = styled.ul`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  list-style-type: disc;
  list-style-position: initial;
  list-style-image: initial`

const Specs = (props) => {
  return (
    <div>
      <Ul>{props.specification.map((specs, i) => {
        return <Li key={i}>{specs}</Li>
        })}
      </Ul>
    </div>
  )
}

export default Specs;

