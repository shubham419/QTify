import React, {useState} from 'react'
import style from './Section.module.css';
import Card from '../Card/Card';
import { CircularProgress } from '@mui/material';

const Sectiom = ({data, type, title}) => {

  console.log(data.length);

    const [toggel, setToggel] = useState(true);

    const handleToggel = () => {
      setToggel(!toggel);
    }

  

  return (
    <div>
        <div className={style.header}>
          <h3>{title}</h3>
          {/* <button>Show all</button> */}
          {/* <button>Collapse</button> */}

          <h4 onClick={handleToggel} className={style.toggel_text}>{toggel ? "Collapse" : "Show all"}</h4>

        </div>

          {
            data.length === 0 ? (<CircularProgress />) : (
              <div className={style.cards_wrapper}>{
                // toggel ? (<div className={style.wrapper}>
                //     {data.map((card) => {
                //      return <Card data={card} type={type} key={card.id}/>
                //     })}
                // </div>) : (<>hello</>)

               <div className={style.wrapper}>
                    {data.map((card) => {
                     return <Card data={card} type={type} key={card.id}/>
                    })}  
                </div> 
              }</div>
            ) 
            
          }
        
    </div>
  )
}

export default Sectiom