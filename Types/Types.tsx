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

export type InputProps = {
  type: string;
  placeholder: string;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type FileUploadProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}