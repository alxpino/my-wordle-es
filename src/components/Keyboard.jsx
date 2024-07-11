import React, { Component } from 'react'
import KeyboardRow from './KeyboardRow'
import "./KeyboardRow.css"


export default class Keyboard extends Component {
  render() {
    //const letters = ['a', 'b', 'c'];
    return (
        <div className='board'>
            <KeyboardRow letters={ ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'] }></KeyboardRow>
            <KeyboardRow letters={ ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'] }></KeyboardRow>
            <KeyboardRow letters={ ['', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ''] }></KeyboardRow>
        </div>
    )
  }
}
