import React from 'react'
import Col from 'react-bootstrap/Col'
import '../../Styles/TagLine.scss'

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

  design &&
    design.addEventListener('animationend', function () {
      design.classList.add('fadeOutUp')
      seoScroll()
    })
})

export default function TagLine(props) {
  return (
    <Col
      xl={6}
      lg={7}
      className='d-flex flex-column justify-content-center'
      id='column'
    >
      <div
        className='d-flex flex-row justify-content-center justify-content-lg-start'
        id='pad'
      >
        <span className='d-flex justify-content-end'>
          <h1>{props.leadText}</h1>
        </span>
        <span>&nbsp;&nbsp;</span>
        <span className='d-flex justify-content-start' id='scroll-span'>
          <h1 className='animated fadeIn' id='design'>
            {props.text1}
          </h1>
          <h1 className='animated' id='seo'>
            {props.text2}
          </h1>
          <h1 className='animated' id='marketing'>
            {props.text3}
          </h1>
          <h1 className='animated' id='presence'>
            {props.text4}
          </h1>
        </span>
      </div>
      <div className='d-flex flex-row justify-content-center justify-content-lg-start'>
        <h5 className='text-center'>{props.endText}</h5>
      </div>
    </Col>
  )
}
