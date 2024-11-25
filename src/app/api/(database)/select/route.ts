import search from "@/utils/search";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const find = search("sample");
  try {
    const body = await req.json();
    let data;
    if (body.name) data = find.name(body.name);
    else if (body.id) data = find.id(body.id);
    return NextResponse.json({ data });
  } catch {
    console.log(find.all())
    return NextResponse.json({ data: find.all(), status: 200 });
  }
};
