// TODO: answer here
import React from "react"
import LikeDislikeButton from "./LikeDislikeButton"
import "../style/postcard.css"


export default function PostCard({ image, caption, username, userId, date, post }) {
  // TODO: answer here

  return (
    <div aria-label="Post Card" className="container" >
      <div className="posts">
        <div className="post-cards">
          <img className="img-post" src={image} alt="post-img" aria-label="Post Image" />
          <div className="user-post">
            <div className="username-profile">
              <img className="profile-picture" src={userId} alt="" />
              <a href="/">
                <p aria-label="Post User Name" className="username-postcard">{username}</p>
              </a>
            </div>
            <span className="date-post" aria-label="Post Date">{date}</span>
          </div>
          <p className="caption" aria-label="Post Caption">{caption}</p>
          <div className="btn-like-dislike">
            <LikeDislikeButton 
              id={post?.id}
              isLiked={post?.liked ?? false}
              isDisliked={post?.disliked ?? false}
              likeCount={post?.likeCount ?? 0}
              dislikeCount={post?.dislikeCount ?? 0}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
