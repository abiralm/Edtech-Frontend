import { GoGraph } from "react-icons/go";
import { FaBook } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// ✅ Pass the actual component reference (not a string)
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: GoGraph,
  },
  {
    title: "My Courses",
    url: "#",
    icon: FaBook,
  },
  {
    title: "Students",
    url: "#",
    icon: IoMdPeople,
  },
  {
    title: "Earnings",
    url: "#",
    icon: MdAttachMoney,
  },
  {
    title: "Feedback",
    url: "#",
    icon: FaStar,
  },
  {
    title: "Settings",
    url: "#",
    icon: IoMdSettings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="cursor-pointer text-xl font-bold text-[#2563EB] mb-4">
            EduTech <span className='text-[#1F2937] '>Pro</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-4">
                        <Icon className="h-6 w-6" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
