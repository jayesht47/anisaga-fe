import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/lib/session-management";

const publicRoutes = ["/signup", "/login", "/", "/favicon.ico"];
const privateRoutes = ["/dashboard"];
const loginSignupPaths = ["/signup", "/login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const isPrivateRoute = privateRoutes.includes(path);
  const isLoginSignupPath = loginSignupPaths.includes(path);

  if (isPublicRoute && !isLoginSignupPath) return NextResponse.next(); //If it is a public page proceed to next without checking for session.
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (isPrivateRoute && !session?.userName) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isLoginSignupPath && session?.userName) {
    // user is already authenticated redirect to /dashboard
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  // setting current path name to use in server components
  const headers = new Headers(req.headers);
  headers.append("x-current-path", req.nextUrl.pathname);
  console.log(`setting current path header as ${req.nextUrl.pathname}`);
  return NextResponse.next({ headers });
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
