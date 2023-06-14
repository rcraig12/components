import React from 'react'

export const IPV4Address = () => {
  return (
    <div className='rcIPV4AddressContainer'>
      <div>
        <div>Address</div>
        <input type="text" name="octet1" id="octet1" size={3} />
        <span>.</span>
        <input type="text" name="octet2" id="octet2" size={3} />
        <span>.</span>
        <input type="text" name="octet3" id="octet3" size={3} />
        <span>.</span>
        <input type="text" name="octet4" id="octet4" size={3} />
        <span>&nbsp;</span>
        <input type="text" name="maskbits" id="maskbits" size={3} />
      </div>
      <div>
        <div>Mask</div>
        <input type="text" name="mask1" id="mask1" size={3} />
        <span>.</span>
        <input type="text" name="mask2" id="mask2" size={3} />
        <span>.</span>
        <input type="text" name="mask3" id="mask3" size={3} />
        <span>.</span>
        <input type="text" name="mask4" id="mask4" size={3} />
      </div>
    </div>
  )
}
