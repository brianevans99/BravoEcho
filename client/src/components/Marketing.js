import React, { Component, Fragment } from 'react'
import Col from 'react-bootstrap/Col'
import {
  FaFacebookSquare,
  FaSign,
  FaMobileAlt,
  FaSearchDollar,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import './icons.css'

export default class Marketing extends Component {
  render() {
    return (
      <Fragment>
        <Col lg={4}>
          <h2>Marketing...</h2>
          <p>
            Digital Marketing is a term defined to achieve your business
            objectives and goals using the online channels that include but are
            not limited to search engines, social media platforms, content
            creation & advertising in order to educate, engage & market your
            product or service to potential buyers.
          </p>
        </Col>
        <Col lg={3} className='iconDiv'>
          <IconContext.Provider value={{ className: 'fa-icons' }}>
            <FaFacebookSquare />
            <FaMobileAlt />
            <FaSign />
            <FaSearchDollar />
          </IconContext.Provider>
        </Col>
        <Col lg={5}>
          <h2>A Variety of Channels...</h2>
          <p>
            Not all businesses are the same, which means{' '}
            <b>not all marketing strategies should be</b> the same. We work with
            you to determine your target audience, then custom fit a marketing
            strategy to optimize your return. Utilizing the best methods to
            bring customers to you - it's thinking outside the ad.
          </p>
        </Col>
      </Fragment>
    )
  }
}
