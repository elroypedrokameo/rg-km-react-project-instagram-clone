// TODO: answer here
import axios from "axios"
import React, { useState, useEffect } from "react"
import "../style/likedislikebtn.css"
import { API_URL } from "../api/config"


export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount, image}) {
    // TODO: answer here
    const [totalLikes, setTotalLikes] = useState(likeCount)
    const [totalDislike, setTotalDislike] = useState(dislikeCount)
    const [isLike, setIsLike] = useState(isLiked)
    const [isDislike, setIsDislike] = useState(isDisliked)

    const handleLikeButton = () => {
        if(isLike) {
            setIsLike(false)
            setTotalLikes(totalLikes - 1)
            getLikeDislike('unlike')
        } else {
            setIsLike(true)
            setTotalLikes(totalLikes + 1)
            getLikeDislike('like')
            if(isDislike) {
                setIsDislike(false)
                setTotalLikes(totalLikes + 1)
                setTotalDislike(totalDislike - 1)
                getLikeDislike('like')
            }
        }
    }

    const handleDislikeButton = () => {
        if(isDislike) {
            setIsDislike(false)
            setTotalDislike(totalDislike - 1)
            getLikeDislike('undislike')
        } else {
            setIsDislike(true)
            setTotalDislike(totalDislike + 1)
            getLikeDislike('dislike')
            if(isLike) {
                setIsLike(false)
                setTotalDislike(totalDislike + 1)
                setTotalLikes(totalLikes - 1)
                getLikeDislike('dislike')
            }
        }
    }

    const getLikeDislike = async (command) => {
        const likeDislikeData = await axios.get(`${API_URL}/post/${id}/${command}`, {withCredentials: true})

        if (likeDislikeData?.message === "success") {
            console.log("LikeDislik: ", likeDislikeData)
        }
    }

    useEffect (() => {
        getLikeDislike()
    }, [])


    return (
        <>
            <div className="like-dislike-btn">
                <div className="like-btn">
                    <button className={[isLike ? 'active-like' : null]} aria-label="Like Button" onClick={() => {
                        handleLikeButton()
                    }} ><span aria-label="Like Count">{totalLikes} Like</span>
                    </button>
                </div>
                <div className="dislike-btn"> 
                    <button className={[isDislike ? 'active-dislike' : null]} aria-label="Dislike Button" onClick={() => {
                        handleDislikeButton()
                    }} ><span aria-label="Dislike Count">{totalDislike} Dislike</span>
                    </button>
                </div>
            </div>
        </>
    )
}
