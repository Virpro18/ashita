"use client"

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";

export default function SpecialTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  let isFull = false
  if(pathname.startsWith('/search')) {
    isFull=true
  }
  return (
    <>
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar isFull={isFull} />
        <main className="flex-1 overflow-y-auto p-2">{children}</main>
      </div>
    </>
  );
}
