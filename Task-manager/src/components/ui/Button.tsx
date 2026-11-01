
type ButtonProps = {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};


const Button = ({ type = "button", children, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="px-4 py-2 bg-sky-500 text-white rounded mt-2">
        {children}
    </button>
  );
}

export default Button;
