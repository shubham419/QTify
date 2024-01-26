import React from "react";
import style from "./SongCard.module.css"

const SongCard = ({imgUrl, title, likes}) => {
  return (
    <div>
      <div className={style.card_content}>
        <img src={imgUrl} alt="img" />
        <button>{likes} Likes</button>
      </div>
        <h4>{title}</h4>
    </div>
  );
};

export default SongCard;
