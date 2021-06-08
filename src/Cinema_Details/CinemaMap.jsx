import GoogleMap from 'google-map-react'
import CinemaPin from './CinemaPin';
import './CinemaMap.css'

import { Container } from 'react-bootstrap';
//npm install --save google-map-react
const CinemaMap = (location) => {

    const { address, lat, lng } = location.location;
    console.log(location)
    console.log(address)

    const COMB_ADDRESS = `${address.lineOne}, ${address.lineTwo}, ${address.lineThree}, ${address.city}, ${address.county}, ${address.postCode}`

        ;

    return (

        <>
            <Container>
                <div className="map">
                    <div className="google-map">
                        <GoogleMap
                            
                            bootstrapURLKeys={{ key: "AIzaSyCisLEBtwLnPP4J9jJPtkQ8G_WfrgWA434" }}
                            defaultCenter={{ lat: lat, lng: lng }}
                            defaultZoom={18}


                        >

                            <CinemaPin
                                lat={lat}
                                lng={lng}
                                address={COMB_ADDRESS}
                            />

                        </GoogleMap>
                    </div>

                </div>
            </Container>
        </>
    )
}

export default CinemaMap;