import React from 'react'
import Image from 'react-bootstrap/Image'
import title from '../../assets/images/bravoEcho.png'
import styled from 'styled-components'

const theme = {
  blue: '#000064',
  green: '#004c00',
  yellow: '#f4c116',
  red: '#e91313',
  white: '#d6d6d6',
  black: '#020202',
}

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d6d6d6;
  h1 {
    font-weight: bold;
    text-shadow: 3px 3px ${theme.black};
    margin: 0;
    font-size: 55px;
    font-family: taurunum-ferrum-iron, sans-serif;
    font-weight: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  h6 {
    margin: 0;
  }
`

export default function Title() {
  return (
    <Styles>
      <Image src={title} alt='Bravo Echo Web Development' />
      <h6>Web Development</h6>
    </Styles>
  )
}
