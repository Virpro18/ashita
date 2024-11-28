import search from "@/utils/search";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const find = search("sample");
  try {
    const body = await req.json();
    if (body.id) {
      const data = find.id(body.id);
      return NextResponse.json({ data }, { status: 200 });
    }
  } catch {
    return NextResponse.json({ message: "Sakura Miko" }, { status: 417})
  }
};

export const GET = (req: NextRequest) => {
  const data = req.nextUrl.searchParams.get("q");
  const find = search("sample");
  if (!data) {
    return NextResponse.json({data:find.all()},{status:200})
  }
  return NextResponse.json({ data: find.name(data) }, { status: 200 });
};




