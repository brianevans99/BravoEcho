import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Player } from 'video-react'
import '../../Styles/Wrapper.scss'
import '../../Styles/Marketing.scss'
import videoPoster1 from '../../assets/images/videoPoster_logoAnimations.png'
import videoPoster2 from '../../assets/images/videoPoster_socialMediaAds.png'
import videoPoster3 from '../../assets/images/videoPoster_brandAwareness.png'
import video1 from '../../assets/videos/video1.mp4'
import video2 from '../../assets/videos/video2.mp4'
import video3 from '../../assets/videos/video3.mp4'
import styled from 'styled-components'

const Styles = styled.div`
  content: '';
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
`

export default class Marketing extends Component {
  render() {
    return (
      <Fragment>
        <Styles>
          <div className='wrapper' id='design'></div>
          <Container fluid>
            <Row className='d-flex flex-row align-items-center'>
              <Col className='d-flex justify-content-center top' md={6}>
                <h2 className='animated fadeIn'>
                  Eye-catching media that gets noticed.
                </h2>
              </Col>
              <Col className='d-flex justify-content-center' md={6}>
                <p>
                  Video marketing is using videos to promote and market your
                  product or service, increase engagement on your digital and
                  social channels, educate your consumers and customers, and
                  reach your audience with a new medium. ... 2018 and 2019
                  transformed video from a singular marketing tactic to an
                  entire business strategy.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className='' md={4}>
                <Player playsInline poster={videoPoster1} src={video1} />
              </Col>
              <Col className='' md={4}>
                <Player playsInline poster={videoPoster2} src={video2} />
              </Col>
              <Col className='' md={4}>
                <Player playsInline poster={videoPoster3} src={video3} />
              </Col>
            </Row>
          </Container>
        </Styles>
      </Fragment>
    )
  }
}
