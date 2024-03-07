'use client'

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";

const DesktopSidebar = () => {
  const routes = useRoutes();
  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="
    hidden
    lg:fixed
    lg:inset-y-0
    lg:left-0
    lg:z-40
    lg:w-20
    lg:px-6
    lg:overflow-y-auto
    lg:bg-white
    lg:border-r-[1px]
    lg:pb-4
    lg:flex
    lg:flex-col
    justify-between
     ">
      <nav className="
      mt-4
      flex
      flex-col
      justify-between">
        <ul></ul>
      </nav>
      desktop sidebar!
    </div>
  )
}

export default DesktopSidebar;
