import React from 'react';
import styled from 'styled-components';


const P = styled.p`
  display: block;
  font-size: 9px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: Lato,Helvetica,Arial,Verdana,sans-serif;
`

const Shipping = (props) => {
  return (
    <div>
      <P>All orders will be shipped by Massdrop.</P>
      <P>Estimated ship date is <strong>{props.estimatedDate}</strong></P>
      <P>After the drop ends, payment will be collected and the group’s order will be submitted to the vendor up front, making all sales final. Check the discussion page for updates on your order.</P>
    </div>
  )
}

export default Shipping;