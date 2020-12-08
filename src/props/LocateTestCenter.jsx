import React from 'react';
import GoogleMapReact from 'google-map-react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const mapStyle = {
    width:400,
    height: 500,
    margin: '0 auto',
    padding: '10px',
}
const pageStyle = {
    background:'#ffffff',
    padding: '20px',
};
const grid = {
    height: '100%',
    padding: '20px'
};

const whereToTest ="COVID-19 tests are available at no cost nationwide at health centers and select pharmacies. The Families First Coronavirus Response Act ensures that COVID-19 testing is free to anyone in the U.S., including the uninsured. Additional testing sites may be available in your area. Contact your health care provider or your state or local public health department for more information"

class LocateTestCenter extends React.Component {
    //Location of Fairfax testing locations
    static defaultProps = {
        center: {
          lat: 38.872724,
          lng: -77.262617
        },
        zoom: 11
    };

    render() {
        return(
            <div style={pageStyle}>
                <Grid container direction='column' align={'center'} style={grid}>
                    <h1>Where are the Closest Testing Centers?</h1>
                    <p>{whereToTest}</p>
                    <h1>Covid Testing Stations:</h1>
                    <div style={mapStyle}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyDWgIAUfvcxvsWoPEsg8qfJz4r6cMKnJN0' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        ></GoogleMapReact>
                    </div>
                    <Button title='' flex variant="contained"> Take me to the Closest Location</Button>
                </Grid>
            </div>
        );
    };
};


export default LocateTestCenter;