import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { ReactComponent as Prev } from './assets/prev.svg'
import { ReactComponent as Next } from './assets/next.svg'
import style from './assets/style.css'
function Slider(props) {
  const contentRef = useRef()
  const wrapperRef = useRef()

  const [position, setPosition] = useState(0)
  // const [backBtn, setBackBtn] = useState(false)

  const wrapperWidth = useDimension(wrapperRef)

  const contentWidth = useDimension(contentRef)
  const spacePaddingEnd = wrapperWidth / 1.2

  function moveForward(step) {
    let right = -position + step
    if (right + spacePaddingEnd < contentWidth) {
      setPosition(-right)
    }
  }

  function moveBack(step) {
    let left = position + step
    if (left + spacePaddingEnd < wrapperWidth) {
      setPosition(left)
    }
  }

  return (
    <div className={style.slider} position={position}>
      <div className={style.prev}>
        <span
          onClick={() => {
            moveBack(100)
          }}
        >
          <Prev />
        </span>
      </div>
      <div className={style.wrapper} ref={wrapperRef}>
        <div
          className={style.content}
          style={{ transform: `translateX(${position}px)` }}
          ref={contentRef}
        >
          {props.children}
        </div>
      </div>
      <div className={style.next}>
        <span
          onClick={() => {
            moveForward(100)
          }}
        >
          <Next />
        </span>
      </div>
    </div>
  )
}

function useDimension(contentRef) {
  const getDimension = () => {
    return contentRef.current ? contentRef.current.offsetWidth : 0
  }

  const [dimension, setDimension] = useState(getDimension)

  const handleResize = () => {
    setDimension(getDimension())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useLayoutEffect(() => {
    handleResize()
  }, [])
  return dimension
}

export default Slider
