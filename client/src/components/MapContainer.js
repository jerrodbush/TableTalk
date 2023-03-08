import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import { renderMatches } from 'react-router-dom';

const MapContainer = (props) =>
{
    console.log('props.google:', props.google);
    console.log(props.longitude, props.latitude)
    console.log(props)
    const mapStyles = {
        height: "100%",
        width: "100%",
    };

    const containerStyle = {
        position: 'absolute',
        width: '40%',
        height: '50%',
        // right: '15px'
    }

    const defaultCenter = {
        lat: 36.187881, lng: -86.797501
    }

    const [showInfoWindow, setShowInfoWindow] = useState(false);

    const handleMarkerClick = () =>
    {
        setShowInfoWindow(true);
    };

    const handleInfoWindowClose = () =>
    {
        setShowInfoWindow(false);
    };

    return (
        <div>
            <Map
                google={props.google}
                zoom={16}
                style={mapStyles}
                containerStyle={containerStyle}
                initialCenter={{ lat: props.latitude, lng: props.longitude }}
            >
                {/* <LocationPin lat={36.187881} lng={-86.797501} />
                {console.log("LocationPin rendered")} */}
                <Marker position={{ lat: props.latitude, lng: props.longitude }} onClick={handleMarkerClick} />
                <InfoWindow
                    visible={showInfoWindow}
                    onClose={handleInfoWindowClose}
                    position={{ lat: props.latitude, lng: props.longitude }}
                >
                    <div>
                        <h4>{props.business.name}</h4>
                        <p>Hours: {props.business.open_time} - {props.business.close_time}</p>
                        <p>Phone: {props.business.phone}</p>
                        <p>Website: <a href={props.business.website}>{props.business.website}</a></p>
                    </div>
                </InfoWindow>
            </Map>
        </div >
    )

}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);