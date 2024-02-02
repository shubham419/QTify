import React, { useState } from "react";
import styles from "./CustomAccordion.module.css";
import { IconButton, Typography } from "@mui/material";
import { ReactComponent as AccordionIcon } from "../assets/accordion-icon.svg";

const CustomAccrodion = ({ title, message }) => {

  const [visibility, setVisibility] = useState(false) 

  function handleVisibility(){
    setVisibility(!visibility)
  }

  return (
    <div onClick={handleVisibility} className={styles.accordion_wrapper} >
    <div  className={styles.accordion_title_wrapper}>
      <Typography variant="body1">{title}</Typography>
      <IconButton color="secondary"  sx={{
          transform: visibility ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out',
      }}>
        <AccordionIcon />
      </IconButton>
    </div>
    {visibility ?  <div className={styles.accordion_message_wrapper}>
    <Typography color="black" variant="body1">{message}</Typography>
    </div> : null}
   

    </div>

  );
};

export default CustomAccrodion;
