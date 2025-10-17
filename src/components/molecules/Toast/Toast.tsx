"use client";
import Loader from "@/components/atoms/Loader/Loader";
import { notification } from "antd";
import { NotificationInstance } from "antd/es/notification/interface";
import { useEffect } from "react";

interface IToastProps {
  title?: string;
  description?: string;
  type?: keyof NotificationInstance;
  show?: boolean;
}

// Change prop (type) with controller to change toast ui in moment
const Toast = ({
  description = "Some description ...",
  type = "info",
  title = "Some Title ...",
  show = false,
}: IToastProps) => {
  const [api, contextHolder] = notification.useNotification({
    placement: "bottomRight",
    closeIcon: false,
    pauseOnHover: false,
    maxCount: 1,
  });

  useEffect(() => {
    if (!show) return;
    const key = "CUSTOM-TOAST-KEY";
    const duration = type === "open" ? null : 4;
    const toast = type !== "destroy" ? api[`${type}`] : api.open;
    const openNotification = () => {
      toast({
        icon: type === "open" ? <Loader className="scale-80" /> : null,
        message: (
          <p className="flex items-center gap-2 text-dark-200 text-md line-clamp-1 leading-5.5">
            {title}
          </p>
        ),
        description: (
          <p className="text-dark-300 text-md line-clamp-1 leading-4">
            {description}
          </p>
        ),
        duration: 10,
        style: {
          background: "var(--color-dark-600)",
          border: "1px solid var(--color-dark-400)",
          borderRadius: "0.2rem",
          color: "var(--color-dark-200)",
          padding: "0.6rem",
          minHeight: "auto",
          height: "auto",
          width: "18rem",
        },
        key,
      });
    };
    openNotification();
    return () => (type === "open" ? api.destroy(key) : undefined);
  }, [type]);

  return <>{contextHolder}</>;
};

export default Toast;
