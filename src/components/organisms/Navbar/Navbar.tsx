"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../../atoms/Button/Button";
import Avatar from "../../molecules/Avatar/Avatar";
import Link from "../../atoms/Link/Link";
import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import { VscSearch } from "react-icons/vsc";
import Modal from "@/components/atoms/Modal/Modal";
import Input from "@/components/atoms/Input/Input";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = () => setOpenModal((prev) => !prev);

  return (
    <>
      <Drawer open={open} onClose={toggleOpen} />
      <div className="flex items-center py-[0.3vw] bg-dark-800 border-b-1 border-b-dark-400 shrink-0">
        <div className="container flex items-center justify-between ">
          <Button
            variant="primary"
            className="p-1! max-sm:p-0.5! rounded-xs"
            onClick={toggleOpen}
          >
            <GiHamburgerMenu className="text-2xl max-sm:text-sm" />
          </Button>
          <div className="flex items-center gap-7 max-sm:gap-3">
            <div className="flex items-center gap-7 max-sm:gap-3 max-sm:*:text-[0.5rem]!">
              <Link href="/">Library</Link>
            </div>
            <div className="flex items-center gap-6">
              {/* <SearchModal /> */}
              <Button
                variant="dark"
                className="p-1.5! text-primary hover:bg-transparent text-lg! max-sm:p-0.5! max-sm:rounded-xs"
                onClick={toggleOpenModal}
              >
                <VscSearch className="max-sm:text-sm" />
              </Button>

              {openModal ? (
                <Modal
                  open={openModal}
                  toggleHandler={toggleOpenModal}
                  className="flex flex-col items-center h-80 gap-2 w-160"
                  closeButton={false}
                >
                  <div className="flex justify-center w-full gap-5 h-9">
                    <Input
                      placeholder="Search music name ..."
                      className="*:text-[0.85rem]! *:py-1 grow"
                    ></Input>
                    <Button
                      variant="dark"
                      className="p-2! text-primary hover:bg-transparent text-[1.1rem]! aspect-square"
                    >
                      <VscSearch className="size-full" />
                    </Button>
                  </div>
                </Modal>
              ) : null}
            </div>
            <Avatar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
