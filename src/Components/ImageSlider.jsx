import React, { useState } from 'react'
import { sliders } from '../../data'
export const ImageSlider = () => {
  const [index, setIndex] = useState(4)

  const {image, id}  = sliders[index]

  console.log(id, image)
  return (
    <section>
      <article>
        <img src={image} alt="" />
      </article>
    </section>
  )
}
