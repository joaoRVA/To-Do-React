import React from 'react'

const ButtonComponent = (props) => {
  return <button className='bg-slate-500 p-2 rounded-md text-white cursor-pointer' {...props}>
             {props.children}
        </button>
}

export default ButtonComponent