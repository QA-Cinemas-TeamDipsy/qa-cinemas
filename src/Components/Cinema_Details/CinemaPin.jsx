import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

import './CinemaMap.css';
const CinemaPin = (address)=>{
    return(
        <div className="pin">
            <Icon icon={locationIcon}  className="pin-icon"/>
            <p className="pin-text" >{address.address}</p>
        </div>
    )
}

export default CinemaPin;