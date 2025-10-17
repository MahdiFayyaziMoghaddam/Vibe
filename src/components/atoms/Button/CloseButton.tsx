import React from "react";
import Button from "./Button";
import { IoClose } from "react-icons/io5";

interface ICloseProps {
  onClick?: () => void;
  className?: string;
}

export default function CloseButton({
  onClick = () => null,
  className,
}: ICloseProps) {
  return (
    <Button
      variant="icon"
      className={`absolute top-2 right-2 p-[2px]! z-10 ${className}`}
      onClick={onClick}
    >
      <IoClose className="text-[25px] text-dark-200" />
    </Button>
  );
}
