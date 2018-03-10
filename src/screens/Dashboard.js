import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// Taken from https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
const GOOGLE_MAPS_API_KEY = "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo";

class Dashboard extends Component {
  static defaultProps = {
    center: { lat: 52.488656, lng: -1.887221 },
    zoom: 15
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: [GOOGLE_MAPS_API_KEY] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      />
    );
  }
}

export default Dashboard;
