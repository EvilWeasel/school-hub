"use client";

import { Construction, Home, Newspaper } from "lucide-react";
import { SidebarItem } from "@/components/navigation/sidebar-item";

interface SidebarRoutesProps {
  loggedIn: boolean;
}

const routes = [
  {
    icon: Newspaper,
    label: "Browse Blogs",
    href: "/articles",
  },
  {
    icon: Construction,
    label: "Browse Courses",
    href: "/courses",
  },
];
export const SidebarRoutes = ({ loggedIn }: SidebarRoutesProps) => {
  return (
    <div className="flex h-full flex-col justify-end">
      {loggedIn && (
        <div className="flex w-full flex-col">
          <div>dashboard-nav</div>
        </div>
      )}

      <div className="flex w-full flex-col">
        {routes.map((route) => (
          <SidebarItem key={route.href} {...route} />
        ))}
      </div>
    </div>
  );
};
