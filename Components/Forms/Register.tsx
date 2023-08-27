"use client";

import { InputProps } from "@/Types/Types";
import { useRef, useState } from "react";
import { InputComponent } from "./Components/InputComponent";
import { FormBlueButton } from "./Components/ButtonComponent";
import Link from "next/link";
import { FileUpload } from "../Files/FileUpload";
import { FormHandler } from "./Utils/FormHandler";

export default function Register() {
  const username = useRef("");
  const password = useRef("");
  const email = useRef("");
  const confirmPassword = useRef("");
  const img_url = useRef("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const InputFields: InputProps[] = [
    {
      type: "text",
      placeholder: "John Doe",
      label: "Username",
      name: "username",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        username.current = e.target.value;
      },
    },
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
    {
      type: "password",
      placeholder: "********",
      label: "Confirm Password",
      name: "confirmPassword",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        confirmPassword.current = e.target.value;
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
              username: username.current,
              email: email.current,
              password: password.current,
              img_url: img_url.current,
            },
          });
        }}
      >
        <h3 className="text-xl">Welcome,</h3>
        <h4 className="text-sm">Create Account!!</h4>
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
        <FileUpload name="avatar" onChange={(e) => {}} />
        <p className="text-xs text-slate-500 flex items-center my-3">
          <input type="checkbox" name="terms" id="terms" className="mr-2" />
          By clicking Register, you agree to our Terms
        </p>

        <FormBlueButton
          text="Register"
          icon=""
          id="register"
          loading={loading}
          onCLick={() => {
            
          }}
        ></FormBlueButton>

        <p className="text-xs text-slate-500 flex items-center my-3">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 ml-2">
            Login
          </Link>
        </p>
      </form>
    </article>
  );
}
