import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/ic_search.svg'
import style from "./Search.module.css"

function Search({placeholder}) {
  const onSubmit = (e) => {
      e.preventDefault();
      //complete the function
  }
  return (
    <form  className={style.wrapper} onSubmit={onSubmit}>
        <div>
            <input  className={style.search} placeholder={placeholder} type="text" required/>
        </div>
        <div>
            <button className={style.searchbtn} type='submit'>
              <SearchIcon/>
            </button>
        </div>
    </form>
  )
}

export default Search