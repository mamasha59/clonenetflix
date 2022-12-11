import React from 'react'

export default function ItemMovie({img}) {
  return (
    <section className='max-h-28'>

               <img src={`https://image.tmdb.org/t/p/original/${img}`} alt="" />

    </section>
  )
}
