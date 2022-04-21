import AuthRouting from "../modules/auth/auth.routing";
import HomeRouting from "../modules/home/home.routing";

export interface IRouter {
  path: string;
  name: string;
  permissions: string[];
  title: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  children?: IRouter[];
  layout: "AUTH" | "MAIN";
}

const importRoutig = [AuthRouting, HomeRouting];
export const listRouters: Array<IRouter> = importRoutig.flat();

export const listRouterAuth = listRouters.filter(
  (route) => route.layout === "AUTH"
);
export const listRouterMain = listRouters.filter(
  (route) => route.layout === "MAIN"
);

export const routers = [...listRouters, ...listRouterAuth, ...listRouterMain];
