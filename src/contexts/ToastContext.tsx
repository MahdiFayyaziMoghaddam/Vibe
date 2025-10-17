"use client";
import Toast from "@/components/molecules/Toast/Toast";
import { NotificationInstance } from "antd/es/notification/interface";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface IToast {
  show: boolean;
  title: string;
  description: string;
  type: keyof NotificationInstance;
}

const ToastContext = createContext<Dispatch<SetStateAction<IToast>> | null>(
  null
);

interface IToastProviderProps {
  children: ReactNode;
}
export const ToastProvider = ({ children }: IToastProviderProps) => {
  const [toastController, setToastController] = useState<IToast>({
    description: "",
    show: false,
    title: "",
    type: "info",
  });
  useEffect(() => {
    if (!toastController.show) return;
    setToastController({
      description: "",
      show: false,
      title: "",
      type: "success",
    });
  }, [toastController]);
  return (
    <ToastContext.Provider value={setToastController}>
      {children}
      <Toast {...toastController} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContextSelector(ToastContext, (ctx) => ctx) as Dispatch<
    SetStateAction<IToast>
  >;
};
