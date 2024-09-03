import React from 'react'
import { 
    EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from 'react-share'
import {MdAlternateEmail} from 'react-icons/md'
import {ImLinkedin} from 'react-icons/im'
import { FaFacebookF } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'
const Share = ({source ,closefunc}) => {
    const url = "spark-memes.netlify.app";
  return (
    <div className="fixed flex items-center justify-center top-0 left-0 w-[100vw] h-[100vh]" style={{backgroundColor : "#00000080",zIndex : "9998"}}>
        <div className="w-full md:w-[500px] px-7 py-4 rounded-2xl shadow-xl bg-white items-center flex flex-col gap-4">
            <div className="w-full items-center justify-end flex "><button onClick={()=>closefunc(false)} className="btn btn-warning btn-outline"><GrClose/></button></div>
            <input type="text" value={`http://${url}/details?url=${source}`} class="input  input-bordered input-warning w-full max-w-xs" />
            <div className="flex justify-center gap-5 items-center">
                <WhatsappShareButton
                    url={`http://${url}/details?url=${source}`}
                    title ="Meme By Spark"
                >
                    <button className="btn btn-warning "><BsWhatsapp/></button>
                </WhatsappShareButton>
                <FacebookShareButton   url={`http://${url}/details?url=${source}`} quote="Guys Check this out" hashtag="spark">
                    <button className="btn btn-warning "><FaFacebookF/></button>
                </FacebookShareButton>
                <LinkedinShareButton  url={`http://${url}/details?url=${source}`} title="Meme by Spark" summary="Guys Check this out" source="Spark Memes">
                    <button className="btn btn-warning "><ImLinkedin/></button>
                </LinkedinShareButton>
                <EmailShareButton  url={`http://${url}/details?url=${source}`} subject="Meme from Spark" body="Hey, I have some thing funny for you">
                    <button className="btn btn-warning "><MdAlternateEmail/></button>
                </EmailShareButton>
            </div>
        </div>
    </div>
  )
}

export default Share