import { InputProps } from "@/Types/Types";

export const InputComponent = (props:InputProps) => {
  return (
    <section className="flex flex-col text-xs my-2">
      <label htmlFor="username" className="mb-2">
        { props.label }
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="focus:outline-none border-2 p-2 border-slate-700 rounded bg-slate-900"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </section>
  );
};
