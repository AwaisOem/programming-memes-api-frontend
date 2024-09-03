import React, { useEffect, useState } from 'react'
import { FaCommentAlt, FaSave ,FaShare} from "react-icons/fa" 
import L from '../laughing.png';
import LA from '../laughingActive.png';
import userFav from '../store';
import { Link} from 'react-router-dom';
import  Share from './Share'
const Card = ({source}) => {
    const {liked  ,saved ,addSavedlink , addLikedlink ,removeLikedlink ,removeSavedlink} = userFav();
    const [savedA, setSavedA] = useState()
    const [likedA, setLikedA] = useState()
    const [shareA, setShareA] = useState(false)
    useEffect(()=>
    { 
      const check =(arr)=>
      {
        for (const i of arr)
          if(i.image ===source)
            return true;
          return false;
      }
      if(check(liked))
      {
        setLikedA(true)
      }
      if(check(saved))
      {
        setSavedA(true)
      }
    } ,[ source , liked , saved ])
    const handleOnlyLike =()=>
    {
      if(!likedA)
      {
        addLikedlink(source)
        setLikedA(true)
      }
    }
    const handleLike = ()=>
    {
      if(likedA)
      {
        removeLikedlink(source)
      }
      else
      {
        addLikedlink(source)
      }
      setLikedA(p=>!p)
    }
    const handleSave = ()=>
    {
      if(savedA)
      {
        removeSavedlink(source)
      }
      else
      {
        addSavedlink(source)
      }
        setSavedA(p=>!p)
    }
    const [showlaughpopup, setShowlaughpopup] = useState(false)
    const displaypopup =()=>
    {
      setShowlaughpopup(true);
      setTimeout(() => {
        setShowlaughpopup(false);
      }, 1500);
    }
  return (
    <div className="card w-96 md:w-[57vw] bg-base-100 shadow-xl">
          <figure  style={{backgroundColor : "rgba(251, 189, 35, 0.73)"}}>
            <img src={source} alt="Meme" onDoubleClick={()=>{displaypopup();handleOnlyLike();}}   className="cursor-pointer max-w-full h-fit max-h-[60vh]" />
            {showlaughpopup && (
              <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
              <img src={LA} className={`w-[112px] h-[112px]`} alt="" />
              </div>
            )}
          </figure>
          {shareA && (<Share source={source} closefunc={setShareA} />)}
          <div className="flex justify-between flex-row text-4xl   items-center  bg-white card-body">
            <div className="flex gap-5">
                {likedA ? (
                  <img src={LA} alt="" className="w-[37px] cursor-pointer" onClick={handleLike} />
                  ):(
                      <img src={L} alt="" className="w-[37px] cursor-pointer" onClick={handleLike} />
                )}
                <Link to={`/details?url=${encodeURIComponent(source)}`}>
                  <FaCommentAlt className="cursor-pointer"/>
                </Link>
                <FaShare className="cursor-pointer" onClick={()=>setShareA(true)} />
            </div>
                <FaSave className={`${savedA && "text-warning"} cursor-pointer`} onClick={handleSave}/>
          </div>
        </div>
  )
}

export default Card