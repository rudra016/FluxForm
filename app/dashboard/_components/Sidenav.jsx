import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import { LibraryBig, LineChart, MessagesSquare, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SideNav = () => {
  const {user} = useUser()
  const [percent, setPercent] = useState(0)
  const [formList, setFormList] = useState()
  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 1,
      name: "Responses",
      icon: MessagesSquare,
      path: "/dashboard/responses",
    },
    {
      id: 1,
      name: "Analytics",
      icon: LineChart,
      path: "/dashboard/analytics",
    },
    {
      id: 1,
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
  ];
  const path = usePathname();
  useEffect(() => {
    user&&GetFormList()
  }, [user]);
  
  const GetFormList = async()=>{
    const result = await db.select().from(JsonForms).where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(JsonForms.id))
    setFormList(result)
    const percent = (result.length/10)*100
    setPercent(percent)
}

  return (
    <div className="h-screen shadow-md border bg-white">
      <div className="p-5">
        {menuList.map((menu, index) => (
          <Link
            href={menu.path}
            key={index}
            className={`flex items-center gap-3 p-4 mb-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer text-gray-500 ${path==menu.path && 'bg-primary text-white'}`}
          >
            <menu.icon />
            {menu.name}
          </Link>
        ))}
      </div>
      <div className="fixed bottom-5 p-6 w-64">
        <Button className="w-full">+ Create Form</Button>
        <div className="my-7">
            <Progress value={percent} />
            <h2 className="text-sm mt-2 text-gray-600"><strong>{formList?.length} </strong>Out of <strong>10</strong> File Created</h2>
            <h2 className="text-sm mt-2 text-gray-600">Upgrade for full AI access and more..</h2>
        </div>
    </div>
    </div>
   
  );
};

export default SideNav;
