import axios from 'axios'
import { useEffect, useState } from 'react';
import CinemaCard from './CinemaCard';
import {Accordion} from 'react-bootstrap';

const Cinemas = () =>{

    const [cinemas, setCinemas] = useState([]);
    const[isLoaded, setIsLoaded] = useState(false);
    const [error, setError] =useState({});

    useEffect(()=>{
        const CINEMA_DB_URL = "http://localhost:8080/api/cinemas/getAllCinemas"
        axios.get(`${CINEMA_DB_URL}`)
        .then((res)=> res)
        .then((result)=>{
            setIsLoaded(true);
            setCinemas(result.data);
            console.log(cinemas);
        },(error)=>{
            setIsLoaded(true);
            setError(error);
        })
    },[]);
    console.log(cinemas)

    return(
        <>
        <h1>Cinemas</h1>
        
        <Accordion>
        {
            cinemas.map((cinema,ix)=>(
                <CinemaCard id={ix} cinema={cinema}/>)
                )
        }
        </Accordion>
        </>
    )
}

export default Cinemas;