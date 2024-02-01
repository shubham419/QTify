import React, { useState } from "react";
import style from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import SongsTabs from "../Tabs/Tabs";

const Sectiom = ({ data, type, title, handleFilter }) => {
  const [toggel, setToggel] = useState(false);

  const handleToggel = () => {
    setToggel(!toggel);
  };

  return (
    <div>
      <div className={style.header}>
        <h3>{title}</h3>

        {type === "song" ? null : (
          <h4 onClick={handleToggel} className={style.toggel_text}>
            {toggel ? "Collapse" : "Show all"}
          </h4>
        )}
      </div>
      {type === "song" ? <SongsTabs handleFilter={handleFilter} /> : null}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={style.cards_wrapper}>
          {toggel ? (
            <div className={style.wrapper}>
              {data.map((card) => {
                return <Card data={card} type={type} key={card.id} />;
              })}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(card) => (
                <Card data={card} type={type} key={card.id} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Sectiom;
