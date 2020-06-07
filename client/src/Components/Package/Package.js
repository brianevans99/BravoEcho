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

export default function Package(props) {
  return (
    <Styles>
      <div className='d-flex flex-column align-items-center'>
        <h4>{`${props.item.title}`}</h4>
        <p>{`$${props.item.cost}/mo.`}</p>
        {props.item.video > 0 && (
          <p>
            {props.item.video} video ad{props.item.video > 1 && 's'}
          </p>
        )}

        {props.item.image > 0 && (
          <p>
            {props.item.image} image ad{props.item.image > 1 && 's'}
          </p>
        )}
        {props.item.logoAnimation && <p>logo animation</p>}
        <p>min. {props.item.minViews} views per day</p>
        <p>{props.item.report} report</p>
        <p>
          {props.item.seo ? <BsCheckCircle /> : ''}
          {props.item.seo}
        </p>
      </div>
    </Styles>
  )
}
