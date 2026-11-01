import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

interface TaskData {
    title: string;
    description: string;
    status: string;
    priority: string
}

const AddTask = () => {

  const { register, handleSubmit } = useForm<TaskData>();

  const navigate = useNavigate();

  const context = useContext(TaskContext); 
  
  if (!context) { 
    throw new Error("AddTask must be used within TaskStore"); 
  }
  
  const { addTask } = context;

  const handleData = (data: TaskData) => {
    console.log(data);

    addTask(data);
    
    navigate('/all-tasks');
  }

  return (
    <div>
      <Navbar/>

      <form onSubmit={handleSubmit(handleData)} className="max-w-xl mx-auto bg-red-50 h-screen flex flex-col gap-2 mt-5">
        <Input 
          label="Title" 
          type="text" 
          placeholder="Task TItle" 
          register={register} 
          name="title" 
        />

        <Input 
          label="Description" 
          type="text" 
          placeholder="Task Description" 
          register={register} 
          name="description" 
        />

      <label >Task Status</label>
        <select {...register('status')} className="px-3 py-2 border border-gray-300 rounded my-1" >
          <option value="">Task Status</option>
          <option value="todo">Todo</option>
          <option value="inprogress">Inprogress</option>
          <option value="done">Done</option>
        </select>

        <label >Task Priority</label>
        <select {...register('priority')} className="px-3 py-2 border border-gray-300 rounded my-1">
          <option value="">Task Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <Button type="submit" >Add Task</Button>
      </form>
    </div>
  );
}

export default AddTask;
