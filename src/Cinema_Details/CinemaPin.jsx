import {Icon} from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi'
//npm install @iconify/react
// npm install @iconify/icons-mdi
const CinemaPin = (address)=>{
    return(
        <div className="pin">
            <Icon  className="pin-icon"/>
            {/* <p className="pin-text">{address}</p> */}
        </div>
    )
}

export default CinemaPin;