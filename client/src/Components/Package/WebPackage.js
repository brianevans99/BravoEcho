import React from 'react'
import styled from 'styled-components'
import { BsCheckCircle } from 'react-icons/bs'

const Styles = styled.div`
  background: rgba(0, 0, 0, 0.5);
  min-width: 250px;
  border: 2px solid white;
  border-radius: 5px;
  padding: 30px;
  margin: 4px;
  text-transform: capitalize;
`

export default function WebPackage(props) {
  return (
    <Styles>
      <div className='d-flex flex-column align-items-center'>
        <h4>{`${props.item.title}`}</h4>
        <p>{`$${props.item.monthlyCost}/mo.`}</p>
        <p>{`$${props.item.totalCost}`}</p>
      </div>
    </Styles>
  )
}
