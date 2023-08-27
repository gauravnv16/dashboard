"use client";

import { InputProps } from "@/Types/Types";
import { useRef, useState } from "react";
import { InputComponent } from "./Components/InputComponent";
import { FormBlueButton } from "./Components/ButtonComponent";
import Link from "next/link";
import { FileUpload } from "../Files/FileUpload";
import { FormHandler } from "./Utils/FormHandler";

export default function Login() {
  const password = useRef("");
  const email = useRef("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const InputFields: InputProps[] = [
    {
      type: "email",
      placeholder: "johndoe@email.com",
      label: "Email",
      name: "email",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        email.current = e.target.value;
      },
    },
    {
      type: "password",
      placeholder: "********",
      label: "Password",
      name: "password",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        password.current = e.target.value;
      },
    },
  ];

  return (
    <article className="text-slate-400 flex justify-center p-3">
      <form
        className="flex flex-col"
        id="form"
        style={{
          width: "500px",
        }}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setLoading(true);
          FormHandler({
            type: "register",
            user: {
              email: email.current,
              password: password.current,
            },
          });
        }}
      >
        <h3 className="text-xl">Welcome,</h3>
        <h4 className="text-sm">Log into your Account!!</h4>
        {error != "" ? (
          <p className="bg-red-500 font-bold text-black w-fit px-3 py-1 my-3 rounded-md text-xs">
            {error}
          </p>
        ) : (
          ""
        )}
        {InputFields.map((input, index) => {
          return <InputComponent key={index} {...input} />;
        })}

        <Link href="/forgot-password" className="text-xs text-blue-500 my-3">
          Forgot Password?
        </Link>

        <FormBlueButton
          text="Login"
          icon=""
          id="register"
          loading={loading}
          onCLick={() => {
            console.log("Register");
          }}
        ></FormBlueButton>

        <p className="text-xs text-slate-500 flex items-center my-3">
          New to us?
          <Link href="/register" className="text-blue-500 ml-2">
            register
          </Link>
        </p>
      </form>
    </article>
  );
}
