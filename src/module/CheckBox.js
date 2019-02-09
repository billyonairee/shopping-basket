import React, { Component } from 'react';

class CheckBox extends Component {
  render() {
    return (
      <label class="label_check" style={{ float: "left" }}>
        <input type="checkbox" />
      </label>
    );
  }
}

export default CheckBox;