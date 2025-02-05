import React from 'react'
import {CheckIcon, ChevronRight, TrashIcon} from "lucide-react"
import { useNavigate } from 'react-router-dom'
import ButtonComponent from './ButtonComponent'
const Tasks = (props) => {
  const navigate = useNavigate()

  function onSeeDatailsClick(tsk){
    // navigate(`/tasks?title=${tsk.title}&description=${tsk.description}`)
    const query = new URLSearchParams() // maneira mais segura, pois esse objeto faz toda a formatação
    query.set('title', tsk.title)
    query.set('description', tsk.description)
    navigate(`/tasks?${query.toString()}`)
  }

  return (
    <ul className='space-y-4 p-6 bg-slate-200 rounded-md shadow-md'> 
        {props.tasks.map((tsk) => (
          <li key={tsk.id} className='flex gap-2'>
            <button 
            onClick={() => props.checkTask(tsk.id)}
             className={
                `bg-slate-500 text-left w-full flex text-white p-2 rounded-md cursor-pointer ${tsk.isCompleted && 'line-through'}`
                }>
            {tsk.isCompleted && <span className='text-green-500'><CheckIcon/></span>}
            {tsk.title}
            </button>

            <ButtonComponent onClick={() => onSeeDatailsClick(tsk)}>
                <ChevronRight />
            </ButtonComponent>

            <ButtonComponent onClick={()=> props.deleteTask(tsk.id)}>
                <TrashIcon />
            </ButtonComponent>
          </li>
        ))}
    </ul>
  )
}

export default Tasks