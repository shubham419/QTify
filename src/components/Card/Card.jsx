import React from "react";
import { Tooltip, Chip } from "@mui/material";
import style from "./Card.module.css";

export const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, title, follows, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={style.wrapper}>
              <div className={style.card}>
                <img src={image} alt="album" />
                <div className={style.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={style.chip}
                  />
                </div>
              </div>
              <div className={style.title_wrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }

      default: {
        return <></>;
      }
    }
  };

  return getCard(type);
};
