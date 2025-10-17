"use client";
import React, { ReactNode } from "react";
import Navbar from "@/components/organisms/Navbar/Navbar";
import Footer from "@/components/organisms/Footer/Footer";
import { isPrivateRoute } from "@/utils/privateRoutes";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: ReactNode }) {
  const routes = ["/"];
  const route = usePathname();
  return (
    <>
      {isPrivateRoute(route as string, routes) && <Navbar />}
      {isPrivateRoute(route as string, routes) ? (
        <main className="relative flex flex-row-reverse items-start justify-center overflow-hidden grow">
          {children}
        </main>
      ) : (
        children
      )}
      {isPrivateRoute(route as string, routes) && <Footer />}
    </>
  );
}
