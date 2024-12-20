import { Dispatch, SetStateAction, useState } from "react";
import { ProjectData_SubData } from "@/types/database";

type setState<T> = Dispatch<SetStateAction<T>>;

const EditCard = ({
  edit,
  close,
  data,
}: {
  edit: setState<ProjectData_SubData[]>;
  close: setState<boolean>;
  data: ProjectData_SubData;
}) => {
  // Local state untuk menyimpan data sementara
  const [localData, setLocalData] = useState<ProjectData_SubData>(data);
  // console.log("localData: ")
  // console.info(localData)
  // console.log("Data: ")
  // console.info(data)

  // Handle change untuk input dan textarea
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = e.target; // Menggunakan `id` karena sesuai dengan atribut input
    // console.log(value)
    setLocalData((prev) => ({ ...prev, [id]: value })); // Update state lokal
  }

  // Submit perubahan
  function handleSubmit() {
    edit((prev) =>
      prev.map((item) =>
        item.id === localData.id ? { ...item, ...localData } : item
      )
    );
    close(false); // Close the form  
  }

  return (
    <div className="bg-black bg-opacity-40 fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-lg p-4 md:w-1/3 w-3/4">
        <h1 className="text-2xl font-bold">Edit Card</h1>
        <div className="flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-lg font-bold">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="border border-gray-300 rounded-lg p-2"
              value={localData.title}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-lg font-bold">
              Description
            </label>
            <textarea
              id="description"
              className="border border-gray-300 rounded-lg p-2"
              value={localData.description}
              onChange={handleChange}
            />
          </div>

          {/* Link */}
          <div className="flex flex-col gap-2">
            <label htmlFor="link" className="text-lg font-bold">
              Link
            </label>
            <input
              type="text"
              id="projectURL"
              className="border border-gray-300 rounded-lg p-2"
              value={localData.projectURL}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="bg-green-600 p-2 px-4 text-white font-bold font-sans hover:text-green-600 hover:bg-white transition-all rounded-lg"
            onClick={handleSubmit} // Simpan perubahan
          >
            Save
          </button>
          <button
            className="bg-red-600 p-2 px-4 text-white font-bold font-sans hover:text-red-600 hover:bg-white transition-all rounded-lg"
            onClick={() => close(false)} // Tutup tanpa menyimpan
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
