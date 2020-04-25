import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

const Styles = styled.div`
  .test {
    border: 1px solid red;
  }
  * {
    color: var(--black);
  }
  #scroll-span {
    width: 160px;
  }
  #scroll-span > h1 {
    position: absolute;
  }
  #seo {
    visibility: hidden;
  }
  #marketing {
    visibility: hidden;
  }
  #presence {
    visibility: hidden;
  }
`

export default class TagLine extends Component {
  render() {
    return (
      <Styles>
        <Col
          xl={5}
          lg={7}
          className='test d-flex flex-column justify-content-center'
        >
          <div className='d-flex flex-row justify-content-center justify-content-lg-start'>
            <span className='d-flex justify-content-end'>
              <h1>Affordable Web</h1>
            </span>
            <span>&nbsp;&nbsp;</span>
            <span className='d-flex justify-content-start' id='scroll-span'>
              <h1 className='animated fadeIn' id='design'>
                Design
              </h1>
              <h1 className='animated' id='seo'>
                SEO
              </h1>
              <h1 className='animated' id='marketing'>
                Marketing
              </h1>
              <h1 className='animated' id='presence'>
                Presence
              </h1>
            </span>
          </div>
          <div className='d-flex flex-row justify-content-center justify-content-lg-start'>
            <h5 className='text-center'>
              for Small Businesses and Organizations
            </h5>
          </div>
        </Col>
      </Styles>
    )
  }
}
