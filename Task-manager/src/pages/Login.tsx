import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { AuthContext } from "../context/AuthContext";

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<User>();

  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("Login must be used inside AuthStore");
  }

  const { setUser } = auth;

  const navigate = useNavigate();

  const handleData = (data: User) => {
    setUser(data);
    console.log("Form data:", data);
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto h-screen flex flex-col justify-center gap-2">
      <h1 className="font-bold text-xl">
        Login to your Account
      </h1>

      <p className="text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Reprehenderit, inventore?
      </p>

      <form onSubmit={handleSubmit(handleData)}>
        <Input<User>
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          register={register}
        />

        <Input<User>
          label="Password"
          name="password"
          type="password"
          placeholder="Enter Your Password"
          register={register}
        />

        <Button type="submit">Login</Button>
      </form>

      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Login;