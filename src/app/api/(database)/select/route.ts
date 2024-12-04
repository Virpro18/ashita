import search from "@/utils/search";
import { NextResponse, NextRequest } from "next/server";
// import jwt from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
  try {
    const { datas } = await req.json();
    console.log(datas);
    const find = search(`${datas.database}`);
    if (datas.data.id) {
      const data = find.id(datas.data.id);
      return NextResponse.json({ data }, { status: 200 });
    }
    console.log(datas.data)
    const data = find.user(datas.data);
    console.log(data)
    if(data.name && data.password) {
      return NextResponse.json({ status: 200 });
    }
    return NextResponse.json({}, { status: 404 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Sakura Miko" }, { status: 417 });
  }
};

export const GET = (req: NextRequest) => {
  const data = req.nextUrl.searchParams.get("q");
  const find = search("projectList");
  if (!data) {
    return NextResponse.json({ data: find.all() }, { status: 200 });
  }
  return NextResponse.json({ data: find.title(data) }, { status: 200 });
};
