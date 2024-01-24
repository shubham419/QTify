import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/ic_search.svg'
import style from "./Search.module.css"

function Search({placeholder}) {
  return (
    <form  className={style.wrapper}>
        <div>
            <input  className={style.search} placeholder={placeholder} type="text" />
        </div>
        <div>
            <button className={style.searchbtn}>
              <SearchIcon/>
            </button>
        </div>
    </form>
  )
}

export default Search