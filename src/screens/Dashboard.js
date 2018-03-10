import React, { Component } from "react";

import Map from "../components/Map";
import MapVariableController from "../components/MapVariableController";

class Dashboard extends Component {
  state = {
    markersOrder: [1, 2],
    markers: {
      1: { lat: 52.488656, lng: -1.887221 },
      2: { lat: 52.474615, lng: -1.887489 }
    },
    maxTaxiCount: 50
  };

  componentDidMount() {
    // This simulates either a new marker or a marker update
    setInterval(() => {
      const id = Math.floor(Math.random() * this.state.maxTaxiCount) + 1; // Random number between 1-100

      const existing = this.state.markers[id];

      const markerUpdate = {
        id,
        lat: existing
          ? existing.lat + this.getRandomInRange(0.00001, 0.001, 7)
          : this.getRandomInRange(52.4, 52.5, 6),
        lng: existing
          ? existing.lng + this.getRandomInRange(0.00001, 0.001, 7)
          : this.getRandomInRange(-1.82, -1.95, 6)
      };

      const newMarkersOrder = new Set(this.state.markersOrder).add(
        markerUpdate.id
      );

      this.setState({
        markersOrder: Array.from(newMarkersOrder),
        markers: {
          ...this.state.markers,
          [markerUpdate.id]: {
            ...this.state.markers[markerUpdate.id],
            lat: markerUpdate.lat,
            lng: markerUpdate.lng
          }
        }
      });
    }, 10);
  }

  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

  handleMaxTaxiCountChange = val => {
    this.setState({
      maxTaxiCount: val,
      // This does keep the marker "entity" in the markers prop but w/e it's a POC :D
      markersOrder: this.state.markersOrder.slice(0, val)
    });
  };

  render() {
    const markers = this.state.markersOrder.map(markerId => ({
      ...this.state.markers[markerId],
      id: markerId
    }));

    return (
      <div className="fill-parent">
        <MapVariableController
          maxTaxiCount={this.state.maxTaxiCount}
          onMaxTaxiCountChange={this.handleMaxTaxiCountChange}
        />
        <Map markers={markers} />
      </div>
    );
  }
}

export default Dashboard;
