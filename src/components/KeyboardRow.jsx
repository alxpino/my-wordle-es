import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./KeyboardRow.css"

class KeyboardRow extends Component {
    render() {
        const { letters } = this.props;
        return (
        <>
          <div className='row'>
            {letters.map((letter, index) => (
                <div key={index} className='keys'>{ letter }</div>
            ))}
            </div>
        </>
        )
    }
}
KeyboardRow.propTypes = {
    letters: PropTypes.array.isRequired,
  };
  
  export default KeyboardRow;