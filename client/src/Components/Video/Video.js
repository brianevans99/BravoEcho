import React from 'react'
import Image from 'react-bootstrap/Image'
import { Player, ControlBar } from 'video-react'
import image from '../../Assets/Images/asteroidsCompressed.jpg'
import video from '../../Assets/Videos/asteroidsCompressed.mp4'
import Banner from '../Banner/Banner'
import '../../Styles/Video.scss'
import styled from 'styled-components'

const Styles = styled.div`
  content: '';
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
`

export default function Video() {
  return (
    <section className='showcase'>
      <Styles>
        <div className='video-container'>
          {<Player autoPlay loop muted src={video} /> || <Image src={image} />}
        </div>
      </Styles>
      <Banner />
    </section>
  )
}
