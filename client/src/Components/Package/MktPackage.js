import React from 'react'
import styled from 'styled-components'
import { BsCheckCircle } from 'react-icons/bs'

const theme = {
  blue: '#000064',
  green: '#004c00',
  yellow: '#f4c116',
  red: '#e91313',
  white: '#d6d6d6',
  black: '#020202',
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
      width: 240px;
      padding-left: 20px;
    }
  }
`

export default function MktPackage(props) {
  return (
    <Styles>
      <div className='top d-flex flex-column align-items-center'>
        <h4 className='title'>{`${props.item.title}`}</h4>
        <span className='d-flex flex-row'>
          <p>$</p>
          <h1>{props.item.cost}</h1>

          <p>/mo.</p>
        </span>
      </div>
      <div className='views d-flex flex-row align-items-center justify-content-center'>
        <h5>{props.item.minViews} views per day</h5>
      </div>
      <div className='list d-flex flex-column align-items-center'>
        <ul>
          <li>
            <BsCheckCircle /> {props.item.video} video ad
            {props.item.video > 1 && 's'}
          </li>
          {props.item.image > 0 && (
            <li>
              <BsCheckCircle /> {props.item.image} static image ad
              {props.item.image > 1 && 's'}
            </li>
          )}
          {props.item.logoAnimation && (
            <li>
              <BsCheckCircle /> animated logo
            </li>
          )}
          <li>
            <BsCheckCircle /> {props.item.report} report
          </li>
        </ul>
      </div>
    </Styles>
  )
}
