import { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  title: string;
  subTitle?: string;
  value: string;
  stats?: string;
  green?: boolean;
  children?: ReactNode;
  options?: ReactNode;
};

const DashboardCard = ({
  icon,
  title,
  subTitle,
  value,
  stats,
  children,
  options,
  green,
}: CardProps) => {
  return (
    <div className="w-full p-5 flex flex-col space-y-5 rounded-lg border-2 border-slate-200">
      <div>
        <div className="inline-block p-2 bg-[#eceefe] rounded-full">{icon}</div>
        <span>{options}</span>
      </div>
      <div className="flex flex-col space-y-1 lg:space-y-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between uppercase font-medium text-gray-400">
          <h3 className="text-sm">{title}</h3>
          <p className="text-xs">{subTitle}</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center  justify-start lg:space-x-2">
          <h1 className="text-3xl font-medium">{value}</h1>
          <p className={`${green ? 'text-green-700':'text-red-500'} flex items-center text-xs font-medium`}>
            {stats && (
              <>
                {green ? (
                  <img src="/triangle-up.svg" className="w-5" />
                ) : (
                  <img src="/triangle-down.svg" className="w-5" />
                )}
                {stats}
              </>
            )}
          </p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardCard;
