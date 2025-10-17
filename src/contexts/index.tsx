"use client";
import React, { useEffect } from "react";
import { AudioProvider } from "./AudioContext";
import { ToastProvider } from "./ToastContext";
import { StateProvider } from "./StateContext";

export default function ContextProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.document.addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);
  return (
    <StateProvider>
      <ToastProvider>{children}</ToastProvider>
    </StateProvider>
  );
}
