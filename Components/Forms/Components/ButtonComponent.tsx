import { Loader } from "@/Components/Loader/Loader";
import { ButtonProps } from "@/Types/Types";


export const FormBlueButton = (props: ButtonProps) => {
  return (
    <button
      className={"bg-blue-800 text-black px-3 py-2 rounded text-xs font-bold uppercase" + (props.loading ? " bg-blue-900 cursor-not-allowed" : "")}
      onClick={props.onCLick}
      id={props.id}
    >
      {props.icon != "" ? <i className={props.icon}></i> : ""}
      { props.loading ? <Loader/> : props.text }
    </button>
  );
};
