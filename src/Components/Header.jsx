import React, { useState } from "react";
import logo from '../logo.png'
import {BiSearchAlt} from 'react-icons/bi'
import {FiUpload} from 'react-icons/fi'
import {AiFillHome ,AiFillHeart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {FaSave} from 'react-icons/fa'
import {HiOutlineLogout} from 'react-icons/hi'
import { Link } from "react-router-dom";
import s from '../dummy_profile.png'
const Header = ({searchVal  ,setSearch}) => {
  //temporary making this variable
  const [temp, settemp] = useState(true)
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <header className="bg-white text-gray-600 fixed z-50 body-font w-full shadow-lg">
      <div className="container mx-auto flex-wrap items-center flex justify-between p-5 flex-row items-center">
        <div className="order-0 flex title-font font-medium items-center text-gray-900  md:mb-0">
          <Link to="/">
            <img src={logo} className="w-[50px] h-[46px]" alt="" />
          </Link>
          <span className="ml-3 text-xl">Spark Memes</span>
        </div>
        <div className="form-control sm:mt-0 mt-4 w-full sm:w-fit order-2 sm:order-1">
          <div className="input-group">
            <input
            value={searchVal}
              type="text"
              onChange={e=>setSearch(e.target.value)}
              placeholder="Search…"
              className="input w-full sm:w-fit input-bordered"
            />
            <Link className="btn btn-square btn-warning" to="/">
              <BiSearchAlt/>
            </Link>
          </div>
        </div>
        {!temp ?(
        <button onClick={()=>settemp(true)} className={`order-1 sm:order-2 btn btn-warning`}>
           Get Started
        </button>
        ):(
        <button onClick={()=>setProfileMenu(p=>!p)} className={`w-[50px] flex justify-center items-center h-[50px] rounded-full order-1 sm:order-2 btn btn-warning`} style={{padding: "unset"}}>
            <img src={s} alt="" className="h-[90%] w-[90%] rounded-full" />
        </button>
        )}
        {profileMenu && (
              <div className="absolute top-20 right-10 flex text-black font-bold flex-col rounded-3xl shadow-2xl  w-[200px]" style={{zIndex : "70"}}>
                <button  className="h-[50px]  hover:opacity-80 bg-warning flex justify-center gap-4 items-center w-full" style={{borderTopLeftRadius:"20px" , borderTopRightRadius : "20px"}} ><FiUpload/><span className=" opacity-50">Upload</span></button>
                <Link  className="h-[50px]  hover:opacity-80 bg-warning flex justify-center gap-5  items-center w-full"  to="/"><AiFillHome/>Home</Link>
                <button  className="h-[50px]  hover:opacity-80 bg-warning flex justify-center gap-4 items-center w-full"><CgProfile/><span className=" opacity-50">Profile</span></button>
                <Link  className="h-[50px]  hover:opacity-80 bg-warning flex justify-center gap-6 items-center w-full"  to="/Favs/liked"><AiFillHeart/>Liked</Link>
                <Link  className="h-[50px]  hover:opacity-80 bg-warning flex justify-center gap-5 items-center w-full"  to="/Favs/saved"><FaSave/>Saved</Link>
                <button className="h-[50px]  hover:opacity-80 bg-warning flex justify-center gap-2 items-center w-full" style={{borderBottomLeftRadius:"20px" , borderBottomRightRadius : "20px"}} ><HiOutlineLogout/><span className=" opacity-50">Log out</span></button>
              </div>
            )}
      </div>
    </header>
  );
};
// search goes to / 
export default Header;
