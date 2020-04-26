import React, { Component } from 'react'
import Video from '../components/Video'
import Info from '../components/Info'
import styled from 'styled-components'

const Styles = styled.div``

export default class Home extends Component {
  render() {
    return (
      <Styles>
        <Video />
        <Info />
      </Styles>
    )
  }
}
