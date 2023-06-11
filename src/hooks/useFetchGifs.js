import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [first, setFirst] = useState({
        data: [],
        loading: true,
    });

    useEffect(()=>{

        getGifs(category)
        .then( img => {
            setFirst({
                data: img,
                loading: false
            });
        });

    },[category]);

    // setTimeout( ()=>{

    //     setFirst({
    //         data: [1,2,3,4,5,6,7,],
    //         loading: false,
    //     })

    // },3000)

    return first;

}