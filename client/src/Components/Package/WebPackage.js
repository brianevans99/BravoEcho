import React from 'react'
import styled from 'styled-components'
import { BsCheckCircle } from 'react-icons/bs'
import numeral from 'numeral'

const theme = {
  blue: '#000064',
  green: '#004c00',
  yellow: '#f4c116',
  red: '#e91313',
  white: '#d6d6d6',
  black: '#020202',
  gray: '#808080',
}

const Styles = styled.div`
  background-color: ${theme.black};
  min-width: 250px;
  border: 2px solid ${theme.black};
  border-radius: 4px;
  margin: 4px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  :hover {
    transform: scale(1.05);
    border: 2px solid ${theme.white};
  }

  .top {
    background-color: ${theme.blue};
    width: 100%;
    .title {
      text-transform: uppercase;
    }
    span > * {
      margin: 0;
      padding: 0;
    }
    span h1 + span {
      vertical-align: text-bottom;
    }
    .total {
      color: ${theme.gray};
    }
  }
  .views {
    min-height: 50px;
    background-color: ${theme.white};
    color: ${theme.black};
    h5 {
      font-weight: bolder;
      margin: 0;
    }
  }
  .list {
    background-color: ${theme.black};
    ul {
      list-style: none;
    }
  }
`

export default function WebPackage(props) {
  return (
    <Styles>
      <div className='top d-flex flex-column align-items-center'>
        <h4 className='title'>{`${props.item.title}`}</h4>
        <span className='d-flex flex-row'>
          <p>$</p>
          <h1>{numeral(props.item.monthlyCost).format('0,0[.]00')}</h1>
          <p>/mo.</p>
        </span>
        <small className='total d-flex flex-column align-items-center'>
          <div>for 1st year or</div>
          <div>{numeral(props.item.totalCost).format('$ 0,0[.]00')} total</div>
        </small>
      </div>
      <div className='views d-flex flex-row align-items-center justify-content-center'>
        <h5>{props.item.function} </h5>
      </div>
      <div className='list d-flex flex-column align-items-center'>
        <ul>
          {props.item.includes.map((includedOptions) => (
            <li>
              <BsCheckCircle /> {includedOptions}
            </li>
          ))}
        </ul>
      </div>
    </Styles>
  )
}
