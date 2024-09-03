import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import {  FaSave, FaShare } from "react-icons/fa";
import L from "../laughing.png";
import LA from "../laughingActive.png";
import userFav from "../store";
import s from '../dummy_profile.png'
import { Link, useLocation } from "react-router-dom";
import { AiOutlineComment } from "react-icons/ai";
import Share from "./Share";
import { MdPersonAddAlt1, MdVerified } from "react-icons/md";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Details = () => {
  const query = useQuery();
  const source = query.get("url");
  const {
    liked,
    saved,
    addSavedlink,
    addLikedlink,
    removeLikedlink,
    removeSavedlink,
  } = userFav();
  const [savedA, setSavedA] = useState();
  const [likedA, setLikedA] = useState();
  const [shareA, setShareA] = useState(false)
  const [clickOnPic , setClickOnPic] = useState();
  useEffect(() => {
    const check = (arr) => {
      for (const i of arr) if (i.link === source) return true;
      return false;
    };
    if (check(liked)) {
      setLikedA(true);
    }
    if (check(saved)) {
      setSavedA(true);
    }
    console.log(source);
  }, [source, liked, saved]);
  const handleLike = () => {
    if (likedA) {
      removeLikedlink(source);
    } else {
      addLikedlink(source);
    }
    setLikedA((p) => !p);
  };
  const handleSave = () => {
    if (savedA) {
      removeSavedlink(source);
    } else {
      addSavedlink(source);
    }
    setSavedA((p) => !p);
  };
  return (
    <div className="pt-[154px] sm:pt-[90px] flex flex-col lg:flex-row w-full h-[100vh]">
      <div className="w-full shadow-xl lg:w-[60%] flex justify-center bg-warning items-center">
        <img
          src={source}
          alt=""
          onClick={() => setClickOnPic(true)}
          className="max-w-fit w-full border-warning max-h-fit h-full "
          style={{borderWidth : "4px"}}
        />
      </div>
      {shareA && <Share source={source} closefunc={setShareA} />}
      {clickOnPic && (
        <div
          className="fixed flex items-center justify-center top-0 left-0 w-[100vw] h-[100vh]"
          style={{ backgroundColor: "#00000080", zIndex: "9999" }}
        >
          <img
            src={source}
            alt="Meme"
            className=" max-w-full h-[100vh] max-h-fit "
          />
          <button
            className="outline-0 text-4xl  font-bold bg-white shadow-lg btn-outline btn-warning h-[70px] w-[70px] absolute top-2 right-1 sm:right-8 btn py-4"
            style={{ color: "white" }}
            onClick={() => setClickOnPic(false)}
          >
            <GrClose />
          </button>
        </div>
      )}
      <div className="flex-col w-full lg:w-[40%] flex">
        <div className="flex justify-between flex-col h-[30%] px-7 w-full">
          <div className="flex justify-between mt-12 items-center">
            <div>
              <Link to="/"
                className={`w-[50px] flex justify-center items-center h-[50px] rounded-full order-1 sm:order-2 btn btn-warning`}
                style={{ padding: "unset" }}
              >
                <img src={s} alt="" className="h-[90%] w-[90%] rounded-full" />
              </Link>
            </div>
            <div className="flex-1 px-4">
                <Link to="/" className="flex items-center gap-2">
                  <p className="font-bold text-xl">Awais Oem</p>
                  <MdVerified className="text-warning"/>
                </Link>
                  <p clasname="opacity-50 text-xs ">3k followers</p>
            </div>
            <button className="btn flex gap-3 btn-info"><span className="md:hidden lg:block block"><MdPersonAddAlt1/></span><span className="hidden md:block">Follow</span></button>
          </div>
          <div className="flex justify-between flex-row text-4xl items-center  bg-white">
            <div className="flex gap-5">
              {likedA ? (
                <img
                  src={LA}
                  alt=""
                  className="w-[37px] cursor-pointer"
                  onClick={handleLike}
                />
              ) : (
                <img
                  src={L}
                  alt=""
                  className="w-[37px] cursor-pointer"
                  onClick={handleLike}
                />
              )}
            </div>
            {/* avatars ek dosre ke oper */}
            <div className="flex gap-5">
              <FaShare
                className="cursor-pointer"
                onClick={() => setShareA(true)}
              />
              <FaSave
                className={`${savedA && "text-warning"} cursor-pointer`}
                onClick={handleSave}
              />
            </div>
          </div>
        </div>
        <div className="h-[70%] px-7 pt-[30px] w-full">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Comment..."
                className="input w-full input-warning  input-bordered"
              />
              <button className="btn btn-warning">
                <span className="block md:hidden bg-warning">
                  <AiOutlineComment />
                </span>
                <span className="hidden md:block bg-warning">Comment</span>
              </button>
            </div>
          </div>
          <div className="h-[50vh] pt-[30px] flex justify-center opacity-60 items-center overflow-auto">
            Comments are not implemented for now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
