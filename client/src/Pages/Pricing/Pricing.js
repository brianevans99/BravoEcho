import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../Styles/Wrapper.scss'
import styled from 'styled-components'
import Package from '../../Components/Package/Package'
import packageData from '../../Data/packageData'

const Styles = styled.div`
  content: '';
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  .packages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export default function Pricing() {
  const packageItems = packageData.map((item) => (
    <Package key={item.id} item={item} />
  ))
  return (
    <Fragment>
      <Styles>
        <div className='wrapper' id='design'></div>
        <Container fluid>
          <Row className='py-3 d-flex flex-row align-items-center'>
            <Col className='d-flex justify-content-center' md={6}>
              <h2 className='animated fadeIn text-center'>
                Affordable web services for the small business owner.
              </h2>
            </Col>
            <Col className='d-flex justify-content-center' md={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
          <div className='packages'>{packageItems}</div>
        </Container>
      </Styles>
    </Fragment>
  )
}
