import React from 'react'
import { dummy } from '../../utils/dummy';
import { filter } from '../../utils/filter';
import { DivT, SpanT, Input1, S, DivF, SpanF, DivL, Input2, Select, S2, Grid } from './Body.elements';

import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
            <SpanF>
                <DivL>Location</DivL>
                <Input2 placeholder='New Delhi, IN' onChange={(e) => {setLoc(e.target.value)}}></Input2>
            </SpanF>
            <SpanF>
                <DivL>When</DivL>
                <Input2 type='date' onChange={(e) => {
                    if(e.target.value !== '')
                        setDate(new Date(e.target.value))
                    else
                        setDate(e.target.value)
                }}></Input2>
            </SpanF>
            <SpanF>
                <DivL>Price</DivL>
                <Select onChange={(e) => {setPrice(e.target.value)}}>
                    <option value='0'>Any</option>
                    <option value='1'>$500-$2500</option>
                    <option value='2'>$2500-$5000</option>
                    <option value='3'>$5000-$10000</option>
                </Select>
            </SpanF>
            <SpanF>
                <DivL>Property Type</DivL>
                <Select onChange={(e) => {setProp(e.target.value)}}>
                    <option value=''>All</option>
                    <option value='House'>House</option>
                    <option value='Factory'>Factory</option>
                    <option value='Office'>Office</option>
                </Select>
            </SpanF>
            <S2 onClick={() => {filter(dummy, search, date, loc, price, prop, setFiltered)}}><SearchIcon /></S2>
        </DivF>
        <Grid>
        {filtered.map(function(data){
            return (
                <Card>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={data.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {data.address}, {data.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Move in after: {data.movein.getDate()}/{data.movein.getMonth() + 1}/{data.movein.getFullYear()}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        A {data.type} type property. Space left for a simple description of the property. 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large">${data.price}/Month</Button>
                    </CardActions>
                    </Card>
            )
        })}
        </Grid>
    </div>
  )
}

export default Body