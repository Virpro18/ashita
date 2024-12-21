import { ProjectData_SubData } from "@/types/database";
import search from "@/utils/search";
import { writeToJSON } from "@/utils/writeJson";
import { NextRequest, NextResponse } from "next/server";

interface Datas {
  datas: {
    data:  ProjectData_SubData;
    database: string;
  };
}

export const PUT = async (req: NextRequest) => {
  try {
    const { datas }: Datas = await req.json();
    // console.log('datas yang di terima: ',datas)
    // cons

    // Search for data in the specified database
    const find = search(datas.database);
    const data = find.findDataByKey(datas.data.creator, "creator");
    const fullData = find.all();

    if (!data) {
      return NextResponse.json({ data: "kosong" }, { status: 404 });
    }

    if (data.length > 1) {
      // console.log("Multiple entries found:", data);
      // console.log("Incoming data:", datas);

      const prevData = data.find((item) => {
        // console.log("item data: ", item);
        // console.log("status: ", item.id === datas.id);
        return item.id === datas.data.id;
      });
      const index: number = fullData.findIndex(
        (item: ProjectData_SubData) => item.id === datas.data.id
      );
      console.log("index: ", index);

      fullData[index] = { ...fullData[index], ...datas.data };
      console.log("fullData: ", fullData);
      console.log("prevData: ", prevData);
      console.log("data: ", data);

      if (!prevData) {
        return NextResponse.json({ data: "kosong" }, { status: 404 });
      }
      // console.log("Data Recieved:", datas);
      // const updatedData = { ...prevData, ...datas };
      writeToJSON(datas.database, fullData);
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
