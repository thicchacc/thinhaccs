import React, { Component } from 'react';
import logo from './logo.svg';
import './MarkList.css';

class MarkList extends Component {
  render() {
    return (
      <div className="MarkList">
        <header className="MarkList-header">
          <img src={logo} className="MarkList-logo" alt="logo" />
          <h1 className="MarkList-title">thicc venues</h1>
        </header>
      </div>
    );
  }
}

export default MarkList;
