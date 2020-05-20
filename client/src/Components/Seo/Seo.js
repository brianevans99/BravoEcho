import React, { Component, Fragment } from 'react'
import Col from 'react-bootstrap/Col'
import {
  FaChrome,
  FaFirefoxBrowser,
  FaInternetExplorer,
  FaSafari,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import '../../Styles/icons.css'

export default class Seo extends Component {
  render() {
    return (
      <Fragment>
        <Col lg={4}>
          <h2>Search Engine Optimization...</h2>
          <p>
            SEO is a methodology of strategies, techniques and tactics used to
            increase the amount of visitors to a website by obtaining a
            high-ranking placement in the search engine results page (SERP) —
            including Google, Bing, Yahoo and other search engines.
          </p>
        </Col>
        <Col lg={3} className='iconDiv'>
          <IconContext.Provider value={{ className: 'fa-icons' }}>
            <FaChrome />
            <FaInternetExplorer />
            <FaFirefoxBrowser />
            <FaSafari />
          </IconContext.Provider>
        </Col>
        <Col lg={5}>
          <h2>Critical Techniques...</h2>
          <p>
            Your Bravo Echo website design includes techniques that improve your
            search results over multiple browsers. Design elements that promote
            a modern look are important, but we also incorporate techniques to
            maximize the quality of your SEO score, like overall{' '}
            <b>loading speed</b> of your site, <b>metadata</b> inclusion, the{' '}
            <b>architecture</b> of your site and the <b>structure</b> of your
            data.
          </p>
        </Col>
      </Fragment>
    )
  }
}
