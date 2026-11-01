import type { FieldValues, UseFormRegister, Path } from "react-hook-form";

interface InputField<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type: string;
  placeholder: string;
  register: UseFormRegister<T>;
}

const Input = <T extends FieldValues>({
  label,
  name,
  type,
  placeholder,
  register,
}: InputField<T>) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>

      <input
        id={name}
        className="px-3 py-2 border border-gray-300 rounded"
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

export default Input;