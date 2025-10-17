"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "../atoms/Button/Button";
import Input from "../atoms/Input/Input";
import Link from "../atoms/Link/Link";

type TUnknownObj = { [key: string]: string };
type TUser = { username: string; password: string };
type TValues = {
  username: string;
  password: string;
};

export default function Register() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [values, setValues] = useState<TValues>({ password: "", username: "" });

  const getUsers = async () => {
    const res = await fetch("/api/users");
    const data: TUser[] = await res.json();
    setUsers(data);
  };

  const setUser = () => {
    fetch("/api/users", { method: "POST", body: JSON.stringify(values) });
  };

  useEffect(() => {
    const id = setInterval(() => {
      getUsers();
    }, 10000);
    return () => clearInterval(id);
  }, []);

  const inputChanges = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "username":
        setValues((prev) => ({ ...prev, username: e.target.value }));
        break;

      case "password":
        setValues((prev) => ({ ...prev, password: e.target.value }));
        break;
    }
  };

  const registerHandler = () => {
    if (values.username.length >= 3 && values.password.length >= 5) {
      const isUserFound = users.some(
        (user) => user.username === values.username
      );
      if (!isUserFound) {
        setUser();
        getUsers();
      } else {
        alert("user was exist!!!!");
      }
    } else {
      alert("Values are incorrect!!!");
    }
    setValues({ password: "", username: "" });
  };
  return (
    <div className="relative flex justify-center items-center grow">
      <div className="absolute top-0 right-0 bottom-0 left-0 z-0 blur-sm bg-[url('/images/paint.jpg')] bg-cover"></div>
      <form className="flex flex-col items-center bg-dark-700/60 border-1 border-dark-400 pt-4 pb-6 w-80 z-10 shadow-[0_1rem_0.8rem] shadow-dark-900/50">
        <h1 className="text-3xl italic font-bold text-gradient bg-linear-135 from-primary to-secondary select-none">
          Register
        </h1>
        <Input
          className="text-md! mt-8"
          placeholder="Username:"
          name="username"
          onChange={inputChanges}
        />

        <p className="text-primary text-[0.8rem] mt-1 w-full"></p>
        <Input
          className="text-md! mt-8"
          placeholder="Email:"
          name="email"
          type="email"
          onChange={inputChanges}
        />
        <p className="text-primary text-[0.8rem] mt-1 w-full"></p>
        <Input
          className="text-md! mt-8"
          placeholder="Password:"
          name="password"
          type="password"
          onChange={inputChanges}
        />
        <p className="text-primary text-[0.8rem] mt-1 w-full"></p>
        <Input
          className="text-md! mt-8"
          placeholder="Confirm Password:"
          name="confirm-password"
          type="password"
          onChange={inputChanges}
        />
        <p className="text-primary text-[0.8rem] mt-1 w-full"></p>
        <p className="mt-10 text-sm text-dark-200/60">
          Already have an account?
          <Link href="/login" className="ml-1 text-primary">
            Login
          </Link>
        </p>
        <Button
          variant="primary"
          className="mt-5 text-[0.9rem]!"
          onClick={registerHandler}
        >
          Register
        </Button>
      </form>
    </div>
  );
}
