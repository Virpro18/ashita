import { NextRequest, NextResponse } from "next/server";

export const DELETE = (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    return NextResponse.json({ data: "DELETE SUCCES" }, { status: 200 });
  }
  return NextResponse.json({ data: "DELETE FAILED" }, { status: 406 });
};
