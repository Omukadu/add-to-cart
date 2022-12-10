import React from 'react'
import list from '../data'
import Cards from "./card"
import '../style/Amazon.css'
function amazon({handleClick}) {
  return (
    <>
        <section>
            {
                list.map((item)=>(
                    <Cards item={item} key={item.id} handleClick={handleClick}/>
                ))
            }
        </section>
    </>
  )
}

export default amazon