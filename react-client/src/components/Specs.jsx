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
      {/* <p><strong>CREE XP-G2 R5 LED</strong></p>
      <ul>
        <li>Max beam intensity: 553 cd</li>
        <li>Max beam distance: 154 ft (47 m)</li>
        <li>Low mode: 5 lumens, 36 hrs</li>
        <li>Medium mode: 32 lumens, 4 hrs</li>
        <li>High mode: 110 lumens, 30 min</li>
      </ul>
      <p><strong>Nichia 219C LED</strong></p>
      <ul>
        <li>Max beam intensity: 306 cd</li>
        <li>Max beam distance: 114.8 ft (35 m)</li>
        <li>Low mode: 3 lumens</li>
        <li>Medium mode: 20 lumens</li>
        <li>High mode: 85 lumens</li>
      </ul> */}
    </div>
  )
}

export default Specs;


{/* <div class="product_description__text_column"><ul>
<li>Material: Copper</li>
<li>Titanium button</li>
<li>Mode sequence: L-M-H</li>
<li>Battery: 1 x AAA</li>
<li>Removable, reversible stainless steel pocket clip</li>
<li>IPX-8 waterproof</li>
<li>1.5 m impact resistant</li>
<li>Working voltage: 0.9 – 1.5V</li>
<li>Dimensions: 2.9 x 0.6 in (7.4 x 1.5 cm)</li>
<li>Weight (with battery): 1.5 oz (42.5 g)</li>
</ul>
<p><strong>CREE XP-G2 R5 LED</strong></p>
<ul>
<li>Max beam intensity: 553 cd</li>
<li>Max beam distance: 154 ft (47 m)</li>
<li>Low mode: 5 lumens, 36 hrs</li>
<li>Medium mode: 32 lumens, 4 hrs</li>
<li>High mode: 110 lumens, 30 min</li>
</ul>
<p><strong>Nichia 219C LED</strong></p>
<ul>
<li>Max beam intensity: 306 cd</li>
<li>Max beam distance: 114.8 ft (35 m)</li>
<li>Low mode: 3 lumens</li>
<li>Medium mode: 20 lumens</li>
<li>High mode: 85 lumens</li>
</ul></div> */}