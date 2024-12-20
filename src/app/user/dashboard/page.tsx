import DashboardItem from "@/components/DashboardItem";
import EachUtils from "@/utils/EachUtils";
import { IoIosSettings } from "react-icons/io";

const dashboard = () => {
  const data = [
    {
      title: "Total Projects",
      value: "10",
      icon: <IoIosSettings />,
    },
    {
      title: "Total Users",
      value: "100",
      icon: <i className="fa fa-users"></i>,
    },
  ];
  // useImmer
  return (
    <div className="relative flex justify-center">
      <div className="grid grid-cols-4 gap-5 w-10/12">
        <EachUtils
          of={data}
          render={(item) => (
            <DashboardItem
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          )}
        />
      </div>
    </div>
  );
};

export default dashboard;
