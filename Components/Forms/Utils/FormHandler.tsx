import { FormHandlerProps } from "@/Types/Types";

export const FormHandler = (props: FormHandlerProps) => {
  switch (props.type) {
    case "login":
      console.log("login");
      break;
    case "register":
      console.log("register");
      break;
    default:
      break;
  }
};
