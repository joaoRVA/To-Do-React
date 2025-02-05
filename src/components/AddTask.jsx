import React, { useState } from 'react'
import InputComponent from './InputComponent'

const AddTask = ({handleAddTask}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
  return (
    <div className='space-y-4 p-6 bg-slate-200 rounded-md shadow-md flex flex-col'>
        <InputComponent
         type="text"
         placeholder='Título da tarefa'
         value={title}
         onChange={(e) => setTitle(e.target.value)}
          />

        <InputComponent type="text"
         placeholder='Descrição' 
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         />
         
        <button onClick={() => {
        if (!title.trim() || !description.trim()){
            return alert('Por favor, preencha os campos!'); 
        }
        handleAddTask(title, description); 
        setTitle(''); 
        setDescription('');
     }}
         className='bg-slate-500 font-medium text-white p-2 rounded-md w-full cursor-pointer'>Adicionar
         </button>
    </div>
  )
}

export default AddTask