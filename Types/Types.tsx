import React from "react";

export type PageProps = {
  name: string;
  href: string;
};

export type ButtonProps = {
  text: string;
  icon: string;
  id: string;
  onCLick: () => void;
};
