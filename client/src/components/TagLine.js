import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import './tagline.css'

const Styles = styled.div``

document.addEventListener('DOMContentLoaded', function () {
  function presenceScroll() {
    const presence = document.querySelector('#presence')
    presence.style.visibility = 'visible'
    presence.classList.add('fadeInUp')
  }

  function marketingScroll() {
    const marketing = document.querySelector('#marketing')
    marketing.style.visibility = 'visible'
    marketing.classList.add('fadeInUp')

    marketing.addEventListener('animationend', function () {
      marketing.classList.add('fadeOutUp')
      presenceScroll()
    })
  }

  function seoScroll() {
    const seo = document.querySelector('#seo')
    seo.style.visibility = 'visible'
    seo.classList.add('fadeInUp')

    seo.addEventListener('animationend', function () {
      seo.classList.add('fadeOutUp')
      marketingScroll()
    })
  }

  const design = document.querySelector('#design')
  // design.classList.add('fadeIn');

  design.addEventListener('animationend', function () {
    design.classList.add('fadeOutUp')
    seoScroll()
  })
})

export default class TagLine extends Component {
  render() {
    return (
      <Col xl={5} lg={7} className='d-flex flex-column justify-content-center'>
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
    )
  }
}
