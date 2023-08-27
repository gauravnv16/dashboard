"use client";

import Link from "next/link";
import Image from "next/image";

import { ButtonProps, PageProps } from "@/Types/Types";
import "./css/style.css";
import gear from "../../public/gear.png";

export const BlueButton = (props: ButtonProps) => {
  return (
    <button
      className="bg-blue-800 text-black px-3 py-2 rounded text-xs"
      onClick={props.onCLick}
      id={props.id}
    >
      {props.icon != "" ? <i className={props.icon}></i> : ""}
      {props.text}
    </button>
  );
};




export default function NavBar() {
  const pages: PageProps[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const ToggleNav = () => {
    const nav = document.getElementById("navlinks2") as HTMLElement;
    if (nav.style.display == "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  };
  return (
    <nav
      className="px-3 py-2 bg-slate-800 text-slate-400 flex items-center justify-between"
      id="nav"
    >
      <section className="flex items-center justify-between">
        <h1 className="text-sm flex items-center">
          <Image
            src={gear}
            alt="Gear"
            width={30}
            height={30}
            className="mr-2"
          />
          {"Gaurav's App Service"}
        </h1>
        <BlueButton
          icon="fas fa-bars"
          onCLick={ToggleNav}
          text=""
          id="menuBtn"
        ></BlueButton>
      </section>
      <section className="flex items-center" id="navlinks2">
        <ul className="text-xs flex">
          {pages.map((page, index) => {
            return (
              <li key={index} className="mr-5">
                <Link href={page.href}>{page.name}</Link>
              </li>
            );
          })}
        </ul>
        <BlueButton
          text="Account"
          href="/account"
          onCLick={() => {
            window.location.href = "/login";
          }}
          icon=""
          id="accountBtn"
        ></BlueButton>
      </section>
    </nav>
  );
}
