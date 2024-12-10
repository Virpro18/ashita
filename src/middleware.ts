// FILEPATH: /home/arona/project/suisi/sunao/src/middleware.ts
"use server"
import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "./utils/joseAuth";

const handleLoginRoute = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value as string;
  const valid = await verifyToken(token);
  return valid.valid && valid.payload
    ? NextResponse.redirect(new URL("/user/dashboard", req.url))
    : NextResponse.next();
};

const handleApiRoutes = async (req: NextRequest) => {
  const pathname = new URL(req.url).pathname;
  if (pathname.startsWith("/user/")) {
    console.log("ikitai");
    return NextResponse.next();
  }

  const auth = req.headers.get("authorization");
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // req.method()

    const valid = await verifyToken(auth)
    console.log(valid);
    return valid.valid && valid.payload
    ? NextResponse.redirect(new URL("/user/dashboard", req.url))
    : NextResponse.next();

};

const handleDashboardRoute = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value as string;
  console.log(token);
  const valid = await verifyToken(token);
  console.log(valid);
  return valid.valid && valid.payload
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/user/account/login", req.url));
};

export const middleware = async (req: NextRequest) => {
  const pathname = new URL(req.url).pathname;

  if (req.method !== "GET") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return handleApiRoutes(req);
  }

  if (pathname.startsWith("/user/account/login")) {
    return handleLoginRoute(req);
  }

  if (pathname.startsWith("/user/dashboard")) {
    return handleDashboardRoute(req);
  }

  return NextResponse.next();
};

// Uncomment and adjust the config if needed
// export const config = {
//     matcher: "/api/:path*"
// }
