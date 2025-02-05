import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import {v4} from 'uuid'
import Title from './components/Title'


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    // Chamar API
    const tasksApi = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {method: 'GET'})
    
      // pegar os dados que ela retorna
      const data = await response.json()
    

      // persistir esses dados no state
      setTasks(data)
  }

  tasksApi()
  }, [])


  function checkTask(id){
    const newTasks = tasks.map((tsk) =>{
      if(tsk.id === id){
        return {...tsk, isCompleted: !tsk.isCompleted}
      }

      return tsk
    })

    setTasks(newTasks)
  }

  function deleteTask(id){
    const newTasks = tasks.filter((tsk) => tsk.id !== id)
    setTasks(newTasks)
  }

  function handleAddTask(title, description){
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className='min-h-screen bg-slate-400 flex justify-center p-6'>
      <div className="w-[500px] space-y-4">
      <Title>Lista de Tarefas</Title>
      <AddTask handleAddTask={handleAddTask}/>
      <Tasks tasks={tasks} checkTask={checkTask} deleteTask={deleteTask}/>

      </div>
    </div>
  )
}

export default App
