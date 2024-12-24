import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session)
  if (!session) {
    // Redirect pengguna yang tidak login
    return NextResponse.redirect(new URL("/user/account/login", req.url));
  }

  return res;
}

// Tentukan path yang menggunakan middleware
export const config = {
  matcher: ["/user/dashboard/:path*", "/login/:path*"], // Middleware diterapkan ke path ini
};
