import { useContext } from "react";
import Navbar from "../components/Navbar";
import { TaskContext } from "../context/TaskContext";
import Card from "../components/Card";

const AllTask = () => {

  const context = useContext(TaskContext);

  if (!context) { 
    throw new Error("AddTask must be used within TaskStore"); 
  }
  
  const { tasks } = context;

  return (
    <div>
      <Navbar/>

      <h1 className="p-4 font-bold text-xl">All Tasks</h1>

      <section className="grid grid-cols-3 gap-4 p-4">
        {
          tasks?.map((val) => (
            <Card key={val.id} data={val}/>
          ))
        }
      </section>
    </div>
  );
}

export default AllTask;
