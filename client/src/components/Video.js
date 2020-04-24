import React from 'react'
import video from '../assets/videos/BlurredVideoScriptsBeingTyped.mp4'
import styled from 'styled-components'
import Banner from './Banner'

const Styles = styled.div`
  .showcase {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 0 20px;
  }
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--primary-color)
      url('./https://traversymedia.com/downloads/cover.jpg') no-repeat center
      center/cover;
  }
  .video-container video {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
  .video-container:after {
    content: '';
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
  }
  .content {
    z-index: 2;
  }
`

export default function Video() {
  return (
    <Styles>
      <section class='showcase'>
        <div class='video-container'>
          {' '}
          <video autoPlay loop muted>
            <source src={video} type='video/mp4' />
          </video>
        </div>
        <div class='content'>
          <Banner />
        </div>
      </section>
    </Styles>
  )
}
