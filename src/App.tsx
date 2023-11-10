/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, createContext } from "react";
import Navbar from "./components/navbar";
import SideBar, { SideBarItem } from "./components/sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./screens/dashboard";

type ExpandedContextType = {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
};

export const SidebarContext = createContext<ExpandedContextType | null>(null);

function App() {
  const { pathname } = useLocation();
  // console.log(pathname.split("/"))

  const primary = "#3c58f0";

  const active = (name: string) => {
    // if (pathname.split("/").includes(name)) {
    if (pathname.split("/")[1] === name) {
      return true;
    } else {
      return false;
    }
  };

  // const primary = '#176fff';
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="">
      <SidebarContext.Provider value={{ expanded, setExpanded }}>
        <Navbar />
        <div className="flex">
          <SideBar>
            <SideBarItem
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 20H7C5.89543 20 5 19.1046 5 18V10.9199C5 10.336 5.25513 9.78132 5.69842 9.40136L10.6984 5.11564C11.4474 4.47366 12.5526 4.47366 13.3016 5.11564L18.3016 9.40136C18.7449 9.78132 19 10.336 19 10.9199V18C19 19.1046 18.1046 20 17 20H15M9 20V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V20M9 20H15"
                    stroke={active("") ? primary : "#797979"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              text="home"
              path="/"
            />
            <SideBarItem
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_15_35)">
                    <path
                      d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998"
                      stroke={active("cart") ? primary : "#797979"}
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19"
                      stroke={active("cart") ? primary : "#797979"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="10"
                      cy="20"
                      r="1"
                      stroke={active("cart") ? primary : "#797979"}
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="17.5"
                      cy="20"
                      r="1"
                      stroke={active("cart") ? primary : "#797979"}
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              }
              text="cart"
              path="cart"
            />
            <SideBarItem
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7.5L11.6078 3.22062C11.7509 3.14014 11.8224 3.09991 11.8982 3.08414C11.9654 3.07019 12.0346 3.07019 12.1018 3.08414C12.1776 3.09991 12.2491 3.14014 12.3922 3.22062L20 7.5M4 7.5V16.0321C4 16.2025 4 16.2876 4.02499 16.3637C4.04711 16.431 4.08326 16.4928 4.13106 16.545C4.1851 16.6041 4.25933 16.6459 4.40779 16.7294L12 21M4 7.5L12 11.5M12 21L19.5922 16.7294C19.7407 16.6459 19.8149 16.6041 19.8689 16.545C19.9167 16.4928 19.9529 16.431 19.975 16.3637C20 16.2876 20 16.2025 20 16.0321V7.5M12 21V11.5M20 7.5L12 11.5"
                    stroke={active("products") ? primary : "#797979"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              text="products"
              path="products"
            />
            <SideBarItem
              icon={
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill={active("documents") ? primary : "#797979"}
                    d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
                  />
                </svg>
              }
              text="documents"
              path="documents"
            />
            <SideBarItem
              icon={
                <svg
                  fill={active("orders") ? primary : "#797979"}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18,2H6A2,2,0,0,0,4,4V22l3-3,2,3,3-3,3,3,2-3,3,3V4A2,2,0,0,0,18,2ZM12,16H8a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Zm0-4H8a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Zm4,4H15a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Zm0-4H15a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Zm0-5H8A1,1,0,0,1,8,5h8a1,1,0,0,1,0,2Z" />
                </svg>
              }
              text="orders"
              path="orders"
            />
            <SideBarItem
              icon={
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    fillOpacity="0.01"
                  />
                  <path d="M48 0H0V48H48V0Z" fill="white" fillOpacity="0.01" />
                  <path
                    d="M12 39C14.2091 39 16 37.2091 16 35C16 32.7909 14.2091 31 12 31C9.79086 31 8 32.7909 8 35C8 37.2091 9.79086 39 12 39Z"
                    stroke={active("track-orders") ? primary : "#797979"}
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 39C37.2091 39 39 37.2091 39 35C39 32.7909 37.2091 31 35 31C32.7909 31 31 32.7909 31 35C31 37.2091 32.7909 39 35 39Z"
                    stroke={active("track-orders") ? primary : "#797979"}
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 35H2V11H31V35H16"
                    stroke={active("track-orders") ? primary : "#797979"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M31 35V18H39.5714L46 26.5V35H39.8112"
                    stroke={active("track-orders") ? primary : "#797979"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              text="track orders"
              toolText="Track"
              path="track-orders"
            />
            <SideBarItem
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    stroke={active("accounts") ? primary : "#797979"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 17L3 11l13-6 13 6-13 6z"
                  />
                  <path
                    stroke={active("accounts") ? primary : "#797979"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15.5l13 6 13-6"
                  />
                  <path
                    stroke={active("accounts") ? primary : "#797979"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 20l13 6 13-6"
                  />
                </svg>
              }
              text="accounts"
              path="accounts"
            />
            <SideBarItem
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z"
                    stroke={active("user") ? primary : "#797979"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.1303 13C13.8203 13 15.1903 11.63 15.1903 9.94C15.1903 8.25001 13.8203 6.88 12.1303 6.88C10.4403 6.88 9.07031 8.25001 9.07031 9.94C9.07031 11.63 10.4403 13 12.1303 13Z"
                    stroke={active("user") ? primary : "#797979"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 19.11C6.80719 17.8839 7.51529 16.7956 8.51178 16.0179C9.50827 15.2403 10.736 14.818 12 14.818C13.264 14.818 14.4917 15.2403 15.4882 16.0179C16.4847 16.7956 17.1928 17.8839 17.5 19.11"
                    stroke={active("user") ? primary : "#797979"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              text="user profile"
              toolText="user"
              path="user"
            />
          </SideBar>
          <div className="w-full h-full p-10">
            <Dashboard />
          </div>
        </div>
      </SidebarContext.Provider>
    </div>
  );
}

export default App;
