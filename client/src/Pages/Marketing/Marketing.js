import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Player } from 'video-react'
import Footer from '../../Components/Footer/Footer'
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
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
`

export default class Marketing extends Component {
  render() {
    return (
      <Fragment>
        <Styles>
          <div className='wrapper' id='design'></div>
          <Container fluid>
            <Row className='py-3 d-flex flex-row align-items-center'>
              <Col className='d-flex justify-content-center' lg={6}>
                <h2 className='py-3 animated fadeIn text-center'>
                  Eye-catching media that gets noticed.
                </h2>
              </Col>
              <Col className='text-justify' lg={6}>
                <p>
                  Your business may be the best option for consumers in your
                  prospective market, but if you don't get noticed then it may
                  not matter. Video marketing is a rapidly growing business
                  strategy to promote and market your product or service,
                  increase engagement with your customers and educate them on
                  what you have to offer.
                </p>
                <p>
                  Bravo Echo Web Development employs the powers of animated
                  logos and social media advertising for building brand
                  awareness.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className='' md={4}>
                <div className='my-3 text-justify'>
                  <Player playsInline poster={videoPoster1} src={video1} />
                  Add an animated logo to your brand for a professional
                  connection with your target audience. The combination of
                  imagery, sound and motion is many times more effective than a
                  static image at making your business or organization more
                  memorable.
                </div>
              </Col>
              <Col className='' md={4}>
                <div className='my-3'>
                  <Player playsInline poster={videoPoster2} src={video2} />
                  Social media advertising is a very effective way to nurture
                  leads and create prospective customers for your business. This
                  advertising platform allows you to engage with and attract
                  consumers by driving them straight to your website.
                </div>
              </Col>
              <Col className='' md={4}>
                <div className='my-3'>
                  <Player playsInline poster={videoPoster3} src={video3} />
                  Brand awareness is the level of consumer consciousness of a
                  company. It measures a potential customer's ability to not
                  only recognize a brand image, but to also associate it with a
                  certain company's product or service.
                </div>
              </Col>
            </Row>
          </Container>
        </Styles>
      </Fragment>
    )
  }
}
