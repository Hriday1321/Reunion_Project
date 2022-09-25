import React from 'react'
import { Div, Ref, H } from './Nav.elements'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

function Nav() {
  return (
    <div>
        <Div><H><AddHomeWorkIcon/>Estatery</H></Div>
        <Div><Ref to={'/'}>Rent</Ref></Div>
        <Div><Ref to={'/buy'}>Buy</Ref></Div>
        <Div><Ref to={'/sell'}>Sell</Ref></Div>
        <Div>
            <select>
                <option value="Manage Properties">Manage Properties</option>
                <option value="Edit">Edit Properties</option>
            </select>
        </Div>
        <Div>
            <select>
                <option value="Resources">Resources</option>
                <option value="Docs">Documentation</option>
            </select>
        </Div>
        <Div>
            <button>Login</button>
            <button>Sign Up</button>
        </Div>
    </div>
  )
}

export default Nav