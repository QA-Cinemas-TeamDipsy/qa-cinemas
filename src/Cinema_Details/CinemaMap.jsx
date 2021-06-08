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
                        bootstrapURLKeys={{ key: ""}}
                        defaultCenter={{lat: lat, lng: lng }}
                        defaultZoom={7}
                       
                    >
                        {/* <CinemaPin
                            lat={lat}
                            lng={lng}
                            address={address}
                        /> */}
                    </GoogleMapReact>
                </div>

            </div>
         
        </>
    )
}

export default CinemaMap;