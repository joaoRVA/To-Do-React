import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react';
import Title from '../components/Title';
const TaskPages = () => {
  const [seachParams] = useSearchParams();
  const title = seachParams.get('title')
  const description = seachParams.get('description')
  const navigate = useNavigate()

  // const goBack = () => {
  //   // window.history.back()
    
  //   navigate('/')
  // }

  return (
    <div className='w-screen h-screen bg-slate-400 flex justify-center p-6'>
      <div className="w-[500px] space-y-4">

      <div className='flex justify-center relative'>
        <button onClick={()=> navigate(-1)} className='bg-slate-300 absolute left-0 top-0 p-2 rounded-md text-slate-600 cursor-pointer'><ChevronLeft/></button>
        <Title>Detalhes da Tarefa</Title>

      </div>
      <div className='space-y-4 p-6 bg-slate-200 rounded-md shadow-md flex flex-col'>
        <h2 className='text-xl text-slate-600'><span className='text-slate-700 font-bold'>Título:</span> {title}</h2>
        <p className='text-slate-600'><span className='text-slate-700 font-bold'>Descrição: </span>{description}</p>
    </div>
    </div>
    </div>
  )
}

export default TaskPages