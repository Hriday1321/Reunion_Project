import React from 'react'
import { dummy } from '../../utils/dummy';
import { filter } from '../../utils/filter';
import { DivT, SpanT, Input1, S, DivF } from './Body.elements';

function Body() {
  const [date, setDate] = React.useState('');
  const [loc, setLoc] = React.useState('');
  const [price, setPrice] = React.useState('0');
  const [prop, setProp] = React.useState('');
  const [filtered, setFiltered] = React.useState([...dummy]);
  const [search, setSearch] = React.useState('')

  return (
    <div>
        <DivT>
            <SpanT>Search Properties to Rent</SpanT>
            <Input1 placeholder='Search here' onChange={(e) => {setSearch(e.target.value)}}></Input1>
            <S onClick={() => {filter(dummy, search, date, loc, price, prop, setFiltered)}}>Search</S>
        </DivT>
        <DivF>
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
        </DivF>
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
                    <img src={data.image} alt='#' width='50px'/>
                </div>
            )
        })}
    </div>
  )
}

export default Body