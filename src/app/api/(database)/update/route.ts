import { ProjectData_SubData } from "@/types/database";
import readJson from "@/utils/readJson";
import { writeToJSON } from "@/utils/writeJson";
import { NextRequest, NextResponse } from "next/server";

interface Datas {
  datas: {
    data: ProjectData_SubData;
    database: string;
  };
}

export const PUT = async (req: NextRequest) => {
  try {
    const { datas }: Datas = await req.json();
    // console.log('datas yang di terima: ',datas)
    // Search for data in the specified database

    const otherData = readJson(datas.database);

    if (!otherData.datas) {
      return NextResponse.json({ data: "kosong" }, { status: 404 });
    }
    const index: number = otherData.datas.findIndex(
      (item: ProjectData_SubData) => item.id === datas.data.id
    );
    console.log("index: ", index);

    otherData.datas[index] = { ...otherData.datas[index], ...datas.data };
    console.log("otherData: ", otherData);
    const message = await writeToJSON(datas.database, otherData);
    const checkData = readJson(datas.database)
    return NextResponse.json({checkData,message}, { status: 200 });
  } catch (error) {
    console.error("Error handling PUT request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
