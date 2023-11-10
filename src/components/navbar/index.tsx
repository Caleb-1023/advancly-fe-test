import { useContext } from "react";
import { SidebarContext } from "../../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  const expanded = useContext(SidebarContext);

  return (
    <div className="px-6 py-4 flex items-center justify-between bg-white border-b-2 border-black/10 z-50">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => expanded?.setExpanded(!expanded.expanded)}
          className="p-2 bg-slate-200 rounded-full"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Menu / Hamburger_MD">
              <path
                id="Vector"
                d="M5 17H19M5 12H19M5 7H19"
                stroke="#606060"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
        <Link to={'/'} className="maven text-2xl font-black">Beximco</Link>
      </div>
      <div className="flex items-center space-x-2 font-medium">
        <div className="inline-block  bg-[#eceefe] rounded-full">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z"
              stroke={"#3c58f0"}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.1303 13C13.8203 13 15.1903 11.63 15.1903 9.94C15.1903 8.25001 13.8203 6.88 12.1303 6.88C10.4403 6.88 9.07031 8.25001 9.07031 9.94C9.07031 11.63 10.4403 13 12.1303 13Z"
              stroke={"#3c58f0"}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 19.11C6.80719 17.8839 7.51529 16.7956 8.51178 16.0179C9.50827 15.2403 10.736 14.818 12 14.818C13.264 14.818 14.4917 15.2403 15.4882 16.0179C16.4847 16.7956 17.1928 17.8839 17.5 19.11"
              stroke={"#3c58f0"}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p>John Doe</p>
      </div>
    </div>
  );
};

export default Navbar;
