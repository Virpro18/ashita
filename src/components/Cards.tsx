import { data } from "../types/database";
import EachUtils from "@/utils/EachUtils";

interface CardsProps {
  data: data[];
}

function Cards({ data }: CardsProps) {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {data.length <= 0 ? (
        <h1 className="text-center text-xl font-bold text-gray-700">No Data</h1>
      ) : (
          <EachUtils
            of={data}
            render={(item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 shadow-md bg-white w-48 text-center"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h2>
                <p className="text-gray-600">ID: {item.id}</p>
              </div>
            )}
            onError={() => <h1 className="text-center text-red-500">Error loading item</h1>}
          />
      )}
    </div>
  );
}

export default Cards;
