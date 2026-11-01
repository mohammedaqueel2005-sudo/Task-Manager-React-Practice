import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface TaskData {
    title: string;
    description: string;
    status: string;
    priority: string;
}

interface NewTaskData extends TaskData {
    id: number;
}

interface TaskContextTypes {
    tasks: NewTaskData[] | null;
    setTasks: Dispatch<SetStateAction<NewTaskData[]>>;
    addTask: (task: TaskData) => void;
    deleteTask: (id: number) => void;
    updateTask: (id: number, update: TaskData) => void;
}

interface TaskStoreProps {
    children: ReactNode;
}

export const TaskContext = createContext<TaskContextTypes | undefined>(undefined);

const TaskStore = ({ children }: TaskStoreProps) => {

    const [tasks, setTasks] = useState<NewTaskData[]>([]);

    function addTask(task: TaskData) {
        let newTask: NewTaskData = {
            id: Math.floor(Math.random() * 1000),
            ...task
        }

        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    const deleteTask = (id: number) => {
        let newTask = tasks.filter((val) => (
            val.id !== id
        ));

        setTasks(newTask);
    }

    const updateTask = (id: number, update: TaskData) => {
        let updatedTask = tasks.map((val) => (
            val.id === id ? { ...val, ...update } : val
        ));

        setTasks(updatedTask);
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks, addTask, deleteTask, updateTask }} >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskStore;