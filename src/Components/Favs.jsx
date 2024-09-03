import React from 'react'
import { useParams } from 'react-router-dom';
import userFav from '../store'
import ContentPaint from './ContentPaint';
import Noconnection from './Noconnection';
const Favs = () => {
    const {id} = useParams()
    const {liked ,saved} = userFav();
    if (id==="saved") {
      
    }
    console.log(id ,liked ,saved);
    if((id==="saved" && (!saved || saved?.length === 0))||(id==="liked" && (!liked || liked?.length === 0)))
    {
      return (<Noconnection str={`No ${id} files`} />)

    }else
    {
      return (<ContentPaint arr={id==="saved" ?  saved:liked} />)
    }
}

export default Favs