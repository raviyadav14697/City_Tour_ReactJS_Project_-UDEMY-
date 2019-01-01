import React, { Component } from 'react';
import Tour from '../Tour';
import './TourList.scss';

export default class TourList extends Component {
  render() {
    return (
      <section className="TourList">
        <Tour />
      </section>
    )
  }
}
