import React from 'react'
import {AiFillFire} from 'react-icons/ai'


const PriorityDisplay = ({priority}) => {
  return (
    <div className='flex justify-start align-baseline '>
        <AiFillFire className={`${priority > 0 ? "text-red-400" : "text-slate-900"} pr-1` }/>
        <AiFillFire  className={`${priority > 1 ? "text-red-400" : "text-slate-400"} pr-1` }/>
        <AiFillFire className={`${priority > 2 ? "text-red-400" : "text-slate-400"} pr-1` } />
        <AiFillFire  className={`${priority > 3 ? "text-red-400" : "text-slate-400"} pr-1` }/>
        <AiFillFire  className={`${priority > 4 ? "text-red-400" : "text-slate-400"} pr-1` }/>
    </div>
  )
}

export default PriorityDisplay