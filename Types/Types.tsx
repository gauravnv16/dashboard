import React from "react";

export type User = {
  username?: string;
  Id?: string;
  email: string;
  password: string;
  img_url?: string;
  accessToken?: string;
  refreshToken?: string;
}
export type PageProps = {
  name: string;
  href: string;
};

export type ButtonProps = {
  text: string;
  icon: string;
  loading?: boolean;
  href?: string;
  id: string;
  onCLick?: () => void;
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

export type FormHandlerProps = {
  type: "login" | "register" | "delete" | "edit";
  user: User;
}