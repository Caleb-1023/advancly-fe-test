// import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import DashboardCard from "./card";
import { useLocation } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
);

const Dashboard = () => {
  const location = useLocation();
  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const labels = [
    "USA",
    "UK",
    "India",
    "BD",
    "England",
    "Japan",
    "Nigeria",
    "Ghana",
    "Germany",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const lineLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "July",
    "July",
  ];

  const lineData = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: lineLabels.map(() =>
          faker.datatype.number({ min: 0, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const Voptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const Vlabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const Vdata = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: Vlabels.map(() => faker.datatype.number({ min: -100, max: 100 })),
        backgroundColor: "rgba(50, 140, 100)",
      },
      //   {
      //     label: 'Dataset 2',
      //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //   },
    ],
  };

  const name = location.pathname.replace("/", "");

  return (
    <div>
      <h1 className="capitalize mb-4 text-2xl font-semibold">
        {name === "" ? "Home" : name}
      </h1>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 overflow-auto">
        {/* <ResponsiveContainer width="100vw" height="100vh"> */}
        <DashboardCard
          icon={
            <svg
              width="20"
              height="20"
              className=""
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891"
                stroke="#3c58f0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                //   strokeOpacity={"0"}
              />
            </svg>
          }
          title="total spend"
          value="$12,500"
          stats="$3125"
          green
        >
          <div className="hidden lg:block">
            <Line options={lineOptions} data={lineData} />
          </div>
        </DashboardCard>
        <div className="md:col-span-2 lg:col-span-1 grid md:grid-cols-2 lg:grid-rows-2 gap-4">
          <DashboardCard
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                <path d="M48 0H0V48H48V0Z" fill="white" fill-opacity="0.01" />
                <path
                  d="M12 39C14.2091 39 16 37.2091 16 35C16 32.7909 14.2091 31 12 31C9.79086 31 8 32.7909 8 35C8 37.2091 9.79086 39 12 39Z"
                  stroke="#3c58f0"
                  stroke-width="4"
                  stroke-linejoin="round"
                />
                <path
                  d="M35 39C37.2091 39 39 37.2091 39 35C39 32.7909 37.2091 31 35 31C32.7909 31 31 32.7909 31 35C31 37.2091 32.7909 39 35 39Z"
                  stroke="#3c58f0"
                  stroke-width="4"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 35H2V11H31V35H16"
                  stroke="#3c58f0"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31 35V18H39.5714L46 26.5V35H39.8112"
                  stroke="#3c58f0"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title="supplier count"
            value="4525"
            stats="12% less order"
          />
          <DashboardCard
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 12 12"
                enable-background="new 0 0 12 12"
              >
                <g>
                  <rect fill="#3c58f0" height="3.5" width="1" x="1.5" y="5" />
                  <rect fill="#3c58f0" height="3.5" width="1" x="3.5" y="5" />
                  <rect fill="#3c58f0" height="3.5" width="1" x="5.5" y="5" />
                  <rect fill="#3c58f0" height="3.5" width="1" x="7.5" y="5" />
                  <rect fill="#3c58f0" height="3.5" width="1" x="9.5" y="5" />
                  <polygon fill="#3c58f0" points="6,0 0,3 0,4 12,4 12,3  " />
                  <polygon
                    fill="#3c58f0"
                    points="1,9.5 0,11 0,12 12,12 12,11 11,9.5  "
                  />
                </g>
              </svg>
            }
            title="purchase order"
            value="1555"
            stats="12% less end"
            green
          />
          <DashboardCard
            icon={
              <svg
                fill="#3c58f0"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21,9H19.535l-3.7-5.555a1,1,0,0,0-1.664,1.11L17.132,9H6.868L9.832,4.555a1,1,0,0,0-1.664-1.11L4.465,9H3a1,1,0,0,0,0,2H4v8a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V11h1a1,1,0,0,0,0-2ZM9,17.5a1,1,0,0,1-2,0v-4a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0v-4a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0v-4a1,1,0,0,1,2,0Z" />
              </svg>
            }
            title="invoice count"
            value="4525"
          />
          <DashboardCard
            icon={
              <svg
                fill="#3c58f0"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21,9H19.535l-3.7-5.555a1,1,0,0,0-1.664,1.11L17.132,9H6.868L9.832,4.555a1,1,0,0,0-1.664-1.11L4.465,9H3a1,1,0,0,0,0,2H4v8a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V11h1a1,1,0,0,0,0-2ZM9,17.5a1,1,0,0,1-2,0v-4a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0v-4a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0v-4a1,1,0,0,1,2,0Z" />
              </svg>
            }
            title="po/invoice accuracy"
            value="2578"
          />
        </div>
        <DashboardCard
          icon={
            <svg
              width="20"
              height="20"
              className=""
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891"
                stroke="#3c58f0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                //   strokeOpacity={"0"}
              />
            </svg>
          }
          title="spend by legal entity"
          value="12,500"
        >
          <div className="hidden lg:block">
            <Bar options={options} data={data} />
          </div>
        </DashboardCard>
        <DashboardCard
          icon={
            <svg width="20" height="20" viewBox="-5 0 32 32">
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Icon-Set-Filled"
                  transform="translate(-315.000000, -777.000000)"
                  fill="#3c58f0"
                >
                  <path
                    d="M326,794.015 C323.786,794.015 321.992,792.223 321.992,790.013 C321.992,787.802 323.786,786.011 326,786.011 C328.215,786.011 330.009,787.802 330.009,790.013 C330.009,792.223 328.215,794.015 326,794.015 L326,794.015 Z M336.279,786.904 L327.188,777.543 C326.471,776.804 325.309,776.804 324.591,777.543 L315.5,786.904 C314.985,787.434 314.999,787.81 315.014,788.521 L315,788.521 L315,804.904 C315,807.166 316.781,809 318.978,809 L332.898,809 C335.095,809 336.876,807.166 336.876,804.904 L336.876,789.544 C336.876,788.357 336.996,787.643 336.279,786.904 L336.279,786.904 Z M326,788.012 C324.894,788.012 323.996,788.907 323.996,790.013 C323.996,791.117 324.894,792.014 326,792.014 C327.107,792.014 328.005,791.117 328.005,790.013 C328.005,788.907 327.107,788.012 326,788.012 L326,788.012 Z"
                    id="tag"
                  ></path>
                </g>
              </g>
            </svg>
          }
          title="variation in price in time"
          value="54,542"
          stats="42% increase price"
          green
        >
          <div className="hidden lg:block">
            <Bar options={Voptions} data={Vdata} />
          </div>
        </DashboardCard>
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default Dashboard;
