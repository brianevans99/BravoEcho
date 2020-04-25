import React from 'react'
import video from '../assets/videos/asteroidsCompressed.mp4'
import Banner from './Banner'
import './video.css'
import styled from 'styled-components'

const Styles = styled.div`
  content: '';
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
`

export default function Video() {
  return (
    <section class='showcase'>
      <Styles>
        <div class='video-container'>
          <video autoPlay={true} loop={true} muted={true}>
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </Styles>
      <Banner />
    </section>
  )
}
