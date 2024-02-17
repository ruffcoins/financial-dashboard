"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type SidebarContextProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextProps>({
  sidebarOpen: false,
  setSidebarOpen: () => {},
  toggleSidebar: () => {},
});

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarOpen, setSidebarOpen, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  typeof context === "undefined" &&
    console.log("Sidebar context should be used within the sidebar provider");

  return context;
};
