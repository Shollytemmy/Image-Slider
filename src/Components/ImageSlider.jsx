import React, { useState } from 'react'
import { sliders } from '../../data'
import {FaAngleLeft} from "react-icons/fa"
import {FaAngleRight} from "react-icons/fa"
export const ImageSlider = () => {
  const [index, setIndex] = useState(0)

  const {image, id}  = sliders[index]
  

  const checkIndex = index => {
    if(index > sliders.length - 1){
      return 0
    }

    if(index < 0){
      return sliders.length - 1
    }


    return index
  }

 const nextSlide = () => {

  setIndex((nextIndex) => {
    let newIdx = nextIndex + 1
    return checkIndex(newIdx)
  })

 }

 const prevSlide = () => {
  setIndex((prevIndex) => {
    let newIdx = prevIndex - 1
    return checkIndex(newIdx)
  })
  
 }
  return (
    <section>
      <article>
        <button className='btn-left btn' onClick={prevSlide}>
          <FaAngleLeft />
        </button>
        <img src={image} alt="" />
        <button className='btn-right btn' onClick={nextSlide}>
          <FaAngleRight />
        </button>
      </article>
    </section>
  )
}
