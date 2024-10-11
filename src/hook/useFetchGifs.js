import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export default function useFetchGifs(categorie ) {
  

    const [state, setstate] = useState({
        data:[],
        loading:true
    });


    useEffect( ()=>{
        getGifs( categorie )
            .then( imgs => {

                    setstate({
                        data:imgs,
                        loading: false
                    })
    
            })
    },[categorie])

    return state;



}
