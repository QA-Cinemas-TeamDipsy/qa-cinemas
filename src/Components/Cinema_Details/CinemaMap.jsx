import GoogleMap from 'google-map-react'
import CinemaPin from './CinemaPin';
import './CinemaMap.css'

import { Container } from 'react-bootstrap';
const CinemaMap = (location) => {

    const { address, lat, lng } = location.location;
    console.log(location)
    console.log(lat);
    console.log(lng);

    const COMB_ADDRESS = `${address.lineOne}, ${address.lineTwo}, ${address.lineThree}, ${address.city}, ${address.county}, ${address.postCode}`;

    return (

        <>
            <Container>
                <div className="map">
                    <div className="google-map"  >
                        <GoogleMap
                            bootstrapURLKeys={{ key:"USE_API_KEY" }}
                            defaultCenter={{ lat: lat, lng: lng }}
                            defaultZoom={17}
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