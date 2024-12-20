interface DashboardItemProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const DashboardItem = ({title, value, icon}: DashboardItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-200">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-xl font-semibold text-gray-700">{value}</p>
    </div>
  );
};

export default DashboardItem;