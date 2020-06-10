import React from 'react'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

const theme = {
  blue: '#000064',
  green: '#004c00',
  yellow: '#f4c116',
  red: '#e91313',
  white: '#d6d6d6',
  black: '#020202',
  width: '20rem',
  margin: '10px 20px',
  lineHeight: 1.1,
}

const Styles = styled.div``

export default function WebDesign(props) {
  return (
    <Styles>
      <Card
        style={{ width: theme.width, margin: theme.margin }}
        className='bg-light text-dark'
      >
        <a href={props.item.link} target='_blank' rel='noopener noreferrer'>
          <Card.Img
            variant='top'
            src={props.item.img}
            alt={props.item.imgAlt}
          />
        </a>

        <Card.Body>
          <Card.Subtitle>{props.item.title}</Card.Subtitle>
          <hr />
          <Card.Text style={{ lineHeight: theme.lineHeight }}>
            <strong>The Need:</strong> <small>{props.item.theNeed}</small>
          </Card.Text>{' '}
          <Card.Text style={{ lineHeight: theme.lineHeight }}>
            <strong>The Solution:</strong>{' '}
            <small>{props.item.theSolution}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Styles>
  )
}
