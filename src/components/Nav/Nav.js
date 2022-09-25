import React from 'react'
import { Div, DivB, Ref, H, Select, Option, L, S } from './Nav.elements'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

function Nav() {
  return (
    <div>
        <Div><H><AddHomeWorkIcon/>Estatery</H></Div>
        <Div><Ref to={'/'}>Rent</Ref></Div>
        <Div><Ref to={'/buy'}>Buy</Ref></Div>
        <Div><Ref to={'/sell'}>Sell</Ref></Div>
        <Div>
            <Select>
                <Option value="Manage Properties">Manage Properties</Option>
                <Option value="Edit">Edit Properties</Option>
            </Select>
        </Div>
        <Div>
            <Select>
                <Option value="Resources">Resources</Option>
                <Option value="Docs">Documentation</Option>
            </Select>
        </Div>
        <DivB>
            <L>Login</L>
            <S>Sign Up</S>
        </DivB>
    </div>
  )
}

export default Nav