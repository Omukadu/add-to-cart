import React from 'react'
import list from '../data'
import Cards from "./card"
import '../style/Amazon.css'
function amazon({Hc}) {
  return (
    <>
        <section>
            {
                list.map((item)=>(
                    <Cards item={item} key={item.id} Hc={Hc}/>
                ))
            }
        </section>
    </>
  )
}

export default amazon