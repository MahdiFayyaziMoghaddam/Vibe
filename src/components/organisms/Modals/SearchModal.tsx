import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import { VscSearch } from "react-icons/vsc";
import Input from "../../atoms/Input/Input";
import Modal from "@/components/atoms/Modal/Modal";

export default function SearchModal() {
  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = () => setOpenModal((prev) => !prev);
  return (
    <>
    </>
  );
}
