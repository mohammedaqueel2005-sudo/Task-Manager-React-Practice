import { useContext } from "react";
import Button from "./ui/Button";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

interface CardProps {
    data: {
        id: number
        title: string;
        description: string;
        status: string;
        priority: string;
    }
}

const Card = ({ data }: CardProps) => {

    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("AddTask must be used within TaskStore");
    }

    const { deleteTask } = context;

    const handleDelete = () => {
        deleteTask(data.id);
    }

    const navigate = useNavigate();

    return (
        <article className="bg-zinc-200 p-4 rounded-md flex flex-col gap-2">
            <p className="text-xs text-red-500">{data.priority}</p>
            <h2 className="font-semibold text-xl">{data.title}</h2>
            <p className="text-sm">{data.description}</p>
            <p className="text-xs bg-green-300 w-fit font-semibold px-4 py-1 rounded-4xl">{data.status}</p>

            <div className="grid grid-cols-2 gap-3 mt-4">
                <Button type="button" onClick={handleDelete}>Delete</Button>
                <Button type="button" onClick={() => navigate("/edit-task",{state: data})}>Update</Button>
            </div>

        </article>
    );
}

export default Card;
