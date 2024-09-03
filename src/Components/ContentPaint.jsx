// import React, { useState } from 'react'
import Card from './Card'
const ContentPaint = ({arr}) => {
  return (
    <div className="w-full flex flex-col gap-10  items-center pt-[185px] sm:pt-[120px]">
      {arr && arr.map(m=> (<Card key={m?.id ?? (1/Math.random())} source={m.image} />))}
    </div>
  )
}
export default ContentPaint