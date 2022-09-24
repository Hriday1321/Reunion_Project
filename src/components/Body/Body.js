import React from 'react'
import { dummy } from '../../utils/dummy';
import { filter } from '../../utils/filter';

function Body() {
  const [date, setDate] = React.useState('');
  const [loc, setLoc] = React.useState('');
  const [price, setPrice] = React.useState('0');
  const [prop, setProp] = React.useState('');
  const [filtered, setFiltered] = React.useState([...dummy]);
  const [search, setSearch] = React.useState('')

  return (
    <div>
        <div>
            <span>Search Properties to Rent</span>
            <input placeholder='Search here' onChange={(e) => {setSearch(e.target.value)}}></input>
            <button onClick={() => {filter(dummy, search, date, loc, price, prop, setFiltered)}}>Search</button>
        </div>
        <div>
            <span>
                <div>Location</div>
                <input placeholder='New Delhi, IN' onChange={(e) => {setLoc(e.target.value)}}></input>
            </span>
            <span>
                <div>When</div>
                <input type='date' onChange={(e) => {
                    if(e.target.value !== '')
                        setDate(new Date(e.target.value))
                    else
                        setDate(e.target.value)
                }}></input>
            </span>
            <span>
                <div>Price</div>
                <select onChange={(e) => {setPrice(e.target.value)}}>
                    <option value='0'>Any</option>
                    <option value='1'>$500-$2500</option>
                    <option value='2'>$2500-$5000</option>
                    <option value='3'>$5000-$10000</option>
                </select>
            </span>
            <span>
                <div>Property Type</div>
                <select onChange={(e) => {setProp(e.target.value)}}>
                    <option value=''>All</option>
                    <option value='House'>House</option>
                    <option value='Factory'>Factory</option>
                    <option value='Office'>Office</option>
                </select>
            </span>
            <button onClick={() => {filter(dummy, search, date, loc, price, prop, setFiltered)}}>Search</button>
        </div>
        {date===''? 'empty': (date.getTime())}
        {loc}
        {price}
        {prop}
        {filtered.map(function(data){
            return (
                <div>
                    {data.price}
                    {data.address}
                    {data.location}
                    {data.movein.getTime()}
                    {data.type}
                    {data.name}
                </div>
            )
        })}
    </div>
  )
}

export default Body