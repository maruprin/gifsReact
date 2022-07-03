import React, {useEffect,useState} from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs ({params}){
    const { keyword } = params
    const [loading, setLoading] = useState(false)


    const [gifs, setGifs] = useState([]);
 
  useEffect(function (){
    setLoading(true)
    getGifs({keyword})
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    },[keyword]) //en esta linea keyword es la dependencia, cuando cambia el estado cambia y vuelve a renderizarse
if(loading) return <i>Loading, please wait 🐭</i>

    return  <div> 
        {
        gifs.map(({id, title, url}) => 
        <Gif 
         id={id}
         key={id}
         title={title} 
         url ={url}
            />
          )
    }
    </div>
}