"use client";
import Button from "../../atoms/Button/Button";

export default function DrawerExit() {
  return (
    <Button
      variant="primary"
      className="absolute bottom-4 left-5 right-5"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.close();
        }
      }}
    >
      Exit
    </Button>
  );
}
