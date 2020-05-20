import React, { Component } from 'react'
import Video from '../../Components/Video/Video'

export default class NotFound extends Component {
  constructor() {
    super()
    this.state = {
      leadText: '404 :: Not',
      text1: 'Here',
      text2: 'Established',
      text3: 'Organized',
      text4: 'Found',
      endText: 'Please select a different page',
    }
  }
  render() {
    return (
      <div>
        <Video />
      </div>
    )
  }
}
