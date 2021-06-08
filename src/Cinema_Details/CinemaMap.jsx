import GoogleMapReact from 'google-map-react'

import CinemaPin from './CinemaPin';
import './CinemaMap.css'
//npm install --save google-map-react
const CinemaMap = (location) => {
    console.log(location)

    const { address, lat, lng } = location.location;
    console.log(address)
    console.log(lat)
    console.log(lng)
    return (
        <>
            <div className="map">
                <div className="google-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCisLEBtwLnPP4J9jJPtkQ8G_WfrgWA434"}}
                        defaultCenter={{lat: 51.3800776959354, lng: -0.1268782980874663}}
                        defaultZoom={14}
                    
                    >
                        <CinemaPin
                            lat={51.3800776959354}
                            lng={-0.1268782980874663}
                            address={address}
                        />
                    </GoogleMapReact>
                </div>

            </div>
         
        </>
    )
}

export default CinemaMap;