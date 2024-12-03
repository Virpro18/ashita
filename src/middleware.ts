import { NextResponse,NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  const { pathname } = new URL(req.url);
  if(req.method !== "GET") {
    return NextResponse.next()
  } 
  if (pathname.startsWith("/api/")) {
    if(pathname.startsWith("/user/")) {
      console.log("ikitai")
      return NextResponse.next();
    }
    const auth = req.headers.get("authorization")
    if (!auth) {
        return NextResponse.json({message:"Unauthorized"},{status:401})
    }
    return NextResponse.next();
  }
  return NextResponse.next();
};

// export const config = {
//     mather : "/api/:path*"
// }