"use client";
import { useState } from "react";
import { ProjectData_SubData } from "../types/database";
import { FaPlus } from "react-icons/fa";
import EachUtils from "@/utils/EachUtils";
import EditCard from "./EditCard/EditCard";

interface CardsProps {
  data: ProjectData_SubData[];
}

function Cards({ data }: CardsProps) {
  const [cards, setCards] = useState<ProjectData_SubData[]>(data);
  // const [confirmation, setConfirmation] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState<ProjectData_SubData | null>(
    null
  );

  // Handler untuk menghapus card berdasarkan ID
  const handleDelete = (id: string) => {
    setCards((prev) => prev.filter((item) => item.id !== id));
  };

  // Handler untuk mempersiapkan card untuk diupdate
  const handleUpdate = (id: string) => {
    const selectedCard = cards.find((item) => item.id === id);
    if (selectedCard) {
      setEditingData(selectedCard);
      setIsEditing(true);
    }
  };
  console.log("cardsDatas")
  console.info(cards)
  console.log("editData: ")
  console.info(editingData);

  return (
    <>
      {isEditing && editingData && (
        <EditCard edit={setCards} close={setIsEditing} data={editingData} />
      )}

      {cards.length <= 0 ? (
        <h1 className="text-center text-xl w-full font-bold text-gray-700">
          No Data
        </h1>
      ) : (
        <EachUtils
          of={cards}
          render={(item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 shadow-md bg-white "
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
              {/* Tombol untuk Hapus dan Update */}
              {!isEditing && (
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(item.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          )}
          onError={() => (
            <h1 className="text-center text-red-500">Error loading item</h1>
          )}
        />
      )}
      <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white flex items-center justify-center cursor-pointer hover:bg-black hover:bg-opacity-20 transition-all">
        <div>
          <FaPlus></FaPlus>
        </div>
      </div>
    </>
  );
}

export default Cards;
