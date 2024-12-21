import { ProjectData_SubData } from "@/types/database";
import search from "@/utils/search";
import { writeToJSON } from "@/utils/writeJson";
import { NextRequest, NextResponse } from "next/server";

interface Datas {
  database: string;
  projectData: Partial<ProjectData_SubData>;
  creator: string;
  id: string;
}

export const PUT = async (req: NextRequest) => {
  try {
    const datas: Datas = await req.json();

    // Search for data in the specified database
    const find = search(datas.database);
    const data = find.findDataByKey(datas.creator, "creator");
    const fullData = find.all()

    if (!data) {
      return NextResponse.json({ data: "kosong" }, { status: 404 });
    }

    if (data.length > 1) {
      // console.log("Multiple entries found:", data);
      // console.log("Incoming data:", datas);

      const prevData = data.find((item) => {
        // console.log("item data: ", item);
        // console.log("status: ", item.id === datas.id);
        return item.id === datas.id;
      });
      const index: number = fullData.findIndex((item: ProjectData_SubData) => item.id === datas.id);
      // console.log('index: ',index)

      fullData[index] = { ...fullData[index], ...datas.projectData };
      // console.log('fullData: ',fullData)
      // console.log(prevData);
      // console.log(data)

      if (!prevData) {
        return NextResponse.json({ data: "kosong" }, { status: 404 });
      }
      // console.log("Data Recieved:", datas);
      // const updatedData = { ...prevData, ...datas };
      writeToJSON(datas.database, fullData,datas.id);
      return NextResponse.json(fullData, { status: 200 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error handling PUT request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
