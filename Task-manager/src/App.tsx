import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AllTask from "./pages/AllTask";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/all-tasks" element={<AllTask/>} />
        <Route path="/add-task" element={<AddTask/>} />
        <Route path="/edit-task" element={<EditTask/>} />
      </Routes>
    </>
  );
}

export default App;
