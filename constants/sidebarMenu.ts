import { routes } from "./routes";
import { SidebarMenuItem } from "../types/sidebarMenuItem";

export const sidebarPrimaryMenu: SidebarMenuItem[] = [
  {
    id: "dashboard",
    name: "dashboard",
    href: routes.DASHBOARD,
  },
  {
    id: "transactions",
    name: "transactions",
    href: routes.TRANSACTIONS,
  },
  {
    id: "payments",
    name: "payments",
    href: routes.PAYMENTS,
  },
  {
    id: "planning",
    name: "planning",
    href: routes.PLANNING,
  },
  {
    id: "settings",
    name: "settings",
    href: routes.SETTINGS,
  },
];

export const sidebarSecondaryMenu = [
  {
    id: "help",
    name: "help",
    href: routes.HELP,
  },
  {
    id: "logout",
    name: "logout",
    href: routes.LOGOUT,
  },
];
