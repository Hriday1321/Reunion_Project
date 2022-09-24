import React from 'react'

function Body() {
  return (
    <div>
        <div>
            <span>Search Properties to Rent</span>
            <input placeholder='Search here'></input>
        </div>
        <div>
            <span>
                <div>Location</div>
                <input placeholder='New Delhi, India'></input>
            </span>
            <span>
                <div>When</div>
                <input type='date'></input>
            </span>
            <span>
                <div>Price</div>
                <select>
                    <option value='1'>$500-$2500</option>
                    <option value='2'>$2500-$5000</option>
                    <option value='3'>$5000-$10000</option>
                </select>
            </span>
            <span>
                <div>Property Type</div>
                <select>
                    <option value='Houses'>Houses</option>
                    <option value='Factory'>Factory</option>
                    <option value='Office'>Office</option>
                </select>
            </span>
        </div>
    </div>
  )
}

export default Body