import React from 'react'

function Button({title , onClick, extraStyle, type}) {
  return (
    <button type={type} onClick={onClick} className={`bg-green-500 text-white font-semibold text-[20px] rounded-md p-1 px-3 ${extraStyle}`}>{title}</button>
  )
}

export default Button