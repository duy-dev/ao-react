import { IRouter } from "@/router/config";
import { lazy } from "react";

const HomeRouting: Array<IRouter> = [
  {
    path: "/dashboard",
    name: "dashboard",
    permissions: [],
    title: "Dashboard",
    component: lazy(() => import("./pages/Dashboard")),
    layout: "MAIN",
  },
];
export default HomeRouting;
