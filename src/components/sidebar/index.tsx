/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useContext, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarContext } from "../../App";

// type ExpandedContextType = {
//     expanded: boolean;
//     setExpanded: (value: boolean) => void;
// };

// export const SidebarContext = createContext<ExpandedContextType | null>(null);

interface Props {
  children?: ReactNode;
}

const SideBar = ({ children }: Props) => {
//   const [expanded, setExpanded] = useState(true);
// const expanded = useContext(SidebarContext);
// const setExpanded = useContext(SidebarContext)


  return (
    <aside className="border-r p-2 h-screen sticky top-0">
      <nav>
        <div>
          {/* <button
            onClick={() => expanded?.setExpanded(!expanded.expanded)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button> */}
        </div>
        {/* <SidebarContext.Provider value={{expanded, setExpanded}}> */}
          <ul className="flex flex-col items-center justify-between">{children}</ul>
        {/* </SidebarContext.Provider> */}
      </nav>
    </aside>
  );
};

export default SideBar;

type ItemProps = {
  icon: React.ReactNode;
  text: string;
  toolText?: string; 
  // alert?: boolean;
  path?: string;
};

export const SideBarItem = ({ icon, text, path, toolText }: ItemProps) => {
  const location = useLocation();
  //@ts-ignore
  const active = location.pathname.split("/").includes(path);

  const expanded = useContext(SidebarContext);
  return (
    <Link
      to={path ? path : text}
      className={`
        relative flex items-end justify-center px-2 py-4 lg:px-3 my-1 cursor-pointer
        transition-colors group rounded-md
        ${
          active
            ? "bg-[#eceefe] text-[#00000080]"
            : "hover:bg-[#eceefeaa] text-[#00000080]"
        }
    `}
    >
      <span className={active ? "text-[#2075FF]" : ""}>{icon}</span>
      <span
        className={`hidden lg:block overflow-hidden transition-all capitalize ${
          expanded?.expanded ? "w-36 ml-3 font-medium" : "w-0"
        } ${active ? "font-medium" : ""}`}
      >
        {text}
      </span>
      {!expanded?.expanded && (
        <div
          className={`hidden lg:block
          capitalize absolute left-full rounded-md px-2 py-1 ml-6
          bg-gray-100 text-black text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {toolText || text}
        </div>
      )}
    </Link>
  );
};
