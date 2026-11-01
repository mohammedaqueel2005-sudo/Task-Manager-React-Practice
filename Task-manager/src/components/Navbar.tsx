import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "./ui/Button";

const Navbar = () => {

  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("Navbar must be used inside AuthStore");
  }

  const { user, setUser } = auth;

  const handleClick = () => {
    setUser(null);
  }

  return (
    <div className="px-5 py-3 flex items center justify-between">
      <h1 className="font-semibold">Task Manager</h1>

      {
        user && (
          <nav className="flex gap-2">
            <Link className="px-4 py-2" to={'/'}>Home</Link>
            <Link className="px-4 py-2" to={'/all-tasks'}>All Task</Link>
            <Link className="px-4 py-2" to={'/add-task'}>Add Task</Link>
            <Button type="button" onClick={handleClick}>Logout</Button>
          </nav>
        )
      }

      {
        !user && (
          <Link className="px-4 py-2 rounded bg-blue-600 text-white font-semibold" to={'/login'}>Login</Link>
        )
      }

    </div>
  );
}

export default Navbar;
