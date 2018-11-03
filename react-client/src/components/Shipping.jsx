import React from 'react';



const Shipping = (props) => {
  return (
    <div>
      <p>All orders will be shipped by Massdrop.</p>
      <p>Estimated ship date is <strong>{props.estimatedDate}</strong></p>
      <p>After the drop ends, payment will be collected and the group’s order will be submitted to the vendor up front, making all sales final. Check the discussion page for updates on your order.</p>
    </div>
  )
}

export default Shipping;