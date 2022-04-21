import { IRouter } from "@/router/config";
import { lazy } from "react";

const AuthRouting: Array<IRouter> = [
  {
    path: "/login",
    name: "login",
    permissions: [],
    title: "Đăng nhập",
    component: lazy(() => import("./pages/Login")),
    layout: "AUTH",
  },

  {
    path: "/reset-password",
    name: "reset-password",
    permissions: [],
    title: "Đặt lại mật khẩu",
    component: lazy(() => import("./pages/ResetPassword")),
    layout: "AUTH",
  },
];
export default AuthRouting;
