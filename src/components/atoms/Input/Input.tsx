"use client";
import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  ReactNode,
} from "react";

interface IInputProps {
  className?: string;
  children?: ReactNode;
}

function Input({
  className = "",
  children,
  ...props
}: IInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div
      className={`flex items-center text-dark-200 *:placeholder:text-dark-300 py-[0.5em] px-[0.75em] border-dark-300 border-1 rounded-[0.3em] text-[0.9rem] bg-dark-600 shadow-[0_1em_1em_inset] shadow-dark-800 ${className}`}
    >
      <input className={`outline-none size-full`} {...props} />
      {children}
    </div>
  );
}

export default Input;
