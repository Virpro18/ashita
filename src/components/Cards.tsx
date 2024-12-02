import { ProjectData_SubData } from "../types/database";
import EachUtils from "@/utils/EachUtils";

interface CardsProps {
  data: ProjectData_SubData[];
}

function Cards({ data }: CardsProps) {
  return (
    <div className="grid md:grid-cols-[repeat(4,minmax(300px,1fr))] sm:grid-cols-2 grid-cols-1 gap-4 p-4">
      {data.length <= 0 ? (
        <h1 className="text-center text-xl font-bold text-gray-700">
          No Data
        </h1>
      ) : (
        <EachUtils
          of={data}
          render={(item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 shadow-md bg-white"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Creator:</strong> {item.creator || "Unknown"}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Date:</strong> {item.date}
              </p>
              <a
                href={item.projectURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visit Project
              </a>
              <div className="mt-4">
                <iframe
                  src={item.projectURL}
                  title={`Preview of ${item.title}`}
                  loading="lazy"
                  className="w-full h-32 border border-gray-300 rounded-md"
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>
          )}
          onError={() => (
            <h1 className="text-center text-red-500">Error loading item</h1>
          )}
        />
      )}
    </div>
  );
}

export default Cards;
