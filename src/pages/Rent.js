import React from 'react'
import Nav from '../components/Nav/Nav'
import Body from '../components/Body/Body'
import { DivC, Side, Main} from '../common/common.elements'

function Rent() {
  return (
    <DivC>
      <Side><Nav /></Side>
      <Main><Body /></Main> 
    </DivC>
  )
}

export default Rent